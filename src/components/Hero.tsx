import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="relative overflow-hidden bg-academy-lightGray py-20 lg:py-32">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-5 hidden lg:block">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="200" fill="currentColor" className="text-academy-navy" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 opacity-5 hidden lg:block">
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
                    <rect x="100" y="100" width="400" height="400" rx="40" transform="rotate(25 300 300)" fill="currentColor" className="text-academy-orange" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <nav className="flex justify-center space-x-2 text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
                    <a href="#" className="hover:text-academy-navy transition-colors">{t.hero.home}</a>
                    <span>/</span>
                    <span className="text-academy-navy font-semibold">{t.nav.testimonials}</span>
                </nav>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-academy-navy mb-6 tracking-tight italic">
                    {t.hero.title}
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed px-4 font-medium">
                    {t.hero.subtitle}
                </p>
            </div>
        </section>
    );
};

export default Hero;
