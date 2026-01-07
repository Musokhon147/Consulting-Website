import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award, Sparkles } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import AnimatedCounter from '../components/AnimatedCounter';
import { Unmask } from '../components/PremiumEffects';
import LottieAnimation from '../components/LottieAnimation';
import ParallaxImage from '../components/ParallaxImage';

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-academy-deepNavy transition-colors duration-500">
            {/* Bento Grid High-Impact Section */}
            <section className="py-24 lg:py-48 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
                    <div className="space-y-6">
                        <Unmask>
                            <h2 className="text-6xl md:text-8xl font-serif font-black text-academy-navy dark:text-white italic">
                                {t.about.title}
                            </h2>
                        </Unmask>
                        <Unmask delay={0.2}>
                            <p className="max-w-2xl text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                                {t.about.desc}
                            </p>
                        </Unmask>
                    </div>
                    <div className="hidden lg:block shrink-0">
                        <LottieAnimation
                            url="https://lottie.host/6822409f-6825-4521-995a-69486c4765d7/m68v3zR87z.json"
                            className="w-48 h-48"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[900px]">
                    {/* Big Feature Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="md:col-span-4 md:row-span-2 bento-item bg-white dark:bg-white/5 p-12 lg:p-16 flex flex-col justify-between group overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl shadow-academy-navy/5"
                    >
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,138,0,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        <div className="space-y-6 relative z-10">
                            <div className="w-16 h-16 bg-academy-orange rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-academy-orange/30">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-serif font-black text-academy-navy dark:text-white tracking-tight">
                                {t.about.mission.title}
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mt-12 relative z-10">
                            {[t.about.mission.v1, t.about.mission.v2, t.about.mission.v3].map((v, i) => (
                                <div key={i} className="space-y-4">
                                    <h4 className="text-xl font-serif font-black text-academy-navy dark:text-white">{v.t}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light">{v.d}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="md:col-span-2 bento-item p-10 bg-academy-navy dark:bg-academy-orange text-white flex flex-col justify-center items-center text-center space-y-6 shadow-2xl"
                    >
                        <div className="text-academy-orange dark:text-white"><Users size={48} /></div>
                        <div className="text-5xl font-serif font-black"><AnimatedCounter value={1200} suffix="+" /></div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] opacity-60">{t.about.stats.admissions}</p>
                    </motion.div>

                    {/* Small Accent Cards */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="md:col-span-1 bento-item bg-academy-gold p-6 flex items-center justify-center shadow-xl"
                    >
                        <Sparkles className="text-white" size={40} />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="md:col-span-1 bento-item bg-academy-orange dark:bg-academy-navy p-6 flex items-center justify-center shadow-xl"
                    >
                        <Award className="text-white" size={40} />
                    </motion.div>
                </div>
            </section>

            {/* Cinematic Parallax Visual Section */}
            <section className="relative h-[80vh] overflow-hidden">
                <div className="absolute inset-0">
                    <ParallaxImage
                        src="https://images.unsplash.com/photo-1523050335392-93851179ae22?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                        alt="Success"
                        className="w-full h-full"
                        curtainColor="#B8860B"
                    />
                    <div className="absolute inset-0 bg-academy-navy/60 dark:bg-academy-deepNavy/80 backdrop-blur-sm z-30 pointer-events-none" />
                </div>

                <div className="relative h-full flex items-center justify-center text-center px-6">
                    <div className="space-y-8">
                        <Unmask>
                            <h3 className="text-5xl md:text-8xl font-serif font-black text-white italic leading-tight">
                                Empowering <span className="text-academy-orange underline">Visionaries</span>
                            </h3>
                        </Unmask>
                        <Unmask delay={0.2}>
                            <p className="max-w-2xl mx-auto text-xl text-gray-300 font-light tracking-wide">
                                Join a community that values excellence, integrity, and global impact.
                            </p>
                        </Unmask>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
