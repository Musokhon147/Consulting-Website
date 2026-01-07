import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestimonialCard from './components/TestimonialCard';
import Hero from './components/Hero';
import { testimonials } from './data/testimonials';
import { useTranslation } from './i18n/LanguageContext';
import { MeshBackground, GrainOverlay } from './components/PremiumEffects';

// Pages
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';

import { motion, AnimatePresence } from 'framer-motion';

const pageVariants: any = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.4, ease: "easeInOut" } }
};

function App() {
  const [activeTab, setActiveTab] = useState('testimonials');
  const { t } = useTranslation();

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
          <div className="py-32 px-4 text-center space-y-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(184,134,11,0.05)_0%,transparent_70%)] -z-10" />

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-7xl md:text-9xl font-serif font-black text-academy-navy dark:text-white tracking-tight"
              >
                {t.alumni.title} <br />
                <span className="text-academy-orange italic">{t.alumni.span}</span>
              </motion.h1>
              <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                {t.alumni.desc}
              </p>
            </div>

            {/* Premium University Ticker */}
            <div className="relative py-10 bg-academy-navy text-white -mx-4 overflow-hidden">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-20 items-center"
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-20 items-center">
                    {['Harvard', 'Stanford', 'Oxford', 'Cambridge', 'NUS', 'MIT', 'Princeton', 'Yale'].map(uni => (
                      <span key={uni} className="text-5xl font-serif font-bold italic opacity-30 hover:opacity-100 transition-opacity cursor-default tracking-tighter">{uni}</span>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-left mt-20">
              {testimonials.slice(0, 4).map(t => <TestimonialCard key={t.id} testimonial={t} />)}
            </div>
          </div>
        );
      case 'testimonials':
        return (
          <>
            <Hero />
            <section className="py-24 lg:py-40 bg-white/50 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
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
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 relative selection:bg-academy-orange selection:text-white">
      <MeshBackground />
      <GrainOverlay />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

        {activeTab !== 'contact' && (
          <section className="py-40 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-academy-navy rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,31,63,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-academy-orange/20 via-transparent to-academy-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <h2 className="text-5xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight leading-none">
                  {t.cta.title.split(' ').map((word: string, i: number) =>
                    word.toLowerCase() === 'future' || word.toLowerCase() === 'kelajagingizni' || word.toLowerCase() === 'будущее' ?
                      <span key={i} className="text-academy-orange italic block md:inline underline decoration-[6px] underline-offset-[15px]">{word} </span> : word + ' '
                  )}
                </h2>

                <p className="text-gray-400 dark:text-gray-300 text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                  {t.cta.desc}
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(255,138,0,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('contact')}
                    className="bg-academy-orange text-white px-16 py-6 rounded-[2rem] font-black text-2xl shadow-2xl transition-all"
                  >
                    {t.cta.button}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
