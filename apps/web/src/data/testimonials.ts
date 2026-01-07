export interface Testimonial {
    id: number;
    name: string;
    university: string;
    program: {
        en: string;
        uz: string;
        ru: string;
    };
    image: string;
    heading: {
        en: string;
        uz: string;
        ru: string;
    };
    content: {
        en: string[];
        uz: string[];
        ru: string[];
    };
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Alex Johnson",
        university: "National University of Singapore (NUS)",
        program: {
            en: "BSc Computer Science",
            uz: "Kompyuter fanlari bakalavri",
            ru: "Бакалавр компьютерных наук"
        },
        image: "https://i.pravatar.cc/150?u=alex",
        heading: {
            en: "From Skeptic to Scholar",
            uz: "Shubhadan ilm-fanga qarab",
            ru: "От скептика к ученому"
        },
        content: {
            en: [
                "When I first started looking at university applications, I was overwhelmed. The process seemed designed to keep people out rather than welcome them in. Freshman Academy changed everything.",
                "The mentors didn't just help me write my essays; they helped me find my voice. I learned how to articulate my experiences in a way that resonated with admissions officers.",
                "Today, I'm halfway through my degree at NUS, and I can honestly say I wouldn't be here without their guidance."
            ],
            uz: [
                "Universitetga hujjat topshirishni boshlaganimda juda qoʻrqib ketgan edim. Freshman Academy hamma narsani oʻzgartirdi.",
                "Mentorlar menga insho yozishda yordam berishdi va oʻz ovozimni topishga koʻmaklashishdi.",
                "Bugun men NUSda oʻqiyapman va ularning yordamisiz bu yerga kela olmasligimni bilaman."
            ],
            ru: [
                "Когда я начал подавать документы, я был ошеломлен процессом. Freshman Academy изменила все.",
                "Менторы не просто помогли мне написать эссе, они помогли мне найти свой голос.",
                "Сегодня я учусь в NUS и уверен, что не оказался бы здесь без их поддержки."
            ]
        }
    },
    {
        id: 2,
        name: "Sarah Lee",
        university: "University of Oxford",
        program: {
            en: "BA Philosophy, Politics and Economics (PPE)",
            uz: "Falsafa, Siyosat va Iqtisodiyot",
            ru: "Философия, политика и экономика"
        },
        image: "https://i.pravatar.cc/150?u=sarah",
        heading: {
            en: "Exceeding My Own Expectations",
            uz: "Oʻz kutganimdan ham yuqori",
            ru: "Превзошла собственные ожидания"
        },
        content: {
            en: [
                "Oxford always felt like a distant dream. Freshman Academy gave me the confidence to apply and the tools to succeed.",
                "Their interview preparation was intense but incredibly effective. They pushed me to think critically.",
                "The individual attention I received was beyond what any other agency offered."
            ],
            uz: [
                "Oksford har doim ushalmas orzu boʻlib koʻringan. Akademiya menga ishonch va muvaffaqiyat qurollarini berdi.",
                "Intervyu tayyorgarligi juda kuchli va samarali boʻldi. Ular meni tanqidiy fikrlashga oʻrgatishdi.",
                "Menga berilgan individual eʼtibor boshqa har qanday agentlikdan ustun edi."
            ],
            ru: [
                "Оксфорд всегда казался далекой мечтой. Академия дала мне уверенность и инструменты для успеха.",
                "Подготовка к интервью была интенсивной и эффективной. Они научили меня мыслить критически.",
                "Индивидуальное внимание было выше того, что предлагали другие агентства."
            ]
        }
    },
    {
        id: 3,
        name: "Michael Chen",
        university: "Stanford University",
        program: {
            en: "MS Management Science and Engineering",
            uz: "Menejment va muhandislik magistri",
            ru: "Магистр менеджмента и инженерии"
        },
        image: "https://i.pravatar.cc/150?u=michael",
        heading: {
            en: "A Strategic Approach to Admissions",
            uz: "Qabulga strategik yondashuv",
            ru: "Стратегический подход к поступлению"
        },
        content: {
            en: [
                "Freshman Academy provides a strategic roadmap that is unmatched. They understand elite admissions perfectly.",
                "The feedback on my personal statement was transformative. They helped me highlight my leadership roles.",
                "I highly recommend their programs to anyone serious about global success."
            ],
            uz: [
                "Freshman Academy misli koʻrilmagan strategik yoʻl xaritasini taqsim etadi. Ular elita qabulini juda yaxshi tushunishadi.",
                "Mening shaxsiy bayonotim boʻyicha fikrlar hamma narsani oʻzgartirdi.",
                "Global muvaffaqiyatga erishmoqchi boʻlgan har bir kishiga ularni tavsiya qilaman."
            ],
            ru: [
                "Freshman Academy предоставляет непревзойденную стратегическую дорожную карту.",
                "Отзывы о моем мотивационном письме были трансформирующими.",
                "Я рекомендую их программы всем, кто серьезно настроен на глобальный успех."
            ]
        }
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        university: "London School of Economics (LSE)",
        program: {
            en: "BSc Economics",
            uz: "Iqtisodiyot bakalavri",
            ru: "Бакалавр экономики"
        },
        image: "https://i.pravatar.cc/150?u=elena",
        heading: {
            en: "Guidance Through the Maze",
            uz: "Murakkab yoʻllar ichra yoʻlchi",
            ru: "Путеводитель по лабиринту"
        },
        content: {
            en: [
                "I was completely lost in the UCAS system until I found Freshman Academy.",
                "Their mock interviews and feedback loops were essential in building my confidence.",
                "I am so grateful for the support and the lifelong friendships I made during my time."
            ],
            uz: [
                "Freshman Academy'ni topgunimcha UCAS tizimida butunlay adashgan edim.",
                "Mock-intervyular va fikr-mulohazalar ishonchimni oshirishda muhim rol oʻynadi.",
                "Akademiya davomida orttirgan doʻstliklarim va yordamingiz uchun minnatdorman."
            ],
            ru: [
                "Я была полностью потеряна в системе UCAS, пока не нашла Freshman Academy.",
                "Пробные интервью и обратная связь имели решающее значение для моей уверенности.",
                "Я благодарна за поддержку и дружбу на всю жизнь, которую я обрела."
            ]
        }
    },
    {
        id: 5,
        name: "David Smith",
        university: "Nanyang Technological University (NTU)",
        program: {
            en: "BEng Mechanical Engineering",
            uz: "Mexanika muhandisligi",
            ru: "Машиностроение"
        },
        image: "https://i.pravatar.cc/150?u=david",
        heading: {
            en: "Real Support, Real Results",
            uz: "Haqiqiy yordam, haqiqiy natija",
            ru: "Реальная поддержка, реальные результаты"
        },
        content: {
            en: [
                "Most agencies just give you templates. Freshman Academy gives you mentorship.",
                "The Admissions Program provided a structured environment that kept me on track.",
                "Now at NTU, I realize how much those early lessons helped me."
            ],
            uz: [
                "Koʻpgina agentliklar shunchaki shablon beradi. Akademiya esa mentorlik beradi.",
                "Qabul dasturi meni doimiy ravishda olgʻa intilishimni taʼminladi.",
                "Hozir NTUda oʻqiyotganimda oʻsha darslar qanchalik muhimligini tushunyapman."
            ],
            ru: [
                "Многие агентства дают шаблоны. Академия дает менторство.",
                "Программа поступления обеспечила структуру, которая не давала мне сбиться с пути.",
                "Сейчас в NTU я понимаю, насколько важны были те уроки."
            ]
        }
    },
    {
        id: 6,
        name: "Jessica Park",
        university: "Columbia University",
        program: {
            en: "Master of International Affairs",
            uz: "Xalqaro aloqalar magistri",
            ru: "Магистр международных отношений"
        },
        image: "https://i.pravatar.cc/150?u=jessica",
        heading: {
            en: "Empowered to Succeed",
            uz: "Muvaffaqiyatga tayyor",
            ru: "Вдохновлена на успех"
        },
        content: {
            en: [
                "Returning to academia after years in the workforce was daunting. Freshman Academy made it easy.",
                "They helped me bridge the gap between my professional experience and academic potential.",
                "The result? An acceptance letter from my first-choice school."
            ],
            uz: [
                "Ishdan soʻng yana oʻqishga qaytish qiyin boʻlib koʻringan. Akademiya buni osonlashtirdi.",
                "Ular professional tajribam va akademik salohiyatim orasida koʻprik boʻlishdi.",
                "Natija? Birinchi tanlagan universitetimdan qabul xati!"
            ],
            ru: [
                "Возвращение к учебе после работы было пугающим. Академия упростила этот путь.",
                "Они помогли связать мой профессиональный опыт и академический потенциал.",
                "Результат? Письмо о зачислении из вуза моей мечты."
            ]
        }
    },
    {
        id: 7,
        name: "Liam Wong",
        university: "University of Melbourne",
        program: {
            en: "Bachelor of Biomedicine",
            uz: "Biomeditsina bakalavri",
            ru: "Бакалавр биомедицины"
        },
        image: "https://i.pravatar.cc/150?u=liam",
        heading: {
            en: "Navigating International Waters",
            uz: "Xalqaro taʼlimda yoʻlboshchi",
            ru: "Международное образование"
        },
        content: {
            en: [
                "Applying from overseas is complex. Freshman Academy's expertise was a lifesaver.",
                "They helped me understand specific requirements for different countries.",
                "I'm now studying in Australia and loving every minute."
            ],
            uz: [
                "Chet eldan hujjat topshirish qiyin. Akademaning tajribasi meni qutqardi.",
                "Ular turli davlatlar talablarini tushunishga yordam berishdi.",
                "Hozir Avstraliyada oʻqiyapman va har bir daqiqadan zavqlanyapman."
            ],
            ru: [
                "Подача документов из-за рубежа сложна. Опыт академии стал спасением.",
                "Они помогли понять требования разных стран.",
                "Сейчас я учусь в Австралии и наслаждаюсь каждой минутой."
            ]
        }
    },
    {
        id: 8,
        name: "Sophia Muller",
        university: "ETH Zurich",
        program: {
            en: "MSc Architecture",
            uz: "Arxitektura magistri",
            ru: "Магистр архитектуры"
        },
        image: "https://i.pravatar.cc/150?u=sophia",
        heading: {
            en: "A Portfolio That Popped",
            uz: "Yorqin portfolio",
            ru: "Запоминающееся портфолио"
        },
        content: {
            en: [
                "For architecture, your portfolio is your life. The mentors provided invaluable critiques.",
                "They didn't just look at visuals; they helped me write narratives behind my designs.",
                "I'm now part of an incredible cohort at ETH Zurich."
            ],
            uz: [
                "Arxitektura uchun portfolio bu hayot degani. Mentorlar bebaho maslahatlar berishdi.",
                "Ular nafaqat vizual qismini, balki dizayn ortidagi hikoyani yozishda ham yordam berdilar.",
                "Hozir ETH Zurich'da ajoyib jamoaning bir qismiman."
            ],
            ru: [
                "Для архитектора портфолио — это жизнь. Менторы дали бесценные советы.",
                "Они помогли не только с визуалом, но и с историей за каждым дизайном.",
                "Сейчас я часть невероятной группы в ETH Zurich."
            ]
        }
    },
    {
        id: 9,
        name: "Ryan Kim",
        university: "University of Toronto",
        program: {
            en: "BCom Finance",
            uz: "Moliya bakalavri",
            ru: "Бакалавр финансов"
        },
        image: "https://i.pravatar.cc/150?u=ryan",
        heading: {
            en: "Building More Than Just an App",
            uz: "Arizadan koʻra koʻproq",
            ru: "Больше, чем просто заявка"
        },
        content: {
            en: [
                "I learned skills I use every day: time management and critical thinking.",
                "The application process was just the beginning. The alumni network is huge.",
                "Investing in your long-term success starts here."
            ],
            uz: [
                "Men har kuni ishlatadigan koʻnikmalarni oʻrgandim: vaqtni boshqarish va tanqidiy fikrlash.",
                "Qabul jarayoni faqat boshlanishi edi. Bitiruvchilar tarmogʻi juda katta.",
                "Uzoq muddatli muvaffaqiyatga sarmoya shu yerdan boshlanadi."
            ],
            ru: [
                "Я научился навыкам, которые использую ежедневно: тайм-менеджмент и критическое мышление.",
                "Процесс подачи был только началом. Сеть выпускников огромна.",
                "Инвестиция в ваш долгосрочный успех начинается здесь."
            ]
        }
    },
    {
        id: 10,
        name: "Amara Okoro",
        university: "Harvard University",
        program: {
            en: "BA Social Studies",
            uz: "Ijtimoiy oʻquvlar bakalavri",
            ru: "Бакалавр социальных наук"
        },
        image: "https://i.pravatar.cc/150?u=amara",
        heading: {
            en: "My Journey to the Ivy League",
            uz: "Ivy League sari yoʻlim",
            ru: "Мой путь в Лигу Плюща"
        },
        content: {
            en: [
                "Getting into Harvard felt impossible. Freshman Academy showed me it was achievable.",
                "They helped me weave my diverse interests into a cohesive narrative.",
                "I am forever grateful for the mentorship and the belief they had in me."
            ],
            uz: [
                "Garvardga kirish imkonsizdek tuyulgan edi. Akademiya buning iloji borligini koʻrsatdi.",
                "Ular turli qiziqishlarimni bir butun hikoyaga aylantirishda yordam berishdi.",
                "Menga ishonganlari va mentorliklari uchun har doim minnatdorman."
            ],
            ru: [
                "Поступление в Гарвард казалось невозможным. Академия показала, что это достижимо.",
                "Они помогли объединить мои разные интересы в одну историю.",
                "Я вечно благодарна за наставничество и веру в меня."
            ]
        }
    }
];
