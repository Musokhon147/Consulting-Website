import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Globe } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white min-h-screen">
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <h1 className="text-5xl font-black text-academy-navy mb-6 tracking-tight italic">
                                {t.contact.title} <span className="text-academy-orange">{t.contact.span}</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-md font-medium">
                                {t.contact.desc}
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-academy-navy group-hover:bg-academy-navy group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{t.contact.email}</p>
                                    <p className="text-lg font-bold text-academy-navy">hello@freshman.academy</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-academy-navy group-hover:bg-academy-navy group-hover:text-white transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{t.contact.call}</p>
                                    <p className="text-lg font-bold text-academy-navy">+65 8000 1234</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-academy-navy group-hover:bg-academy-navy group-hover:text-white transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{t.contact.office}</p>
                                    <p className="text-lg font-bold text-academy-navy">160 Robinson Road #14-04</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10 flex gap-6">
                            {[Send, Instagram, Youtube, Globe].map((Icon, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-academy-orange hover:text-white transition-colors"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-academy-navy ml-2">{t.contact.form.name}</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-academy-orange/10 focus:border-academy-orange outline-none transition-all placeholder:text-gray-300" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-academy-navy ml-2">{t.contact.form.email}</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-academy-orange/10 focus:border-academy-orange outline-none transition-all placeholder:text-gray-300" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black text-academy-navy ml-2">{t.contact.form.interest}</label>
                                <select className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-academy-orange/10 focus:border-academy-orange outline-none transition-all appearance-none">
                                    <option>Ivy League Admissions</option>
                                    <option>Masters Strategy</option>
                                    <option>English Proficiency</option>
                                    <option>General Consultation</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-black text-academy-navy ml-2">{t.contact.form.message}</label>
                                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white border border-gray-200 rounded-2xl p-4 focus:ring-4 focus:ring-academy-orange/10 focus:border-academy-orange outline-none transition-all placeholder:text-gray-300 resize-none"></textarea>
                            </div>
                            <button className="w-full bg-academy-navy text-white py-5 rounded-2xl font-black text-lg hover:bg-academy-navy/90 transition-all shadow-xl shadow-academy-navy/20">
                                {t.contact.form.button}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map Mockup */}
            <section className="px-4 pb-24">
                <div className="max-w-7xl mx-auto h-[400px] bg-gray-100 rounded-[3rem] overflow-hidden border border-gray-200 relative group grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-xl font-bold text-academy-navy flex items-center gap-3">
                            <MapPin className="text-academy-orange" /> {t.contact.map}
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1522071823947-415f0d2bb24d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Map" className="w-full h-full object-cover opacity-50" />
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
