export type Lang = "uz" | "ru" | "en";

export interface Services {
  id: number;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  serv1?: {
    uz: string;
    ru: string;
    en: string;
  };
  serv2?: {
    uz: string;
    ru: string;
    en: string;
  };
  serv3?: {
    uz: string;
    ru: string;
    en: string;
  };
  image: string;
}

export const SERVICES: Services[] = [
  {
    id: 1,
    title: {
      uz: "Soliq maslahati",
      ru: "Налоговые консультации",
      en: "Tax Consulting",
    },
    serv1: {
      uz: "Soliqlar va majburiy to‘lovlar bo‘yicha qonuniy talablarga rioya qilinishi bo‘yicha maslahatlar.",
      ru: "Консультации по соблюдению законных требований по налогам и обязательным платежам.",
      en: "Advice on complying with tax and mandatory payment requirements.",
    },
    serv2: {
      uz: "Soliqlarni hisoblash va to‘lash mexanizmlari bo‘yicha yo‘l-yo‘riq berish.",
      ru: "Руководство по расчету и уплате налогов.",
      en: "Guidance on calculating and paying taxes.",
    },
    serv3: {
      uz: "Soliqlarni rejalashtirish va optimallashtirish bo‘yicha strategiyalar ishlab chiqish.",
      ru: "Разработка стратегий планирования и оптимизации налогов.",
      en: "Develop strategies for tax planning and optimization.",
    },
    image: "/images/serv1.jpg",
  },
  {
    id: 2,
    title: {
      uz: "Buxgalteriya xizmatlari",
      ru: "Бухгалтерские услуги",
      en: "Accounting Services",
    },
    serv1: {
      uz: "Buxgalteriya hisobini yuritish, hujjatlarni tayyorlash va tiklash.",
      ru: "Ведение бухгалтерского учета, подготовка и восстановление документов.",
      en: "Managing accounting, preparing and restoring documents.",
    },
    serv2: {
      uz: "Moliyaviy hisob-kitoblar va soliq hisobotlarni to‘g‘irlash.",
      ru: "Исправление финансовой отчетности и налоговых деклараций.",
      en: "Correction of financial statements and tax reports.",
    },
    image: "/images/serv2.jpg",
  },
  {
    id: 3,
    title: {
      uz: "Soliq muammolari",
      ru: "Налоговые проблемы",
      en: "Tax Problems",
    },
    serv1: {
      uz: "Soliq organlari, sudlar yoki boshqa nazorat organlarida mijoz manfaatlarini himoya qilish va vakillik qilish.",
      ru: "Защита интересов клиента и представительство в налоговых органах, судах или других контрольных органах.",
      en: "Protect client interests and represent them in tax authorities, courts, or other regulatory bodies.",
    },
    serv2: {
      uz: "Soliq nizolari bo‘yicha huquqiy ko‘mak ko‘rsatish.",
      ru: "Предоставление юридической помощи при налоговых спорах.",
      en: "Provide legal assistance in tax disputes.",
    },
    image: "/images/serv3.jpg",
  },
  {
    id: 4,
    title: {
      uz: "Soliq auditi va Likvidatsiya",
      ru: "Налоговый аудит и ликвидация",
      en: "Tax Audit & Liquidation",
    },
    serv1: {
      uz: "Soliq auditi — soliq maslahatchilari tashkiloti tomonidan xo‘jalik yurituvchi subyekt (yuridik yoki jismoniy shaxs)ning soliq majburiyatlari to‘g‘ri bajarilganligini tekshirishga qaratilgan professional xizmatdir.",
      ru: "Налоговый аудит — профессиональная услуга по проверке правильности выполнения налоговых обязательств хозяйствующим субъектом (юридическим или физическим лицом).",
      en: "Tax audit — professional service to check if the taxpayer fulfills its tax obligations correctly.",
    },
    serv2: {
      uz: "Likvidatsiya — yuridik shaxs faoliyatini tugatish jarayoni bo‘lib, bu jarayonda soliq maslahatchilari tashkiloti muhim amaliy yordam ko‘rsatadi.",
      ru: "Ликвидация — процесс прекращения деятельности юридического лица с поддержкой налоговых консультантов.",
      en: "Liquidation — the process of closing a legal entity with support from tax consultants.",
    },
    image: "/images/serv4.jpg",
  },
  {
    id: 5,
    title: {
      uz: "Bankrotlik",
      ru: "Банкротство",
      en: "Bankruptcy",
    },
    serv1: {
      uz: "Bankrotlik — xo‘jalik yurituvchi subyektning o‘z moliyaviy majburiyatlarini to‘liq yoki qisman bajara olmasligi natijasida sud tomonidan e’tirof etiladigan huquqiy holat bo‘lib, bu jarayonda soliq maslahatchilari tashkilotlari muhim yordamchi va maslahat beruvchi subyekt sifatida ishtirok etadi.",
      ru: "Банкротство — юридическое признание неспособности субъекта хозяйствования выполнить свои финансовые обязательства полностью или частично с участием налоговых консультантов.",
      en: "Bankruptcy — legal recognition that an entity cannot fulfill its financial obligations fully or partially, with tax consultants assisting.",
    },
    image: "/images/serv5.jpg",
  },
];
