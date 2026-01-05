// src/data/blogs.ts

export type Lang = "uz" | "ru" | "en";

export interface Blog {
    id: number;
    title: Record<Lang, string>;
    videoUrl: string;
}

export const BLOGS: Blog[] = [
    {
        id: 1,
        title: {
            uz: "Soliq auditi qanday tashkilotlarda o’tkaziladi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video1.mp4",
    },
    {
        id: 2,
        title: {
            uz: "Soliq auditi va kameral soliq tekshiruvining farqi nimada?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video2.mp4",
    },
    {
        id: 3,
        title: {
            uz: "O’zimni to’varlarimni do’stimni omborida e- ijaradan shartnoma qimasdan foydalansam bo’ladimi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video3.mp4",
    },
    {
        id: 4,
        title: {
            uz: "Tadbirkorlar kam ahamiyat beradi lekin katta jarimalar keltirib chiqaradigan holatlar bomi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video4.mp4",
    },
    {
        id: 5,
        title: {
            uz: "Elektron tovar transport yuk xati nimaga kerak?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video5.mp4",
    },
    {
        id: 6,
        title: {
            uz: "Talablar kimga ishlaydi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video6.mp4",
    },
    {
        id: 7,
        title: {
            uz: "Soliqlarni hisoblashda e’tiborli boling!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video7.mp4",
    },
    {
        id: 8,
        title: {
            uz: "Bazi bir daromadlardan soliq to’lanmaydi!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video8.mp4",
    },
    {
        id: 9,
        title: {
            uz: "Soliq imtiyozidan foydalaning!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video9.mp4",
    },
    {
        id: 10,
        title: {
            uz: "Jarimalarga tayyor turing!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video10.mp4",
    },
    {
        id: 11,
        title: {
            uz: "Jismoniy shaxslar avtotransport vositasi va ko’chmas mulklarini sotganda qanday soliq to’laydi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video11.mp4",
    },
    {
        id: 12,
        title: {
            uz: "2025-yil 1-noyabrda berilgan imkoniyatlar tugadi!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video12.mp4",
    },
    {
        id: 13,
        title: {
            uz: "TTN Tovar transpor yuk xati!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video13.mp4",
    },
    {
        id: 14,
        title: {
            uz: "Buxgalter xato qilsa kim javobgar bo’ladi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video14.mp4",
    },
    {
        id: 15,
        title: {
            uz: "+1 Mijozimizni muammolarini hal qilishga yordam berdik.",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video15.mp4",
    },
    {
        id: 16,
        title: {
            uz: "Qanday qilib soliqlarni optimallashtiriladi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video16.mp4",
    },
    {
        id: 17,
        title: {
            uz: "12% Kontrakt pulini qaytarib olishingiz mumkin!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video17.mp4",
    },
    {
        id: 18,
        title: {
            uz: "Avtomoykada suv solig’ini kim to’laydi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video18.mp4",
    },
    {
        id: 19,
        title: {
            uz: "Tekshiruvlarda aniqlanayotgan top 3ta xatolar!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video19.mp4",
    },
    {
        id: 20,
        title: {
            uz: "Nima uchun soliq tekshiruvida buxgalteriyada juda ko’p xatolar aniqlanadi?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video20.mp4",
    },
    {
        id: 21,
        title: {
            uz: "Agar siz haq bo’lsangiz soliqlarni to’lashga shoshmang!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video21.mp4",
    },
    {
        id: 22,
        title: {
            uz: "Foyda solig’ini kamaytirish uchun yana 1ta imkoniyat!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video22.mp4",
    },
    {
        id: 23,
        title: {
            uz: "Qoraqalpog’iston Respuplikasidagi mijozimiz bizdan mamnun bo’ldilar!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video23.mp4",
    },
    {
        id: 24,
        title: {
            uz: "Quyosh panel o’rnatganlar IMTIYOZdan foydalaning!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video24.mp4",
    },
    {
        id: 25,
        title: {
            uz: "24% SOLIQNI IQTISOD QILISHNI YANA BITTA YO’LI!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video25.mp4",
    },
    {
        id: 26,
        title: {
            uz: "MASJIDLAR SOLIQLARDAN OZOD(MI)?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video26.mp4",
    },
    {
        id: 27,
        title: {
            uz: "FIRMADAN QANAQA QILIB PUL YECHGAN AVZAL?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video27.mp4",
    },
    {
        id: 28,
        title: {
            uz: "CHEGIRILADIGAN VA CHEGIRILMAYDIGAN XARAJATLARNI BILASIZMI?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video28.mp4",
    },
    {
        id: 29,
        title: {
            uz: "HECH KIMGA FIRMANGIZNI BERMANG HAM, SOTMANG HAM!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video29.mp4",
    },
    {
        id: 30,
        title: {
            uz: "OZIQ-OVQAT MAXSULOTLARINI IMPORT QILUVCHILAR DIQQATIGA!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video30.mp4",
    },
    {
        id: 31,
        title: {
            uz: "OZIQ-OVQAT MAXSULOTLARINI IMPORT QILUVCHILAR DIQQATIGA!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video31.mp4",
    },
    {
        id: 32,
        title: {
            uz: "KORPORATIV KARTALARNI NAZORATGA OLING.",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video32.mp4",
    },
    {
        id: 33,
        title: {
            uz: "USTAV KAPITALI BO’YICHA YANGILIK!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video33.mp4",
    },
    {
        id: 34,
        title: {
            uz: "BUXGALTORLARDA UCHRAYDIGAN TOP 5TA HATO!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video34.mp4",
    },
    {
        id: 35,
        title: {
            uz: "BIRLAMCHI XUJJATLAR QANCHALIK ZARUR?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video35.mp4",
    },
    {
        id: 36,
        title: {
            uz: "IJARA SHARTNOMALARIDA TEKIN IJARA SHARTNOMA QILMANG!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video36.mp4",
    },
    {
        id: 37,
        title: {
            uz: "QAT’IY SOLIQ TO’LAYAPMAN DEB BEPARVO BO’LMANG!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video37.mp4",
    },
    {
        id: 38,
        title: {
            uz: "BUNDAY XATOLARNI TO’G’IRLASA BO’LADI?",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video38.mp4",
    },
    {
        id: 39,
        title: {
            uz: "EXPORT QILUVCHILAR DIQQATIGA! REEXPORT REJIMIDAN FOYDALANING!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video39.mp4",
    },
    {
        id: 40,
        title: {
            uz: "ENDI DAROMADLAR BO’YICHA DEKLARATSIYA TOPSHIRILADI!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video40.mp4",
    },
    {
        id: 41,
        title: {
            uz: "ENDI SOLIQ TO’LO’VCHILAR SHAXSIY KABINETINGIZGA 2 KARRA ETIBORLI BO’LING!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video41.mp4",
    },
    {
        id: 42,
        title: {
            uz: "ENDI SOLIQ TEKSHIRUVLARI YANA 1TAGA KO’PAYADI!",
            ru: "Основы налогообложения",
            en: "Tax Basics",
        },
        videoUrl: "/videos/video42.mp4",
    }
];
