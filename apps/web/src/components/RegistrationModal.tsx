import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../i18n/LanguageContext';

interface RegistrationModalProps {
    course: any;
    onClose: () => void;
}

const RegistrationModal = ({ course, onClose }: RegistrationModalProps) => {
    const { language } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });

    const courseTitle = course[`title_${language}`] || course.title || course.t;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Helper to check if a string is a UUID
            const isUUID = (str: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);

            const { error } = await supabase.from('registrations').insert([
                {
                    student_name: formData.name,
                    student_phone: formData.phone,
                    course_id: (course.id && isUUID(course.id)) ? course.id : null,
                    status: 'pending'
                },
            ]);

            if (error) throw error;
            setSuccess(true);
            setTimeout(onClose, 3000);
        } catch (error) {
            alert('Error submitting registration: ' + (error as any).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-academy-navy/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-academy-deepNavy rounded-[3rem] w-full max-w-lg shadow-2xl overflow-hidden relative border border-white/10"
            >
                <div className="p-10">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h3 className="text-3xl font-serif font-black text-academy-navy dark:text-white leading-tight">
                                {success ? "Success!" : "Join the Course"}
                            </h3>
                            <p className="text-academy-orange font-bold uppercase tracking-widest text-xs mt-2">
                                {courseTitle}
                            </p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-400">
                            <X size={24} />
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-10 space-y-6"
                            >
                                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 size={40} />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-bold dark:text-white">Registration Sent!</p>
                                    <p className="text-gray-500 dark:text-gray-400">We will call you shortly to confirm your enrollment.</p>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 px-1">Your Full Name</label>
                                    <input
                                        required
                                        placeholder="Enter your name"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-academy-orange outline-none dark:text-white transition-all"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 px-1">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+998 00 000 00 00"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-academy-orange outline-none dark:text-white transition-all font-mono"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-academy-orange hover:bg-academy-orange/90 text-white font-black py-5 rounded-2xl shadow-xl shadow-academy-orange/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {loading ? 'Submitting...' : (
                                        <>
                                            <span>Reserve My Spot</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-center text-gray-400/60 uppercase tracking-widest">
                                    By clicking you agree to our privacy policy
                                </p>
                            </form>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default RegistrationModal;
