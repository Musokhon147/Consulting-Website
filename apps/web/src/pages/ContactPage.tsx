import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { Unmask } from '../components/PremiumEffects';
import { supabase } from '../lib/supabase';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase.from('contacts').insert([
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'General Inquiry',
                    message: formData.message,
                },
            ]);

            if (error) throw error;
            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            alert('Error sending message: ' + (error as any).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-academy-deepNavy min-h-screen pt-32 pb-24 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left: Content */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <Unmask>
                                <h1 className="text-7xl md:text-9xl font-serif font-black text-academy-navy dark:text-white italic tracking-tighter leading-none">
                                    {t.contact.title}
                                </h1>
                            </Unmask>
                            <Unmask delay={0.2}>
                                <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-xl">
                                    {t.contact.desc}
                                </p>
                            </Unmask>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: <Phone />, label: t.contact.phone, val: '+998 90 123 45 67' },
                                { icon: <Mail />, label: t.contact.email, val: 'info@freshman.academy' },
                                { icon: <MapPin />, label: t.contact.address, val: '160 Robinson Road, Singapore' },
                                { icon: <Clock />, label: 'Hours', val: 'Mon - Fri, 9:00 - 18:00' }
                            ].map((info, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 group hover:bg-academy-navy dark:hover:bg-academy-orange transition-all duration-500"
                                >
                                    <div className="w-12 h-12 bg-white dark:bg-academy-deepNavy text-academy-orange rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                        {React.cloneElement(info.icon as React.ReactElement<any>, { size: 24 })}
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-white/60 mb-1">{info.label}</p>
                                    <p className="text-lg font-serif font-black text-academy-navy dark:text-white group-hover:text-white leading-tight">{info.val}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-academy-navy dark:bg-white/5 p-12 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-academy-orange/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 space-y-10">
                            {success ? (
                                <div className="text-center py-20 space-y-6">
                                    <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Send size={40} />
                                    </div>
                                    <h2 className="text-4xl font-serif font-black text-white italic">Message Sent!</h2>
                                    <p className="text-gray-400">Thank you for reaching out. Our team will get back to you soon.</p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="text-academy-orange font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-4xl font-serif font-black text-white italic">{t.contact.form.title}</h2>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">{t.contact.form.name}</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-academy-orange transition-colors"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">{t.contact.form.email}</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-academy-orange transition-colors"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">{t.contact.form.message}</label>
                                            <textarea
                                                required
                                                rows={4}
                                                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-academy-orange transition-colors resize-none"
                                                placeholder="Your message here..."
                                                value={formData.message}
                                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-academy-orange text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-4 shadow-2xl shadow-academy-orange/30 group disabled:opacity-50"
                                        >
                                            <span>{loading ? 'Sending...' : t.contact.form.button}</span>
                                            <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                                        </motion.button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
