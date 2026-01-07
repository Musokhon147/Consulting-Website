import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';

interface BrandingSettings {
    font_family: string;
    dark_mode_bg: string;
    primary_color: string;
    accent_color: string;
    logo_url: string | null;
    site_name: string;
}

interface BrandingContextType {
    settings: BrandingSettings;
    loading: boolean;
    updateSettings: (newSettings: Partial<BrandingSettings>) => Promise<void>;
    refreshSettings: () => Promise<void>;
    loadGoogleFont: (fontFamily: string) => void;
}

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export const defaultSettings: BrandingSettings = {
    font_family: 'Outfit',
    dark_mode_bg: '#001F47',
    primary_color: '#002147',
    accent_color: '#FF8A00',
    logo_url: null,
    site_name: 'FRESHMAN',
};

export const BrandingProvider = ({ children }: { children: ReactNode }) => {
    const [settings, setSettings] = useState<BrandingSettings>(defaultSettings);
    const [loading, setLoading] = useState(true);

    const fetchSettings = async () => {
        try {
            const { data, error } = await supabase
                .from('site_settings')
                .select('*')
                .eq('id', 1)
                .maybeSingle();

            if (error) throw error;

            if (data) {
                setSettings(data);
                applyStyles(data);
                loadGoogleFont(data.font_family);
            }
        } catch (error) {
            console.error('Error fetching branding settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadGoogleFont = (fontFamily: string) => {
        if (!fontFamily) return;
        const fontId = `google-font-${fontFamily.replace(/\s+/g, '-').toLowerCase()}`;
        if (document.getElementById(fontId)) return;

        const link = document.createElement('link');
        link.id = fontId;
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:wght@300;400;500;600;700;800;900&display=swap`;
        document.head.appendChild(link);
    };

    const applyStyles = (s: BrandingSettings) => {
        const root = document.documentElement;
        const font = s.font_family || defaultSettings.font_family;
        const darkBg = s.dark_mode_bg || defaultSettings.dark_mode_bg;
        const primary = s.primary_color || defaultSettings.primary_color;
        const accent = s.accent_color || defaultSettings.accent_color;

        root.style.setProperty('--site-font', `'${font}', sans-serif`);
        root.style.setProperty('--dark-bg', darkBg);
        root.style.setProperty('--primary-color', primary);
        root.style.setProperty('--accent-color', accent);

        // Apply font to dynamic elements
        document.body.style.fontFamily = `'${font}', sans-serif`;
    };

    const updateSettings = async (newSettings: Partial<BrandingSettings>) => {
        try {
            const { error } = await supabase
                .from('site_settings')
                .update(newSettings)
                .eq('id', 1);

            if (error) throw error;
            await fetchSettings();
        } catch (error) {
            console.error('Error updating settings:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    return (
        <BrandingContext.Provider value={{ settings, loading, updateSettings, refreshSettings: fetchSettings, loadGoogleFont }}>
            {children}
        </BrandingContext.Provider>
    );
};

export const useBranding = () => {
    const context = useContext(BrandingContext);
    if (!context) throw new Error('useBranding must be used within a BrandingProvider');
    return context;
};
