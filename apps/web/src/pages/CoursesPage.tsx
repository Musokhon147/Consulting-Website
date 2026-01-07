import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Globe, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { Unmask } from '../components/PremiumEffects';

const CoursesPage: React.FC = () => {
    const { t } = useTranslation();

    const icons = [<BookOpen />, <GraduationCap />, <Users />, <Globe />, <Award />, <Sparkles />];

    return (
        <div className="bg-white dark:bg-academy-deepNavy min-h-screen pt-32 pb-24 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="space-y-6 mb-20 text-center lg:text-left">
                    <Unmask>
                        <h1 className="text-6xl md:text-8xl font-serif font-black text-academy-navy dark:text-white italic tracking-tighter">
                            {t.courses.title}
                        </h1>
                    </Unmask>
                    <Unmask delay={0.2}>
                        <p className="max-w-2xl text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed mx-auto lg:mx-0">
                            {t.courses.desc}
                        </p>
                    </Unmask>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.courses.items.map((course: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-gray-100 dark:border-white/10 shadow-xl shadow-academy-navy/5 overflow-hidden transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-academy-orange/5 via-transparent to-academy-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 space-y-6">
                                <div className="w-14 h-14 bg-academy-navy dark:bg-academy-orange text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    {React.cloneElement(icons[index % icons.length] as React.ReactElement<any>, { size: 28 })}
                                </div>

                                <h3 className="text-2xl font-serif font-black text-academy-navy dark:text-white group-hover:text-academy-orange transition-colors duration-500">
                                    {course.t}
                                </h3>

                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                                    {course.d}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="px-3 py-1 bg-academy-navy/5 dark:bg-white/5 rounded-full text-[10px] font-black uppercase tracking-tighter text-academy-navy dark:text-gray-400">
                                        {course.duration}
                                    </span>
                                    <span className="px-3 py-1 bg-academy-orange/10 dark:bg-academy-orange/20 rounded-full text-[10px] font-black uppercase tracking-tighter text-academy-orange">
                                        {course.level}
                                    </span>
                                </div>

                                <div className="pt-4 flex items-center text-xs font-black uppercase tracking-widest text-academy-navy dark:text-white group-hover:gap-4 transition-all duration-500">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
