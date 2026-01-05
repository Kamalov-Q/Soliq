export type Lang = "uz" | "ru" | "en";

export interface News {
  id: number;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  image: string;
  author: string;
}

export const NEWS: News[] = [
  {
    id: 1,
    title: {
      uz: "2026-yilda soliq siyosatida qanday oʻzgarishlar kutilmoqda?",
      ru: "Новости налогового законодательства",
      en: "Tax legislation news",
    },
    desc: {
      uz: "Iqtisodiyot va moliya vazirligi 2026–2028-yillarga moʻljallangan byudjetnoma loyihasini eʼlon qildi. Unga koʻra, kelgusi yilda soliq tizimida bir qator yangiliklar joriy etilishi, ayrim aksizlar oshirilishi va tadbirkorlar uchun yengilliklar berilishi belgilanmoqda. Asosiy soliq stavkalari oʻzgarmaydi. Asosiy soliq stavkalari oʻzgarmaydi. 2026-yilda quyidagi asosiy stavkalar oʻzgarishsiz qoladi: foyda soligʻi 15 foiz,  qoʻshimcha qiymat soligʻi 12 foiz, jismoniy shaxslar daromad soligʻi 12 foiz, ijtimoiy soliq 12 foiz, byudjet tashkilotlari uchun 25 foizni tashkil etadi. Aylanma soliq esa 4 foizni, yuridik shaxslar mol- mulk soligʻi 1, 5 foizni tashkil etadi.Qishloq xoʻjaligi yerlari uchun stavka — yerning meʼyoriy qiymatiga nisbatan 0, 95 foizni tashkil etadi. Aksiz soligʻi. Alkogol, tamaki, shakarli ichimliklar va chipslarga yangi tartib joriy etiladi. 2026-yilda JST talablariga muvofiq alkogol mahsulotlari boʻyicha aksizlar bosqichma- bosqich tenglashtiriladi. 1 - fevraldan mahalliy — litriga 48 000 soʻm(hozir 44 000), import — 60 000 soʻm(hozir 76 000)ni tashkil etadi.Shuningdek, kelasi yilning 1 - iyuldan mahalliy va import uchun yagona stavka — 48 000 soʻm, vino va pivo uchun ham yangi stavkalar belgilangan. Tamaki tovarlariga aksizlar 7 foizga oshiriladi va yagona tartibga keltiriladi.Yaʼni: 1000 dona sigaret – 365 000 soʻm, 1 dona sigaret – 21 500 soʻm, chilim tamakisi — 642 000 soʻm / kg, veyp suyuqligi — 2140 soʻm / ml etib belgilanadi. Ichimlik tarkibidagi qand miqdoriga qarab soliq stavkalari farqlanadi. Oʻzbekistonda birinchi marta, kartoshka chipslariga — 15 000 soʻm / kg.aksiz soligʻi joriy etiladi.Bu Jahon sogʻliqni saqlash tashkiloti tavsiyalariga asoslanadi. Kichik biznes uchun yengilliklar 2026 - yildan kichik biznesni qoʻllab - quvvatlash boʻyicha bir qator yangiliklar amalga kiritiladi. Aylanmasi 1 mlrd soʻmgacha boʻlgan YATT va oʻzini oʻzi band qilganlar uchun 1 foiz aylanma soligʻi belgilanadi(hozir 4 foiz).QQS va foyda soligʻiga oʻtayotgan korxonalarga imtiyozlar, 1 - yilga foyda soligʻidan ozod etish, 6 oy davomida buxgalteriya xizmatlari xarajatlarini YEMIHning 3, 5 baravarigacha chegirma berildi. 2026 - yil 1 - yanvardan, mol - mulk, yer, daromad, ijtimoiy, aylanma soligʻi va QQS hisobotini soliq organlari oʻzi shakllantiradi.Bir nechta hisobot topshirilmasa, bitta umumiy jazo qoʻllanadi. Eksport boʻyicha QQS qaytarish tartibi yengillashadi.Soliq qarzi debitorlar hisobidan undirilishi mumkin boʻladi. Issiqxona xoʻjaliklari — daromadning 60 foizi issiqxona faoliyatidan boʻlsa, 1 foizi ijtimoiy soliq. Qishloq xoʻjaligi mahsulotlarini sotishda — 0 foiz QQS. Gips qazib oluvchi korxonalar uchun — 50 foiz stavkali soliq joriy etildi. Shuningdek, mahalliy kengashlarga yer soligʻi va suv soliqlari boʻyicha koeffitsiyentlarni oʻzgartirish huquqi beriladi. 2026 - yil soliq siyosatidagi oʻzgarishlar aholi isteʼmoli va tadbirkorlik muhitiga sezilarli taʼsir koʻrsatishi kutilmoqda.Aksizlarning oshishi sogʻlom turmush tarzini ragʻbatlantirishga qaratilgan boʻlsa, kichik biznes uchun yengilliklar ularning bozordagi raqobatbardoshligini oshirishga xizmat qiladi.",
      ru: "Изменения в налоговом законодательстве за прошлый месяц.",
      en: "Changes in tax legislation last month.",
    },
    image: "/images/news1.jpg",
    author: "Saidumar Azimov",
  },
  {
    id: 2,
    title: {
      uz: "2026-yil 1-apreldan boshlab quyidagilar uchun toʻlovlar faqatgina bank kartalari yoki elektron toʻlov tizimlari orqali amalga oshiriladi!",
      ru: "Новости налогового законодательства",
      en: "Tax legislation news",
    },
    desc: {
      uz: "2026-yil 1-apreldan boshlab quyidagilar uchun toʻlovlar faqatgina bank kartalari yoki elektron toʻlov tizimlari orqali amalga oshiriladi: davlat organlari tomonidan koʻrsatiladigan xizmatlar; elektr energiyasi, tabiiy gaz, ichimlik suvidan foydalanganlik uchun toʻlovlar (bundan bank kassalari orqali amalga oshiriladigan toʻlovlar mustasno);  alkogol va tamaki mahsulotlari;  transport vositalariga yoqilgʻi quyish shoxobchalari orqali aholiga neft-gaz mahsulotlarini sotish va elektrda harakatlanadigan transport vositalarini zaryadlash boʻyicha xizmatlar; qiymati 25 million soʻmdan oshadigan tovar va xizmatlar (bundan qishloq xoʻjaligi mahsulotlari mustasno); koʻchmas mulk obyektlari, ishlab chiqarilganiga oʻn yildan oshmagan M, N, O va G toifaga kiruvchi transport vositalari hamda maxsus avtotransport vositalarini sotish va sotib olish. Bunda:  oldi-sotdi shartnomalari boʻyicha sotuvchi va xaridor oʻrtasidagi hisob-kitoblar bank va notarial organlarning axborot tizimlari oʻrtasidagi maʼlumot almashinuvi orqali amalga oshiriladi (bundan bank kassalari orqali amalga oshiriladigan toʻlovlar mustasno);  shartnomalarni notarial tartibda rasmiylashtirish uchun tijorat banklari va toʻlov tashkilotlari tomonidan elektron axborot almashinuvi vositasida toʻlovni tasdiqlovchi maʼlumotlar asos boʻladi. 3. Quyidagilar:  Markaziy bank 2026-yil 1-yanvarga qadar barcha savdo va xizmat koʻrsatuvchi yuridik shaxslar tomonidan elektron toʻlovlarni qabul qilish uchun yagona QR kodni joriy qilsin;  Soliq qoʻmitasi Markaziy bank bilan birgalikda 2026-yil 1-yanvardan boshlab barcha savdo va xizmat koʻrsatish sohasidagi yuridik shaxslar tomonidan banklarda generatsiya qilingan yagona QR kod orqali elektron toʻlovlarni qabul qilishni yoʻlga qoʻyish choralarini koʻrsin. Bunda 2026-yil 1-iyuldan boshlab:  barcha savdo va xizmat koʻrsatish sohasidagi yuridik shaxslarda yagona QR kodli toʻlov tizimi orqali toʻlovlarni qabul qilish ham majburiy etib belgilanadi;  yagona QR kodlardan foydalanilmayotganligi savdo qoidalarini buzish deb hisoblanadi.",
      ru: "Изменения в налоговом законодательстве за прошлый месяц.",
      en: "Changes in tax legislation last month.",
    },
    image: "/images/news2.jpg",
    author: "Saidumar Azimov",
  },
];
