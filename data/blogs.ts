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
      ru: "В каких организациях проводится налоговый аудит?",
      en: "Which organizations undergo tax audits?",
    },
    videoUrl: "/videos/video1.mp4",
  },
  {
    id: 2,
    title: {
      uz: "Soliq auditi va kameral soliq tekshiruvining farqi nimada?",
      ru: "В чем разница между налоговым аудитом и камеральной проверкой?",
      en: "What is the difference between a tax audit and a desk audit?",
    },
    videoUrl: "/videos/video2.mp4",
  },
  {
    id: 3,
    title: {
      uz: "O’zimni to’varlarimni do’stimni omborida e-ijaradan shartnoma qimasdan foydalansam bo’ladimi?",
      ru: "Могу ли я использовать свои товары на складе друга без договора аренды?",
      en: "Can I use my goods in my friend’s warehouse without an e-lease agreement?",
    },
    videoUrl: "/videos/video3.mp4",
  },
  {
    id: 4,
    title: {
      uz: "Tadbirkorlar kam ahamiyat beradi lekin katta jarimalar keltirib chiqaradigan holatlar bormi?",
      ru: "Случаи, когда предприниматели игнорируют, но это ведет к большим штрафам?",
      en: "Situations ignored by entrepreneurs but causing large fines?",
    },
    videoUrl: "/videos/video4.mp4",
  },
  {
    id: 5,
    title: {
      uz: "Elektron tovar transport yuk xati nimaga kerak?",
      ru: "Зачем нужен электронный товарно-транспортный накладной?",
      en: "Why is an electronic waybill necessary?",
    },
    videoUrl: "/videos/video5.mp4",
  },
  {
    id: 6,
    title: {
      uz: "Talablar kimga ishlaydi?",
      ru: "Кому предназначены требования?",
      en: "Who are the requirements applied to?",
    },
    videoUrl: "/videos/video6.mp4",
  },
  {
    id: 7,
    title: {
      uz: "Soliqlarni hisoblashda e’tiborli bo’ling!",
      ru: "Будьте внимательны при расчете налогов!",
      en: "Be careful when calculating taxes!",
    },
    videoUrl: "/videos/video7.mp4",
  },
  {
    id: 8,
    title: {
      uz: "Bazi bir daromadlardan soliq to’lanmaydi!",
      ru: "Некоторые доходы не облагаются налогом!",
      en: "Some incomes are tax-exempt!",
    },
    videoUrl: "/videos/video8.mp4",
  },
  {
    id: 9,
    title: {
      uz: "Soliq imtiyozidan foydalaning!",
      ru: "Воспользуйтесь налоговыми льготами!",
      en: "Use tax benefits!",
    },
    videoUrl: "/videos/video9.mp4",
  },
  {
    id: 10,
    title: {
      uz: "Jarimalarga tayyor turing!",
      ru: "Будьте готовы к штрафам!",
      en: "Be prepared for fines!",
    },
    videoUrl: "/videos/video10.mp4",
  },
  {
    id: 11,
    title: {
      uz: "Jismoniy shaxslar avtotransport vositasi va ko’chmas mulklarini sotganda qanday soliq to’laydi?",
      ru: "Какие налоги платят физические лица при продаже авто и недвижимости?",
      en: "What taxes do individuals pay when selling vehicles and real estate?",
    },
    videoUrl: "/videos/video11.mp4",
  },
  {
    id: 12,
    title: {
      uz: "2025-yil 1-noyabrda berilgan imkoniyatlar tugadi!",
      ru: "Сроки предоставленных возможностей истекли 1 ноября 2025 года!",
      en: "Opportunities provided on November 1, 2025 have expired!",
    },
    videoUrl: "/videos/video12.mp4",
  },
  {
    id: 13,
    title: {
      uz: "TTN Tovar transport yuk xati!",
      ru: "ТТН товарно-транспортная накладная!",
      en: "TTN Waybill for Goods Transport!",
    },
    videoUrl: "/videos/video13.mp4",
  },
  {
    id: 14,
    title: {
      uz: "Buxgalter xato qilsa kim javobgar bo’ladi?",
      ru: "Кто несет ответственность, если бухгалтер ошибается?",
      en: "Who is responsible if the accountant makes a mistake?",
    },
    videoUrl: "/videos/video14.mp4",
  },
  {
    id: 15,
    title: {
      uz: "+1 Mijozimizni muammolarini hal qilishga yordam berdik.",
      ru: "+1 Мы помогли клиенту решить проблемы.",
      en: "+1 We helped our client solve issues.",
    },
    videoUrl: "/videos/video15.mp4",
  },
  {
    id: 16,
    title: {
      uz: "Qanday qilib soliqlarni optimallashtiriladi?",
      ru: "Как оптимизировать налоги?",
      en: "How to optimize taxes?",
    },
    videoUrl: "/videos/video16.mp4",
  },
  {
    id: 17,
    title: {
      uz: "12% Kontrakt pulini qaytarib olishingiz mumkin!",
      ru: "Вы можете вернуть 12% от суммы контракта!",
      en: "You can reclaim 12% of the contract amount!",
    },
    videoUrl: "/videos/video17.mp4",
  },
  {
    id: 18,
    title: {
      uz: "Avtomoykada suv solig’ini kim to’laydi?",
      ru: "Кто оплачивает налог на воду на автомойке?",
      en: "Who pays the water tax at the car wash?",
    },
    videoUrl: "/videos/video18.mp4",
  },
  {
    id: 19,
    title: {
      uz: "Tekshiruvlarda aniqlanayotgan top 3ta xatolar!",
      ru: "Топ-3 ошибок, выявленных при проверках!",
      en: "Top 3 errors found during inspections!",
    },
    videoUrl: "/videos/video19.mp4",
  },
  {
    id: 20,
    title: {
      uz: "Nima uchun soliq tekshiruvida buxgalteriyada juda ko’p xatolar aniqlanadi?",
      ru: "Почему при налоговой проверке выявляется так много ошибок в бухгалтерии?",
      en: "Why are so many accounting errors found during tax audits?",
    },
    videoUrl: "/videos/video20.mp4",
  },
  {
    id: 21,
    title: {
      uz: "Agar siz haq bo’lsangiz soliqlarni to’lashga shoshmang!",
      ru: "Если вы правы, не спешите платить налоги!",
      en: "If you are correct, do not rush to pay taxes!",
    },
    videoUrl: "/videos/video21.mp4",
  },
  {
    id: 22,
    title: {
      uz: "Foyda solig’ini kamaytirish uchun yana 1ta imkoniyat!",
      ru: "Еще одна возможность снизить налог на прибыль!",
      en: "One more opportunity to reduce profit tax!",
    },
    videoUrl: "/videos/video22.mp4",
  },
  {
    id: 23,
    title: {
      uz: "Qoraqalpog’iston Respublikasidagi mijozimiz bizdan mamnun bo’ldilar!",
      ru: "Наш клиент в Республике Каракалпакстан остался доволен!",
      en: "Our client in the Republic of Karakalpakstan was satisfied!",
    },
    videoUrl: "/videos/video23.mp4",
  },
  {
    id: 24,
    title: {
      uz: "Quyosh panel o’rnatganlar IMTIYOZdan foydalaning!",
      ru: "Используйте льготы при установке солнечных панелей!",
      en: "Use incentives when installing solar panels!",
    },
    videoUrl: "/videos/video24.mp4",
  },
  {
    id: 25,
    title: {
      uz: "24% SOLIQNI IQTISOD QILISHNI YANA BITTA YO’LI!",
      ru: "Еще один способ сэкономить 24% налога!",
      en: "Another way to save 24% on taxes!",
    },
    videoUrl: "/videos/video25.mp4",
  },
  {
    id: 26,
    title: {
      uz: "MASJIDLAR SOLIQLARDAN OZOD(MI)?",
      ru: "МЕЧЕТИ ОСВОБОЖДЕНЫ ОТ НАЛОГОВ?",
      en: "ARE MOSQUES TAX-EXEMPT?",
    },
    videoUrl: "/videos/video26.mp4",
  },
  {
    id: 27,
    title: {
      uz: "FIRMADAN QANAQA QILIB PUL YECHGAN AVZAL?",
      ru: "Как лучше снимать деньги с фирмы?",
      en: "How is it better to withdraw money from a company?",
    },
    videoUrl: "/videos/video27.mp4",
  },
  {
    id: 28,
    title: {
      uz: "CHEGIRILADIGAN VA CHEGIRILMAYDIGAN XARAJATLARNI BILASIZMI?",
      ru: "Вы знаете, какие расходы можно и нельзя списывать?",
      en: "Do you know which expenses are deductible and which are not?",
    },
    videoUrl: "/videos/video28.mp4",
  },
  {
    id: 29,
    title: {
      uz: "HECH KIMGA FIRMANGIZNI BERMANG HAM, SOTMANG HAM!",
      ru: "Не отдавайте и не продавайте свою фирму никому!",
      en: "Do not give or sell your company to anyone!",
    },
    videoUrl: "/videos/video29.mp4",
  },
  {
    id: 30,
    title: {
      uz: "OZIQ-OVQAT MAXSULOTLARINI IMPORT QILUVCHILAR DIQQATIGA!",
      ru: "Вниманию импортеров продуктов питания!",
      en: "Attention food product importers!",
    },
    videoUrl: "/videos/video30.mp4",
  },
  {
    id: 31,
    title: {
      uz: "OZIQ-OVQAT MAXSULOTLARINI IMPORT QILUVCHILAR DIQQATIGA!",
      ru: "Вниманию импортеров продуктов питания!",
      en: "Attention food product importers!",
    },
    videoUrl: "/videos/video31.mp4",
  },
  {
    id: 32,
    title: {
      uz: "KORPORATIV KARTALARNI NAZORATGA OLING.",
      ru: "Контролируйте корпоративные карты.",
      en: "Monitor corporate cards.",
    },
    videoUrl: "/videos/video32.mp4",
  },
  {
    id: 33,
    title: {
      uz: "USTAV KAPITALI BO’YICHA YANGILIK!",
      ru: "Новости по уставному капиталу!",
      en: "Updates on charter capital!",
    },
    videoUrl: "/videos/video33.mp4",
  },
  {
    id: 34,
    title: {
      uz: "BUXGALTORLARDA UCHRAYDIGAN TOP 5TA HATO!",
      ru: "Топ-5 ошибок, встречающихся у бухгалтеров!",
      en: "Top 5 mistakes accountants make!",
    },
    videoUrl: "/videos/video34.mp4",
  },
  {
    id: 35,
    title: {
      uz: "BIRLAMCHI XUJJATLAR QANCHALIK ZARUR?",
      ru: "Насколько важны первичные документы?",
      en: "How important are primary documents?",
    },
    videoUrl: "/videos/video35.mp4",
  },
  {
    id: 36,
    title: {
      uz: "IJARA SHARTNOMALARIDA TEKIN IJARA SHARTNOMA QILMANG!",
      ru: "Не заключайте бесплатные договоры аренды!",
      en: "Do not make free lease agreements!",
    },
    videoUrl: "/videos/video36.mp4",
  },
  {
    id: 37,
    title: {
      uz: "QAT’IY SOLIQ TO’LAYAPMAN DEB BEPARVO BO’LMANG!",
      ru: "Не будьте беззаботными, говоря, что строго платите налоги!",
      en: "Do not be careless claiming you strictly pay taxes!",
    },
    videoUrl: "/videos/video37.mp4",
  },
  {
    id: 38,
    title: {
      uz: "BUNDAY XATOLARNI TO’G’IRLASA BO’LADI?",
      ru: "Можно ли исправить такие ошибки?",
      en: "Can these types of mistakes be corrected?",
    },
    videoUrl: "/videos/video38.mp4",
  },
  {
    id: 39,
    title: {
      uz: "EXPORT QILUVCHILAR DIQQATIGA! REEXPORT REJIMIDAN FOYDALANING!",
      ru: "Вниманию экспортеров! Используйте режим реэкспорта!",
      en: "Attention exporters! Use the re-export regime!",
    },
    videoUrl: "/videos/video39.mp4",
  },
  {
    id: 40,
    title: {
      uz: "ENDI DAROMADLAR BO’YICHA DEKLARATSIYA TOPSHIRILADI!",
      ru: "Теперь декларации по доходам подаются!",
      en: "Income declarations are now submitted!",
    },
    videoUrl: "/videos/video40.mp4",
  },
  {
    id: 41,
    title: {
      uz: "ENDI SOLIQ TO’LO’VCHILAR SHAXSIY KABINETINGIZGA 2 KARRA ETIBORLI BO’LING!",
      ru: "Теперь налогоплательщики удвоили внимание к личному кабинету!",
      en: "Taxpayers now pay double attention to their personal account!",
    },
    videoUrl: "/videos/video41.mp4",
  },
  {
    id: 42,
    title: {
      uz: "ENDI SOLIQ TEKSHIRUVLARI YANA 1TAGA KO’PAYADI!",
      ru: "Теперь количество налоговых проверок увеличится ещё на одну!",
      en: "Tax audits will now increase by one more!",
    },
    videoUrl: "/videos/video42.mp4",
  },
];
