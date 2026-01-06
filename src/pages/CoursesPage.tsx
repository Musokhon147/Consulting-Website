import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Lightbulb, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const CoursesPage: React.FC = () => {
    const { t } = useTranslation();

    const courseIcons = [<BookOpen key="1" />, <Globe key="2" />, <Lightbulb key="3" />, <TrendingUp key="4" />];
    const courseColors = ["from-blue-600 to-indigo-700", "from-indigo-600 to-purple-700", "from-purple-600 to-pink-700", "from-emerald-600 to-teal-700"];

    return (
        <div className="bg-gray-50/50 pb-32">
            {/* Header Section */}
            <section className="bg-white py-24 lg:py-32 border-b border-gray-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-serif font-black text-academy-navy mb-8 tracking-tight">
                            {t.courses.title} <br />
                            <span className="text-academy-orange italic">{t.courses.span}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl">
                            {t.courses.desc}
                        </p>
                    </motion.div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-academy-lightGray/10 skew-x-12 transform origin-top-right -z-0" />
            </section>

            {/* Courses Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                        {t.courses.items.map((course: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -15 }}
                                className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-2xl shadow-gray-200/40 border border-gray-50 group flex flex-col gap-10 relative overflow-hidden"
                            >
                                {/* Hover Gradient Reveal */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${courseColors[idx]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                    <div className={`w-24 h-24 shrink-0 bg-gradient-to-br ${courseColors[idx]} rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-200 text-white transform group-hover:rotate-6 transition-transform duration-500`}>
                                        {React.cloneElement(courseIcons[idx] as React.ReactElement, { size: 40 })}
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="bg-gray-50 text-gray-400 px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2 border border-gray-100">
                                            <Clock size={14} /> {course.duration}
                                        </span>
                                        <span className="bg-academy-orange/5 text-academy-orange px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2 border border-academy-orange/10">
                                            <CheckCircle size={14} /> {course.level}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-serif font-black text-academy-navy group-hover:text-academy-orange transition-colors">
                                        {course.t}
                                    </h3>
                                    <p className="text-lg text-gray-500 leading-relaxed font-light">
                                        {course.d}
                                    </p>

                                    <div className="pt-6">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            className="px-8 py-3 bg-academy-navy text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 group/btn hover:bg-academy-orange transition-colors duration-500"
                                        >
                                            {t.courses.learnMore}
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default CoursesPage;
