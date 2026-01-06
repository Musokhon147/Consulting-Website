import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ClipboardCheck, Search, PenTool, Mic, PartyPopper } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const AdmissionsPage: React.FC = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const icons = [<Search />, <ClipboardCheck />, <PenTool />, <Mic />, <PartyPopper />];
    const colors = ["bg-orange-500", "bg-blue-600", "bg-indigo-600", "bg-purple-600", "bg-academy-gold"];

    return (
        <div className="bg-white pb-32 overflow-hidden" ref={containerRef}>
            {/* Premium Hero */}
            <section className="relative py-32 lg:py-48 bg-academy-navy text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-serif font-black mb-8 leading-tight italic tracking-tight"
                    >
                        {t.admissions.title} <br />
                        <span className="text-academy-gold">{t.admissions.span}</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                        {t.admissions.desc}
                    </p>
                </div>

                {/* Animated Light Rays */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        animate={{ opacity: [0.1, 0.3, 0.1], rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -left-1/4 w-[150vw] h-[150vw] bg-[radial-gradient(circle,rgba(184,134,11,0.1)_0%,transparent_70%)]"
                    />
                </div>
            </section>

            {/* Interactive Timeline */}
            <section className="py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Scroll-linked line */}
                <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 overflow-hidden">
                    <motion.div
                        style={{ scaleY }}
                        className="w-full h-full bg-gradient-to-b from-academy-gold to-academy-orange origin-top"
                    />
                </div>

                <div className="space-y-40 relative">
                    {t.admissions.steps.map((step: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Step Number Dot */}
                            <div className="absolute left-[-10px] md:left-1/2 top-0 w-20 h-20 -translate-x-1/2 flex items-center justify-center z-20">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 90 }}
                                    className="w-16 h-16 rounded-3xl bg-white shadow-xl shadow-academy-navy/5 border border-gray-100 flex items-center justify-center text-academy-navy transform transition-all"
                                >
                                    <div className={`p-3 rounded-2xl ${colors[idx]} text-white`}>
                                        {React.cloneElement(icons[idx] as React.ReactElement, { size: 24 })}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Timeline Content */}
                            <div className={`w-full md:w-[42%] flex flex-col ${idx % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-white/80 backdrop-blur-xl p-10 lg:p-14 rounded-[3.5rem] border border-gray-50 shadow-2xl shadow-gray-100 group relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 ${idx % 2 === 0 ? 'right-0' : 'left-0'} w-24 h-24 bg-gradient-to-br from-academy-gold/20 to-transparent -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <span className="text-sm font-black text-academy-gold uppercase tracking-[0.3em] mb-6 block font-sans">Phase 0{idx + 1}</span>
                                    <h3 className="text-3xl md:text-4xl font-serif font-black text-academy-navy mb-6 group-hover:text-academy-orange transition-colors">
                                        {step.t}
                                    </h3>
                                    <p className="text-lg text-gray-500 leading-relaxed font-light">
                                        {step.d}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Parallax Image Mockup / Visual */}
                            <div className="hidden md:block w-[42%] aspect-square relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="w-full h-full bg-academy-lightGray/30 rounded-[4rem] border-2 border-dashed border-gray-100 flex items-center justify-center relative group overflow-hidden"
                                >
                                    <div className="text-academy-navy/5 font-serif font-black text-9xl absolute pointer-events-none">0{idx + 1}</div>
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="p-12 bg-white rounded-3xl shadow-xl border border-gray-50 z-10"
                                    >
                                        {React.cloneElement(icons[idx] as React.ReactElement, { size: 64, className: "text-academy-gold opacity-50" })}
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Premium CTA */}
            <section className="text-center py-40">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,87,34,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-academy-orange text-white px-16 py-6 rounded-full font-serif font-black text-2xl tracking-tight transition-all"
                >
                    {t.admissions.cta}
                </motion.button>
            </section>
        </div>
    );
};

export default AdmissionsPage;
