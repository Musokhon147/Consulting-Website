import React, { useState, useEffect } from 'react';
import { Menu, X, Send, ArrowRight, Languages, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';
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
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 flex items-center cursor-pointer"
                        onClick={() => setActiveTab('about')}
                    >
                        <span className="text-2xl font-black text-academy-navy tracking-tighter">FRESHMAN</span>
                        <span className="ml-1 text-[10px] font-bold text-academy-orange uppercase tracking-[0.2em] mt-1 hidden sm:block">Academy</span>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => setActiveTab(link.id)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${activeTab === link.id ? 'text-academy-navy' : 'text-gray-500 hover:text-academy-navy'
                                    }`}
                            >
                                {link.name}
                                {activeTab === link.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-academy-orange/10 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-academy-navy transition-all"
                            >
                                <Languages size={18} className="text-academy-orange" />
                                <span>{languages.find(l => l.code === language)?.label}</span>
                                <ChevronDown size={16} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {langOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setLangOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2 text-sm font-bold transition-colors ${language === lang.code ? 'text-academy-orange bg-academy-orange/5' : 'text-gray-600 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            href="https://t.me/freshmanacademy"
                            className="p-2 text-academy-navy hover:text-academy-orange"
                        >
                            <Send size={20} />
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-academy-navy text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-xl shadow-academy-navy/20 flex items-center space-x-2"
                        >
                            <span>{t.nav.book}</span>
                            <ArrowRight size={16} />
                        </motion.button>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        {/* Mobile Language Switch Icons */}
                        <div className="flex gap-2">
                            {['en', 'uz', 'ru'].map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLanguage(l as Language)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black uppercase transition-all ${language === l ? 'bg-academy-orange text-white' : 'bg-gray-100 text-gray-400'}`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-academy-navy p-2"
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        setActiveTab(link.id);
                                        setIsOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-3 rounded-xl text-lg font-bold transition-all ${activeTab === link.id ? 'bg-academy-navy text-white' : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="pt-4">
                                <button className="w-full bg-academy-orange text-white py-4 rounded-xl font-black text-lg shadow-lg">
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
