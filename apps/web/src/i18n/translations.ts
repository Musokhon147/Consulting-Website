export type Language = 'en' | 'uz' | 'ru';

export const translations = {
    en: {
        nav: {
            about: 'About Us',
            courses: 'Courses',
            admissions: 'Admissions',
            alumni: 'Alumni',
            testimonials: 'Testimonials',
            contact: 'Contact',
            book: 'Book Consultation'
        },
        alumni: {
            title: 'Global Alumni',
            span: 'Network',
            desc: 'Over 1,200 graduates in 40+ countries. Our network is our greatest asset.'
        },
        hero: {
            title: 'Hear from Our Students',
            subtitle: 'Discover how Freshman Academy has helped aspiring scholars navigate the path to top-tier global universities.',
            home: 'Home Page'
        },
        about: {
            title: 'We Bridge the Gap to Your Future',
            desc: 'Freshman Academy is more than an admissions consultancy. We are a lifelong community of scholars dedicated to excellence.',
            stats: {
                admissions: 'Successful Admissions',
                scholarships: 'Scholarships Secured',
                partners: 'Partner Universities',
                mentors: 'Expert Mentors'
            },
            mission: {
                title: 'Our Mission & Values',
                v1: { t: 'Academic Integrity', d: 'We believe in honest, hard-earned achievement. Our mentors guide students to discover their own unique voice.' },
                v2: { t: 'Global Vision', d: 'The world is your classroom. We prepare students to be competitive on the most prestigious global stages.' },
                v3: { t: 'Lifelong Support', d: 'Admission is just the beginning. Our alumni network provides career mentorship long after graduation.' }
            }
        },
        courses: {
            title: 'Our Academic',
            span: 'Programs',
            desc: 'We offer specialized programs designed to elevate your profile and ensure you stand out in the most competitive application pools.',
            items: [
                { t: "Advanced English Proficiency", d: "Master academic writing and speaking for top-tier university expectations.", duration: "12 Weeks", level: "Intermediate - Advanced" },
                { t: "Ivy League Admissions Program", d: "Exclusive mentorship for US elite universities, focusing on holistic profiles.", duration: "6 Months", level: "Highly Competitive" },
                { t: "Masters Strategy & Support", d: "Comprehensive guidance for graduate applications to world-class research labs.", duration: "18 Weeks", level: "Graduate Level" },
                { t: "Leadership & Extra-curriculars", d: "Build a standout profile with unique project leadership and service.", duration: "8 Weeks", level: "All Levels" }
            ],
            learnMore: 'Learn More'
        },
        admissions: {
            title: 'The Path to',
            span: 'Acceptance',
            desc: 'Our structured, multi-stage process is designed to minimize stress and maximize your potential for success.',
            steps: [
                { t: "Initial Consultation", d: "An in-depth review of your grades, extracurriculars, and personal goals." },
                { t: "Strategy Development", d: "Crafting a unique narrative and selecting a balanced list of target universities." },
                { t: "Essay & Portfolio Mentorship", d: "Iterative feedback on your personal statement and creative portfolios." },
                { t: "Interview Preparation", d: "Mock interviews with alumni from top-tier institutions like Oxford and Harvard." },
                { t: "Final Review & Submission", d: "Meticulous quality checks on every component of your application." }
            ],
            cta: 'Start Your Application Today'
        },
        contact: {
            title: 'Get In',
            span: 'Touch',
            desc: 'Have questions about our programs? Our admissions experts are ready to provide the answers you need.',
            email: 'Email Us',
            call: 'Call Us',
            office: 'Singapore Office',
            form: {
                name: 'Full Name',
                email: 'Email Address',
                interest: 'Interest',
                message: 'Message',
                button: 'Send Message'
            },
            map: 'Find us in Downtown Singapore'
        },
        cta: {
            title: 'Ready to Write Your Future?',
            desc: 'Join the 1,200+ students who have successfully navigated the path to excellence with our dedicated mentorship.',
            button: 'Book a Consultation'
        },
        footer: {
            desc: 'Empowering global minds to achieve academic excellence and gain admission to the world\'s most prestigious institutions.',
            info: 'INFORMATION',
            programs: 'PROGRAMS',
            social: 'SOCIAL MEDIA',
            links: {
                help: 'Help Center',
                partnership: 'Partnership',
                vacancies: 'Vacancies',
                testi: 'Testimonials'
            },
            programs_list: {
                english: 'Advanced English',
                admissions: 'Admissions Program',
                support: 'Full Support',
                consult: 'Consultations',
                alumni: 'Alumni'
            }
        }
    },
    uz: {
        nav: {
            about: 'Biz haqimizda',
            courses: 'Kurslar',
            admissions: 'Qabul',
            alumni: 'Bitiruvchilar',
            testimonials: 'Fikrlar',
            contact: 'Aloqa',
            book: 'Maslahat olish'
        },
        alumni: {
            title: 'Global bitiruvchilar',
            span: 'tarmogʻi',
            desc: '40 dan ortiq mamlakatda 1200 dan ortiq bitiruvchilar. Bizning tarmogʻimiz eng katta boyligimizdir.'
        },
        hero: {
            title: 'Talabalarimiz fikri',
            subtitle: 'Freshman Academy intiluvchan talabalarga dunyoning eng nufuzli universitetlariga kirishda qanday yordam berganini bilib oling.',
            home: 'Bosh sahifa'
        },
        about: {
            title: 'Kelajagingizga koʻprik boʻlamiz',
            desc: 'Freshman Academy shunchaki qabul maslahatxonasi emas. Biz mukammallikka intiluvchi olimlarning umrbod hamjamiyatimiz.',
            stats: {
                admissions: 'Muvaffaqiyatli qabullar',
                scholarships: 'Yutib olingan grantlar',
                partners: 'Hamkor universitetlar',
                mentors: 'Ekspert mentorlar'
            },
            mission: {
                title: 'Bizning Missiyamiz va Qadriyatlarimiz',
                v1: { t: 'Akademik halollik', d: 'Biz halol va mehnat bilan erishilgan yutuqlarga ishonamiz. Mentorlarimiz talabalarga oʻz ovozini topishga yordam beradi.' },
                v2: { t: 'Global qarash', d: 'Dunyo — bu sizning sinfxonangiz. Biz talabalarni eng nufuzli global bosqichlarda raqobatbardosh boʻlishga tayyorlaymiz.' },
                v3: { t: 'Umrbod yordam', d: 'Oʻqishga kirish — bu faqat boshlanishi. Bizning bitiruvchilar tarmogʻimiz oʻqishdan keyin ham karyera boʻyicha mentorlik qiladi.' }
            }
        },
        courses: {
            title: 'Bizning Akademik',
            span: 'Dasturlar',
            desc: 'Biz sizning profilingizni oshirish va eng raqobatbardosh arizalar orasida ajralib turishingizni taʼminlash uchun moʻljallangan maxsus dasturlarni taklif etamiz.',
            items: [
                { t: "Ilgʻor ingliz tili", d: "Eng yaxshi universitetlar talablariga mos akademik yozish va soʻzlashishni oʻrganing.", duration: "12 hafta", level: "Oʻrta - Ilgʻor" },
                { t: "Ivy League qabul dasturi", d: "AQShning elita universitetlari uchun eksklyuziv mentorlik, yaxlit profillarga eʼtibor qaratadi.", duration: "6 oy", level: "Yuqori raqobat" },
                { t: "Magistratura strategiyasi", d: "Dunyo darajasidagi tadqiqot laboratoriyalariga magistratura arizalari uchun har tomonlama yoʻriqnoma.", duration: "18 hafta", level: "Magistratura darajasi" },
                { t: "Liderlik va toʻgaraklar", d: "Noyob loyiha rahbarligi va xizmat koʻrsatish bilan ajralib turadigan profil yarating.", duration: "8 hafta", level: "Barcha darajalar" }
            ],
            learnMore: 'Batafsil maʼlumot'
        },
        admissions: {
            title: 'Qabulga eltuvchi',
            span: 'Yoʻl',
            desc: 'Bizning koʻp bosqichli jarayonimiz stressni kamaytirish va muvaffaqiyat imkoniyatlarini maksimal darajada oshirish uchun moʻljallangan.',
            steps: [
                { t: "Dastlabki maslahat", d: "Baholaringiz, darsdan tashqari mashgʻulotlaringiz va shaxsiy maqsadlaringizni batafsil tekshirish." },
                { t: "Strategiya ishlab chiqish", d: "Noyob hikoyani yaratish va maqsadli universitetlarning muvozanatli roʻyxatini tanlash." },
                { t: "Insho va portfolio mentorligi", d: "Shaxsiy bayonotingiz va ijodiy portfoliolaringiz boʻyicha muntazam fikrlar olish." },
                { t: "Intervyuga tayyorgarlik", d: "Oksford va Garvard kabi nufuzli muassasalarning bitiruvchilari bilan onlayn intervyular." },
                { t: "Yakuniy koʻrib chiqish", d: "Arizangizning har bir komponentini sinchkovlik bilan sifat nazoratidan oʻtkazish." }
            ],
            cta: 'Arizangizni bugun boshlang'
        },
        contact: {
            title: 'Biz bilan',
            span: 'Bogʻlaning',
            desc: 'Dasturlarimiz haqida savollaringiz bormi? Bizning mutaxassislarimiz javob berishga tayyor.',
            email: 'Email yozing',
            call: 'Qoʻngʻiroq qiling',
            office: 'Singapur ofisi',
            form: {
                name: 'Toʻliq ismingiz',
                email: 'Email manzilingiz',
                interest: 'Qiziqish',
                message: 'Xabar',
                button: 'Xabarni yuborish'
            },
            map: 'Bizni Singapur markazidan toping'
        },
        cta: {
            title: 'Kelajagingizni yozishga tayyormisiz?',
            desc: 'Bizning mentorlik yordamimiz bilan muvaffaqiyatga erishgan 1200 dan ortiq talabalarga qoʻshiling.',
            button: 'Maslahat olish'
        },
        footer: {
            desc: 'Global onglarni akademik mukammallikka erishishga va dunyoning eng nufuzli muassasalariga qabul qilinishiga yordam beradi.',
            info: 'MAʼLUMOT',
            programs: 'DASTURLAR',
            social: 'IJTIMOIY TARMOQLAR',
            links: {
                help: 'Yordam markazi',
                partnership: 'Hamkorlik',
                vacancies: 'Vakansiyalar',
                testi: 'Fikrlar'
            },
            programs_list: {
                english: 'Ilgʻor ingliz tili',
                admissions: 'Qabul dasturi',
                support: 'Toʻliq yordam',
                consult: 'Maslahatlar',
                alumni: 'Bitiruvchilar'
            }
        }
    },
    ru: {
        nav: {
            about: 'О нас',
            courses: 'Курсы',
            admissions: 'Поступление',
            alumni: 'Выпускники',
            testimonials: 'Отзывы',
            contact: 'Контакты',
            book: 'Консультация'
        },
        alumni: {
            title: 'Глобальная сеть',
            span: 'выпускников',
            desc: 'Более 1200 выпускников в 40+ странах. Наша сеть — наш самый ценный актив.'
        },
        hero: {
            title: 'Отзывы наших студентов',
            subtitle: 'Узнайте, как Freshman Academy помогла будущим ученым проложить путь в ведущие мировые университеты.',
            home: 'Главная'
        },
        about: {
            title: 'Мы — ваш мост в будущее',
            desc: 'Freshman Academy — это больше, чем просто консультации по поступлению. Мы — сообщество ученых, стремящихся к совершенству.',
            stats: {
                admissions: 'Успешных зачислений',
                scholarships: 'Полученных грантов',
                partners: 'Университетов-партнеров',
                mentors: 'Экспертных менторов'
            },
            mission: {
                title: 'Наша миссия и ценности',
                v1: { t: 'Академическая честность', d: 'Мы верим в честные достижения. Наши менторы помогают студентам найти свой уникальный голос.' },
                v2: { t: 'Глобальное видение', d: 'Мир — это ваш учебный класс. Мы готовим студентов к конкуренции на самых престижных мировых аренах.' },
                v3: { t: 'Пожизненная поддержка', d: 'Зачисление — это только начало. Наша сеть выпускников обеспечивает карьерное наставничество.' }
            }
        },
        courses: {
            title: 'Наши Академические',
            span: 'Программы',
            desc: 'Мы предлагаем специализированные программы, разработанные для улучшения вашего профиля и успеха в конкурентной среде.',
            items: [
                { t: "Продвинутый английский", d: "Освойте академическое письмо и речь для соответствия высшим университетским стандартам.", duration: "12 недель", level: "Средний - Продвинутый" },
                { t: "Программа Лиги Плюща", d: "Эксклюзивное наставничество для элитных университетов США с упором на целостный профиль.", duration: "6 месяцев", level: "Высокая конкуренция" },
                { t: "Стратегия магистратуры", d: "Полное сопровождение для подачи заявок в мировые научно-исследовательские лаборатории.", duration: "18 недель", level: "Магистратура" },
                { t: "Лидерство и проекты", d: "Создайте выдающийся профиль через лидерство в уникальных проектах и волонтерство.", duration: "8 недель", level: "Все уровни" }
            ],
            learnMore: 'Узнать больше'
        },
        admissions: {
            title: 'Путь к',
            span: 'Зачислению',
            desc: 'Наш структурированный многоэтапный процесс разработан для минимизации стресса и максимизации успеха.',
            steps: [
                { t: "Первичная консультация", d: "Углубленный анализ ваших оценок, внеучебной деятельности и личных целей." },
                { t: "Разработка стратегии", d: "Создание уникальной истории и подбор сбалансированного списка целевых вузов." },
                { t: "Наставничество по эссе", d: "Регулярная обратная связь по вашему эссе и творческим портфолио." },
                { t: "Подготовка к интервью", d: "Тренировочные интервью с выпускниками таких вузов, как Оксфорд и Гарвард." },
                { t: "Финальная проверка", d: "Тщательный контроль качества каждого компонента вашей заявки." }
            ],
            cta: 'Начните подачу заявки сегодня'
        },
        contact: {
            title: 'Свяжитесь',
            span: 'с Нами',
            desc: 'Есть вопросы о наших программах? Наши эксперты готовы предоставить вам все ответы.',
            email: 'Напишите нам',
            call: 'Позвоните нам',
            office: 'Офис в Сингапуре',
            form: {
                name: 'Полное имя',
                email: 'Электронная почта',
                interest: 'Интерес',
                message: 'Сообщение',
                button: 'Отправить сообщение'
            },
            map: 'Найдите нас в центре Сингапура'
        },
        cta: {
            title: 'Готовы написать свое будущее?',
            desc: 'Присоединяйтесь к более чем 1200 студентам, которые успешно прошли путь к совершенству с нашими менторами.',
            button: 'Записаться на консультацию'
        },
        footer: {
            desc: 'Помогаем талантам достигать академических высот и поступать в самые престижные учебные заведения мира.',
            info: 'ИНФОРМАЦИЯ',
            programs: 'ПРОГРАММЫ',
            social: 'СОЦСЕТИ',
            links: {
                help: 'Помощь',
                partnership: 'Партнерство',
                vacancies: 'Вакансии',
                testi: 'Отзывы'
            },
            programs_list: {
                english: 'Продвинутый английский',
                admissions: 'Программа поступления',
                support: 'Полная поддержка',
                consult: 'Консультации',
                alumni: 'Выпускники'
            }
        }
    }
};
