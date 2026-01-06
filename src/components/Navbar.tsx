import React, { useState, useEffect } from 'react';
import { Menu, X, Send, ArrowRight, Languages, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';
import { Magnetic } from './PremiumEffects';
import type { Language } from '../i18n/translations';

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { language, setLanguage, t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.about, id: 'about' },
        { name: t.nav.courses, id: 'courses' },
        { name: t.nav.admissions, id: 'admissions' },
        { name: t.nav.alumni, id: 'alumni' },
        { name: t.nav.testimonials, id: 'testimonials' },
        { name: t.nav.contact, id: 'contact' },
    ];

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'English' },
        { code: 'uz', label: 'Oʻzbek' },
        { code: 'ru', label: 'Русский' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'bg-white/70 backdrop-blur-2xl shadow-2xl shadow-academy-navy/5 py-4' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center">
                    <Magnetic strength={0.2}>
                        <div
                            className="flex-shrink-0 flex items-center cursor-pointer group"
                            onClick={() => setActiveTab('about')}
                        >
                            <span className="text-3xl font-serif font-black text-academy-navy tracking-tighter group-hover:text-academy-orange transition-colors duration-500 italic">FRESHMAN</span>
                        </div>
                    </Magnetic>

                    {/* Desktop Links with Magnetic Effect */}
                    <div className="hidden lg:flex items-center space-x-1 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-white/50 shadow-sm">
                        {navLinks.map((link) => (
                            <Magnetic key={link.id} strength={0.3}>
                                <button
                                    onClick={() => setActiveTab(link.id)}
                                    className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 relative ${activeTab === link.id ? 'text-white' : 'text-gray-400 hover:text-academy-navy'
                                        }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {activeTab === link.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-academy-navy shadow-lg"
                                            style={{ borderRadius: 999 }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            </Magnetic>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Magnetic strength={0.4}>
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center space-x-2 bg-white/80 hover:bg-white px-5 py-2.5 rounded-full text-xs font-black text-academy-navy shadow-sm transition-all border border-gray-100"
                            >
                                <Languages size={18} className="text-academy-orange" />
                                <span>{languages.find(l => l.code === language)?.label.toUpperCase()}</span>
                                <ChevronDown size={14} className={`transition-transform duration-500 ${langOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </Magnetic>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="fixed right-48 top-24 w-48 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden p-2 z-[110]"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setLangOpen(false);
                                            }}
                                            className={`w-full text-left px-5 py-3 text-xs font-black uppercase tracking-widest transition-all rounded-2xl ${language === lang.code ? 'text-white bg-academy-orange shadow-lg' : 'text-gray-500 hover:bg-gray-100'
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Magnetic strength={0.2}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,31,71,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-academy-navy text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.25em] shadow-xl shadow-academy-navy/10 flex items-center space-x-3 transition-all"
                            >
                                <span>{t.nav.book}</span>
                                <ArrowRight size={14} strokeWidth={3} />
                            </motion.button>
                        </Magnetic>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-white/80 p-3 rounded-2xl text-academy-navy"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed inset-x-4 top-24 bg-white/95 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-white p-8 z-[120]"
                    >
                        <div className="space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        setActiveTab(link.id);
                                        setIsOpen(false);
                                    }}
                                    className={`block w-full text-left px-6 py-4 rounded-3xl text-xl font-serif font-black transition-all ${activeTab === link.id ? 'bg-academy-navy text-white' : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <button className="w-full bg-academy-orange text-white py-5 rounded-3xl font-black text-lg shadow-xl shadow-academy-orange/20">
                                    {t.nav.book}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
