interface Review {
  id: number;
  rating: number;
  comment: string;
  author: string;
  company: string;
}
export const REVIEWS: Review[] = [
  {
    id: 1,
    rating: 5,
    comment: `"TaxOFF Partner” jamoasi bizning buxgalteriya jarayonlarimizni sezilarli darajada yaxshiladi. Ularning professional yondashuvi va batafsil e'tibori ajoyib!`,
    author: "Aziz Miraxmedov",
    company: "Director , BUILDING EQUIPMENT LLC",
  },
  {
    id: 2,
    rating: 4,
    comment: `Yillar davomida turli soliq xizmatlari bilan ishlaganimdan so'ng, nihoyat ishonchli hamkor topdim. Juda tavsiya qilaman!`,
    author: "Nodira Azimova",
    company: "Director COLLEENS GOLD FB",
  },
  {
    id: 3,
    rating: 5,
    comment:
      `Ularning tezkor javob berishi va chuqur bilimlari bizning kompaniyamiz uchun qimmatli. Har doim yordam berishga tayyor.`,
    author: "Said Azimov",
    company: "Director  TECHNICAL OFFICE LLC",
  },
  {
    id: 4,
    rating: 5,
    comment: `“TaxOFF Partner” jamoasi bilan ishlash biznes jarayonlarimizni soddalashtirdi. Ular har qanday murakkab savolga aniq javob berishadi.`,
    author: "Mehriniso Zafarova",
    company: "Director  MYPROTECH  LLC",
  },
  {
    id: 5,
    rating: 4,
    comment:
      `Professional jamoa, sifatli xizmat va o'z vaqtida topshirish - TaxOFF.uz ning asosiy afzalliklari. 3 yildan beri hamkorlik qilamiz.`,
    author: "Jurat Ximatov",
    company: "Director SPARKLIGHTING LLC",
  },
  {
    id: 6,
    rating: 4,
    comment:
      `Startap sifatida bizga maxsus yondashuv kerak edi. TaxOFF.uz jamoasi bizga imtiyozlardan to'g'ri foydalanishga yordam berdi.`,
    author: "Aziz Miraxmedov",
    company: "Director PRIMEPARTS MCHJ",
  },
];
