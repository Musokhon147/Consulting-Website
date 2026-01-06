import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Search, PenTool, Mic, PartyPopper } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const AdmissionsPage: React.FC = () => {
    const { t } = useTranslation();

    const icons = [<Search />, <ClipboardCheck />, <PenTool />, <Mic />, <PartyPopper />];
    const colors = ["bg-orange-500", "bg-blue-500", "bg-indigo-500", "bg-purple-500", "bg-emerald-500"];

    return (
        <div className="bg-white pb-32">
            <section className="py-24 bg-gradient-to-br from-academy-navy to-indigo-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic"
                    >
                        {t.admissions.title} <span className="text-academy-gold">{t.admissions.span}</span>
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.admissions.desc}
                    </p>
                </div>

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-white opacity-5 rounded-[40%] blur-3xl pointer-events-none"
                />
            </section>

            <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2" />

                    <div className="space-y-24">
                        {t.admissions.steps.map((step: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Icon Hub */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-14 h-14 rounded-2xl shadow-xl shadow-gray-200 z-10 border-4 border-white flex items-center justify-center -translate-x-1/2 bg-white overflow-hidden group">
                                    <div className={`absolute inset-0 ${colors[idx]} transition-transform duration-500 scale-100 group-hover:scale-0`} />
                                    <div className={`absolute inset-0 bg-academy-navy transform transition-transform duration-500 scale-0 group-hover:scale-100`} />
                                    <div className="relative z-10 p-2 text-white">
                                        {icons[idx]}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`flex-1 w-full flex ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <div className={`bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 w-full md:w-[42%] hover:shadow-2xl transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 block">Step {idx + 1}</span>
                                        <h3 className="text-2xl font-black text-academy-navy mb-4 group-hover:text-academy-orange">{step.t}</h3>
                                        <p className="text-gray-600 leading-relaxed font-medium">
                                            {step.d}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for reverse layout */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-center py-20 px-4">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-academy-orange text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl shadow-academy-orange/30 cursor-pointer"
                >
                    {t.admissions.cta}
                </motion.div>
            </section>
        </div>
    );
};

export default AdmissionsPage;
