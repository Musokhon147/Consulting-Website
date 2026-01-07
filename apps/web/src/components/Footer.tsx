import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-academy-navy dark:bg-academy-deepNavy text-white pt-20 pb-10 border-t border-white/5 dark:border-white/5 shadow-2xl transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold tracking-tighter">FRESHMAN</span>
                            <span className="ml-1 text-xs font-semibold text-academy-orange uppercase tracking-widest mt-1">Academy</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            {t.footer.desc}
                        </p>
                        <div className="text-sm">
                            <p className="text-gray-400">160 Robinson Road #14-04,</p>
                            <p className="text-gray-400">Singapore, 068914</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-academy-orange tracking-wide">{t.footer.info}</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.help}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.partnership}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.vacancies}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.testi}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-academy-orange tracking-wide">{t.footer.programs}</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">{t.nav.courses}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.programs_list.english}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.programs_list.admissions}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.programs_list.support}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.programs_list.consult}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t.footer.programs_list.alumni}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-academy-orange tracking-wide">{t.footer.social}</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white hover:text-academy-orange transition-all transform hover:-translate-y-1">
                                <span className="sr-only">Telegram</span>
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.206 8.334l-1.742 8.216c-.131.581-.476.721-.963.451l-2.651-1.954-1.279 1.231c-.141.141-.26.26-.532.26l.191-2.703 4.92-4.441c.214-.191-.047-.297-.333-.108l-6.082 3.83-2.62-.819c-.57-.179-.581-.57.119-.844l10.231-3.942c.475-.172.891.112.741.823z" /></svg>
                            </a>
                            <a href="#" className="text-white hover:text-academy-orange transition-all transform hover:-translate-y-1">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="text-white hover:text-academy-orange transition-all transform hover:-translate-y-1">
                                <span className="sr-only">YouTube</span>
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-semibold tracking-wider uppercase">
                    <p>FRESHMAN © 2025 Freshman PTE. LTD</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
