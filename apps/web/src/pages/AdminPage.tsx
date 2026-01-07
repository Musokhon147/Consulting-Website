import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Session } from '@supabase/supabase-js';
import { useBranding, defaultSettings } from '../context/BrandingContext';
import CourseForm from '../components/admin/CourseForm';
import TestimonialForm from '../components/admin/TestimonialForm';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) setError(error.message);
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Admin Login</h2>
                {error && <div className="bg-red-500/10 text-red-500 p-3 rounded-lg mb-4 text-sm font-bold text-center">{error}</div>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 transform hover:scale-[1.02] active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const AdminDashboard = ({ session }: { session: Session }) => {
    const [view, setView] = useState('courses');
    const [items, setItems] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState<any | null>(null);
    const [loadingData, setLoadingData] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { settings, updateSettings, refreshSettings, loadGoogleFont } = useBranding();
    const [isSavingSettings, setIsSavingSettings] = useState(false);
    const [localSettings, setLocalSettings] = useState(settings);

    // Sync local settings when context settings load
    useEffect(() => {
        setLocalSettings(settings);
    }, [settings]);

    useEffect(() => {
        loadGoogleFont(localSettings.font_family);
    }, [localSettings.font_family, loadGoogleFont]);

    // Debug session if needed
    useEffect(() => {
        if (session) console.log("Admin session active:", session.user.email);
    }, [session]);

    const fetchData = async () => {
        setLoadingData(true);
        try {
            let query;
            if (view === 'students') {
                query = supabase.from('registrations').select(`
                    *,
                    courses (
                        title
                    )
                `);
            } else if (view === 'inbox') {
                query = supabase.from('contacts').select('*');
            } else {
                const table = (view === 'alumni' || view === 'testimonials') ? 'testimonials' : 'courses';
                query = supabase.from(table).select('*');
                if (view === 'alumni') query = query.eq('is_alumni', true);
                if (view === 'testimonials') query = query.eq('is_alumni', false);
            }

            const { data } = await query.order('created_at', { ascending: false });
            if (data) setItems(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoadingData(false);
        }
    };

    const handleUploadLogo = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsSavingSettings(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `logo-${Math.random()}.${fileExt}`;
            const filePath = `branding/${fileName}`;

            // Bucket name is 'Images' (case sensitive in storage_setup.md)
            const { error: uploadError } = await supabase.storage
                .from('Images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('Images')
                .getPublicUrl(filePath);

            setLocalSettings(prev => ({ ...prev, logo_url: publicUrl }));
            alert('Logo uploaded! Please click "Save All Changes" to persist.');
        } catch (error) {
            alert('Error uploading logo: ' + (error as any).message);
        } finally {
            setIsSavingSettings(false);
        }
    };

    const handleSaveSettings = async () => {
        setIsSavingSettings(true);
        try {
            await updateSettings(localSettings);
            alert('Settings saved successfully!');
            refreshSettings();
        } catch (error) {
            alert('Error saving settings: ' + (error as any).message);
        } finally {
            setIsSavingSettings(false);
        }
    };

    const handleResetToDefaults = () => {
        if (window.confirm('Reset all branding to professional defaults? This will not save until you click "Save All Changes".')) {
            setLocalSettings({
                ...defaultSettings,
                site_name: localSettings.site_name, // Keep site name
                logo_url: localSettings.logo_url    // Keep logo
            });
        }
    };

    const handleDelete = async (item: any) => {
        if (!window.confirm('Are you sure you want to delete this item?')) return;
        const table = (view === 'alumni' || view === 'testimonials') ? 'testimonials' : (view === 'inbox' ? 'contacts' : (view === 'students' ? 'registrations' : 'courses'));
        const { error } = await supabase.from(table).delete().eq('id', item.id);
        if (!error) fetchData();
        else alert('Error deleting: ' + error.message);
    };

    useEffect(() => {
        if (view !== 'settings') fetchData();
    }, [view]);

    const filteredItems = items.filter(item => {
        const search = searchTerm.toLowerCase();
        if (view === 'courses') return item.title?.toLowerCase().includes(search);
        if (view === 'testimonials' || view === 'alumni') return item.name?.toLowerCase().includes(search);
        if (view === 'inbox') return item.name?.toLowerCase().includes(search) || item.subject?.toLowerCase().includes(search);
        if (view === 'students') return item.student_name?.toLowerCase().includes(search) || item.student_phone?.toLowerCase().includes(search);
        return true;
    });

    const SkeletonCard = () => (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200 dark:bg-gray-700" />
            <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                <div className="flex justify-between pt-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex font-sans">
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col fixed h-full z-20">
                <div className="mb-10 flex items-center gap-3">
                    {localSettings.logo_url ? (
                        <img src={localSettings.logo_url} alt="Logo" className="h-10 object-contain" />
                    ) : (
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-serif font-black shadow-lg shadow-blue-600/20">
                            {localSettings.site_name?.charAt(0).toUpperCase() || 'F'}
                        </div>
                    )}
                    <h1 className="text-xl font-serif font-black tracking-tighter" style={{ fontFamily: localSettings.font_family }}>{localSettings.site_name || 'Admin Panel'}</h1>
                </div>

                <nav className="space-y-2 flex-1">
                    {['courses', 'testimonials', 'alumni'].map(v => (
                        <button key={v} onClick={() => setView(v)} className={`w-full text-left px-4 py-3 rounded-xl transition-colors font-bold ${view === v ? 'bg-blue-500/10 text-blue-600' : 'text-gray-400 hover:bg-gray-50'}`}>
                            {v.charAt(0).toUpperCase() + v.slice(1)}
                        </button>
                    ))}
                    <div className="pt-4 pb-2 text-[10px] font-black uppercase text-gray-400 px-4">CRM</div>
                    {['inbox', 'students', 'settings'].map(v => (
                        <button key={v} onClick={() => setView(v)} className={`w-full text-left px-4 py-3 rounded-xl transition-colors font-bold ${view === v ? 'bg-blue-500/10 text-blue-600' : 'text-gray-400 hover:bg-gray-50'}`}>
                            {v.charAt(0).toUpperCase() + v.slice(1)}
                        </button>
                    ))}
                </nav>

                <div className="pt-6 border-t border-gray-200">
                    <button onClick={() => supabase.auth.signOut()} className="w-full px-4 py-2 border border-red-500/30 text-red-500 rounded-lg text-sm font-bold">Sign Out</button>
                </div>
            </aside>

            <main className="flex-1 p-10 ml-64">
                <header className="mb-10 flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Manage {view.charAt(0).toUpperCase() + view.slice(1)}</h2>
                        <p className="text-gray-500 text-sm">{view === 'settings' ? 'Branding & Global Config' : `Total: ${filteredItems.length} items`}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {view !== 'settings' && (
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold text-sm"
                                />
                            </div>
                        )}
                        {view !== 'settings' && view !== 'inbox' && view !== 'students' && (
                            <button onClick={() => { setEditingItem(null); setShowModal(true); }} className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">+ Add New</button>
                        )}
                    </div>
                </header>

                {view === 'settings' ? (
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 space-y-6">
                            <h3 className="text-xl font-bold">🎨 Branding</h3>
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase text-gray-400">Font</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['Outfit', 'Inter', 'Sora', 'Plus Jakarta Sans', 'Manrope', 'Montserrat'].map(f => (
                                        <button key={f} onClick={() => setLocalSettings(prev => ({ ...prev, font_family: f }))} className={`p-3 rounded-xl border text-sm ${localSettings.font_family === f ? 'border-blue-500 bg-blue-50' : ''}`} style={{ fontFamily: f }}>{f}</button>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400">Primary Color (Navy)</label>
                                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-2 rounded-xl">
                                            <input type="color" value={localSettings.primary_color} onChange={e => setLocalSettings(prev => ({ ...prev, primary_color: e.target.value }))} className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent" />
                                            <span className="font-mono text-[10px] font-bold">{localSettings.primary_color}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-gray-400">Accent Color (Orange)</label>
                                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-2 rounded-xl">
                                            <input type="color" value={localSettings.accent_color} onChange={e => setLocalSettings(prev => ({ ...prev, accent_color: e.target.value }))} className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent" />
                                            <span className="font-mono text-[10px] font-bold">{localSettings.accent_color}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400">Dark Mode BG</label>
                                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-2 rounded-xl">
                                        <input type="color" value={localSettings.dark_mode_bg} onChange={e => setLocalSettings(prev => ({ ...prev, dark_mode_bg: e.target.value }))} className="w-8 h-8 rounded-lg cursor-pointer border-none bg-transparent" />
                                        <span className="font-mono text-[10px] font-bold">{localSettings.dark_mode_bg}</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400">Site Name</label>
                                    <input type="text" value={localSettings.site_name} onChange={e => setLocalSettings(prev => ({ ...prev, site_name: e.target.value }))} className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500 font-bold text-sm" />
                                </div>

                                <div className="flex gap-3 mt-4">
                                    <button
                                        onClick={handleSaveSettings}
                                        disabled={isSavingSettings}
                                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-green-600/20"
                                    >
                                        {isSavingSettings ? 'Saving...' : '💾 Save Changes'}
                                    </button>
                                    <button
                                        onClick={handleResetToDefaults}
                                        className="px-6 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 dark:text-gray-400 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all"
                                    >
                                        Defaults
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center space-y-4 text-center">
                            <h3 className="text-xl font-bold">🖼️ Logo</h3>
                            {localSettings.logo_url && <img src={localSettings.logo_url} className="h-24 object-contain" alt="Logo" />}
                            <div className="flex flex-col gap-3 w-full max-w-[200px]">
                                <label className="cursor-pointer bg-blue-600 text-white px-8 py-4 rounded-full font-black text-xs uppercase transition-all hover:scale-105">
                                    {isSavingSettings ? 'Uploading...' : 'Upload Logo'}
                                    <input type="file" className="hidden" accept="image/*" onChange={handleUploadLogo} />
                                </label>
                                {localSettings.logo_url && (
                                    <button onClick={() => setLocalSettings(prev => ({ ...prev, logo_url: '' }))} className="text-red-500 text-[10px] font-black uppercase tracking-widest hover:underline">Remove Logo</button>
                                )}
                            </div>
                        </div>
                    </div>
                ) : loadingData ? (
                    <div className="grid grid-cols-3 gap-6">{[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}</div>
                ) : (
                    <div className="grid grid-cols-3 gap-6">
                        {filteredItems.map(item => (
                            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group">
                                <div className="h-48 overflow-hidden"><img src={item.image_url || 'https://via.placeholder.com/400'} className="w-full h-full object-cover group-hover:scale-110 duration-500" /></div>
                                <div className="p-6">
                                    <h3 className="font-bold mb-1">{item.title || item.name}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">{item.description || item.quote}</p>
                                    <div className="flex gap-2">
                                        <button onClick={() => { setEditingItem(item); setShowModal(true); }} className="text-blue-500 font-bold px-3 py-1 bg-blue-50 rounded-md">Edit</button>
                                        <button onClick={() => handleDelete(item)} className="text-red-500 font-bold px-3 py-1 hover:bg-red-50 rounded-md">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {showModal && view === 'courses' && <CourseForm initialData={editingItem} onClose={() => setShowModal(false)} onSuccess={fetchData} />}
            {showModal && (view === 'testimonials' || view === 'alumni') && <TestimonialForm initialData={editingItem} onClose={() => setShowModal(false)} onSuccess={fetchData} />}
        </div>
    );
};

export default function AdminPage() {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setSession(session));
        return () => subscription.unsubscribe();
    }, []);

    if (loading) return <div className="h-screen flex items-center justify-center bg-gray-900 text-white">Loading Admin...</div>;
    return session ? <AdminDashboard session={session} /> : <AdminLogin />;
}
