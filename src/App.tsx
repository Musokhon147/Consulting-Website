import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestimonialCard from './components/TestimonialCard';
import Hero from './components/Hero';
import { testimonials } from './data/testimonials';
import { useTranslation } from './i18n/LanguageContext';

// Pages
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';

import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function App() {
  const [activeTab, setActiveTab] = useState('testimonials');
  const { t, language } = useTranslation();

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'alumni':
        return (
          <div className="py-20 text-center space-y-12">
            <h1 className="text-6xl font-black text-academy-navy">{t.alumni.title} <span className="text-academy-orange">{t.alumni.span}</span></h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              {t.alumni.desc}
            </p>
            <div className="flex justify-center flex-wrap gap-8 opacity-50">
              {['Harvard', 'Stanford', 'Oxford', 'Cambridge', 'NUS', 'MIT'].map(uni => (
                <span key={uni} className="text-3xl font-black tracking-tighter">{uni.toUpperCase()}</span>
              ))}
            </div>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-20">
              {testimonials.slice(0, 4).map(t => <TestimonialCard key={t.id} testimonial={t} />)}
            </div>
          </div>
        );
      case 'testimonials':
        return (
          <>
            <Hero />
            <section className="py-20 lg:py-32 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'contact':
        return <ContactPage />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-academy-orange selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

        {activeTab !== 'contact' && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-academy-navy rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-academy-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                  {t.cta.title.split(' ').map((word: string, i: number) =>
                    word.toLowerCase() === 'future' || word.toLowerCase() === 'kelajagingizni' || word.toLowerCase() === 'будущее' ?
                      <span key={i} className="text-academy-orange underline decoration-[8px] underline-offset-[12px]">{word} </span> : word + ' '
                  )}
                </h2>
                <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                  {t.cta.desc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('contact')}
                    className="bg-academy-orange text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-academy-orange/30"
                  >
                    {t.cta.button}
                  </motion.button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
