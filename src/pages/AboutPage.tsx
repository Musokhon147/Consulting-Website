import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, Award } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    const stats = [
        { label: t.about.stats.admissions, value: '1,200+', icon: <Users className="text-academy-orange" /> },
        { label: t.about.stats.scholarships, value: '$15M+', icon: <Shield className="text-academy-orange" /> },
        { label: t.about.stats.partners, value: '150+', icon: <Target className="text-academy-orange" /> },
        { label: t.about.stats.mentors, value: '45+', icon: <Award className="text-academy-orange" /> },
    ];

    const missionValues = [
        { id: '01', title: t.about.mission.v1.t, desc: t.about.mission.v1.d },
        { id: '02', title: t.about.mission.v2.t, desc: t.about.mission.v2.d },
        { id: '03', title: t.about.mission.v3.t, desc: t.about.mission.v3.d },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-academy-navy text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight italic">
                            {t.about.title}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            {t.about.desc}
                        </p>
                    </motion.div>
                </div>

                {/* Animated Background Patches */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-20 left-10 w-64 h-64 bg-academy-gold rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-10 right-10 w-96 h-96 bg-academy-orange rounded-full blur-[120px]"
                />
            </section>

            {/* Stats Section */}
            <section className="py-20 -mt-16 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl shadow-gray-200/50 border border-white flex flex-col items-center text-center group"
                            >
                                <div className="p-4 bg-academy-orange/10 rounded-2xl mb-4 group-hover:bg-academy-orange/20 transition-colors">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-black text-academy-navy mb-1">{stat.value}</h3>
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex-1 space-y-8"
                        >
                            <h2 className="text-4xl font-black text-academy-navy">{t.about.mission.title}</h2>
                            <div className="space-y-6">
                                {missionValues.map((val) => (
                                    <div key={val.id} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-academy-navy text-white flex items-center justify-center rounded-xl font-black italic">{val.id}</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-academy-navy mb-2">{val.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="flex-1 relative"
                        >
                            <div className="aspect-square bg-academy-lightGray rounded-[4rem] overflow-hidden rotate-3 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Students collaborating" className="w-full h-full object-cover -rotate-3 scale-110" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-academy-orange rounded-full -z-10 animate-pulse" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
