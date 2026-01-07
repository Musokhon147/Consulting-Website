import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';
import { Unmask } from '../components/PremiumEffects';

const AdmissionsPage: React.FC = () => {
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="bg-white dark:bg-academy-deepNavy min-h-screen pt-32 transition-colors duration-500">
            {/* Progress Top Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-academy-orange z-[110] origin-left"
                style={{ scaleX }}
            />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-32">
                <div className="text-center space-y-6 mb-32">
                    <Unmask>
                        <h1 className="text-7xl md:text-9xl font-serif font-black text-academy-navy dark:text-white italic tracking-tighter">
                            {t.admissions.title}
                        </h1>
                    </Unmask>
                    <Unmask delay={0.2}>
                        <div className="flex justify-center items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-academy-orange">
                            <span className="w-12 h-[1px] bg-academy-orange/30" />
                            Step-by-step Guide
                            <span className="w-12 h-[1px] bg-academy-orange/30" />
                        </div>
                    </Unmask>
                </div>

                <div className="relative space-y-24">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gray-100 dark:bg-white/10" />

                    {t.admissions.steps.map((step: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative pl-20 group"
                        >
                            <div className="absolute left-0 top-0 w-14 h-14 bg-white dark:bg-academy-deepNavy border-2 border-academy-navy dark:border-academy-orange rounded-full flex items-center justify-center z-10 group-hover:bg-academy-navy dark:group-hover:bg-academy-orange transition-colors duration-500">
                                <span className="text-xl font-black text-academy-navy dark:text-white group-hover:text-white">
                                    {index + 1}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-3xl font-serif font-black text-academy-navy dark:text-white group-hover:text-academy-orange transition-colors duration-500 italic">
                                    {step.t}
                                </h3>
                                <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                                    {step.d}
                                </p>
                            </div>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                className="h-[1px] bg-gradient-to-r from-academy-navy/10 dark:from-white/10 to-transparent mt-12"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 bg-academy-navy dark:bg-white/5 p-16 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif font-black text-white italic">Ready to start?</h2>
                        <p className="text-gray-400 dark:text-gray-400 text-lg font-light">Your journey to excellence begins with a single step.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 px-12 py-5 bg-academy-orange text-white rounded-full font-black uppercase tracking-widest text-sm shadow-2xl shadow-academy-orange/40"
                        >
                            Apply Now
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionsPage;
