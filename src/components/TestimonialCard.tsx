import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import type { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    const { language } = useTranslation();

    const localizedProgram = testimonial.program[language] || testimonial.program.en;
    const localizedHeading = testimonial.heading[language] || testimonial.heading.en;
    const localizedContent = testimonial.content[language] || testimonial.content.en;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-white/5 rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-100 dark:shadow-none border border-gray-50 dark:border-white/10 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:border-academy-orange/20 group"
        >
            <div className="flex items-start space-x-5 mb-8">
                <div className="relative">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-academy-gold rounded-full p-1 text-white shadow-lg">
                        <CheckCircle size={10} strokeWidth={4} />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-black text-academy-navy mb-1 group-hover:text-academy-orange transition-colors">
                        {testimonial.name}
                    </h3>
                    <p className="text-sm font-bold text-gray-500">
                        {testimonial.university}
                    </p>
                    <p className="text-xs font-black text-academy-gold uppercase tracking-widest mt-1 opacity-70 italic">
                        {localizedProgram}
                    </p>
                </div>
            </div>

            <div className="flex-grow">
                <h4 className="text-xl font-extrabold text-academy-navy mb-6 italic leading-snug">
                    "{localizedHeading}"
                </h4>
                <div className="space-y-4">
                    {localizedContent.map((paragraph: string, index: number) => (
                        <p key={index} className="text-gray-600 text-sm leading-relaxed md:text-base font-medium">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-black tracking-[0.2em] uppercase">
                <span>{language === 'uz' ? 'TALABA FIKRI' : language === 'ru' ? 'ОТЗЫВ СТУДЕНТА' : 'STUDENT REVIEW'}</span>
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-academy-gold fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;
