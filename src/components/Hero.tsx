import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';
import { Unmask } from './PremiumEffects';

const Hero: React.FC = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax transforms
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-academy-navy">
            {/* Cinematic Background Video / Image with Parallax */}
            <motion.div
                style={{ y: y1, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,31,63,0.4)_0%,#001F3F_100%)] z-10" />
                <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                    alt="University Background"
                    className="w-full h-full object-cover grayscale-[30%] contrast-[110%]"
                />
            </motion.div>

            {/* Content Overflowing onto the Visuals */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20 text-center text-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="space-y-10"
                >
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <div className="h-[2px] w-12 bg-academy-gold/50" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-academy-gold">{t.hero.home.toUpperCase()}</span>
                        <div className="h-[2px] w-12 bg-academy-gold/50" />
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-black mb-6 tracking-tighter leading-[0.85] italic">
                        <Unmask delay={0.2}>
                            <span className="block">{t.hero.title ? t.hero.title.split(' ')[0] : 'OUR'}</span>
                        </Unmask>
                        <Unmask delay={0.4}>
                            <span className="text-academy-orange">{t.hero.title ? t.hero.title.split(' ').slice(1).join(' ') : 'STUDENTS'}</span>
                        </Unmask>
                    </h1>

                    <Unmask delay={0.6}>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed font-light opacity-80 decoration-academy-gold/20 underline underline-offset-8">
                            {t.hero.subtitle}
                        </p>
                    </Unmask>

                    <Unmask delay={0.8}>
                        <div className="pt-10 flex flex-col sm:flex-row justify-center items-center gap-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-white text-academy-navy rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-academy-gold hover:text-white transition-all duration-500"
                            >
                                Explorer Programs
                            </motion.button>
                            <motion.button
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-[0.3em] group"
                            >
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-academy-navy transition-all duration-500">
                                    <ArrowRight size={16} />
                                </div>
                                Watch Film
                            </motion.button>
                        </div>
                    </Unmask>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white opacity-40 [writing-mode:vertical-lr]">SCROLL</span>
            </motion.div>
        </section>
    );
};

const ArrowRight = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default Hero;
