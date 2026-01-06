import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Lightbulb, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const CoursesPage: React.FC = () => {
    const { t } = useTranslation();

    const courseIcons = [<BookOpen key="1" />, <Globe key="2" />, <Lightbulb key="3" />, <TrendingUp key="4" />];
    const courseColors = ["bg-blue-600", "bg-indigo-600", "bg-purple-600", "bg-emerald-600"];

    return (
        <div className="bg-gray-50 pb-20">
            <section className="bg-white py-20 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl font-black text-academy-navy mb-6 tracking-tight italic">
                            {t.courses.title} <span className="text-academy-orange">{t.courses.span}</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            {t.courses.desc}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.courses.items.map((course: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 group flex flex-col md:flex-row gap-8"
                            >
                                <div className={`w-20 h-20 shrink-0 ${courseColors[idx]} rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 text-white`}>
                                    {courseIcons[idx]}
                                </div>
                                <div className="flex-grow space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                            <Clock size={12} /> {course.duration}
                                        </span>
                                        <span className="bg-academy-orange/10 text-academy-orange px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                            <CheckCircle size={12} /> {course.level}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-academy-navy group-hover:text-academy-orange transition-colors">
                                        {course.t}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                        {course.d}
                                    </p>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-academy-navy font-black text-sm flex items-center gap-2 group/btn"
                                    >
                                        {t.courses.learnMore}
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const ArrowRight = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

export default CoursesPage;
