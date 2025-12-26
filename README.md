JS - OOP


1. KLASS (Class) VA OBYEKT (Object)
Klass — bu obyekt yaratish uchun "chizma" (shablon). Obyekt esa shu chizma asosida yaratilgan real nusxa.
Sintaksis: 
class Shaxs { ... }

2. KONSTRUKTOR (Constructor)
Klass ichidagi maxsus metod. Yangi obyekt yaratilganda birinchi bo'lib ishga tushadi. 
Vazifasi: Obyektning boshlang'ich xususiyatlarini (property) o'rnatish.
Misol: constructor(ism, yosh) { this.ism = ism; this.yosh = yosh; }

3. "THIS" KALIT SO'ZI
"this" joriy obyektning o'ziga ishora qiladi. U orqali klass ichidagi xususiyatlarga murojaat qilinadi.

4. "NEW" OPERATORI
Yangi obyekt yaratish uchun ishlatiladi. 
Misol: const odam1 = new Shaxs("Ali", 25);

5. METODLAR
Klass ichida yozilgan funksiyalar. Obyekt nima ish qila olishini belgilaydi.
Misol: salomBer() { console.log("Salom!"); }

6. OOP NING 4 TA ASOSIY PRINSIPI (Qisqacha):
7. Inkapsulatsiya: Ma'lumotlarni "#" belgisi orqali xususiy (private) qilish.
Merosxo'rlik (extends): Bir klass xususiyatlarini ikkinchisiga o'tkazish.
Polimorfizm: Bir xil metodni turli klasslarda turlicha talqin qilish.
Abstraksiya: Faqat kerakli interfeysni qoldirib, murakkablikni yashirish.

MISOLI:

class Hayvon {
  constructor(nom) {
    this.name = nom;
  }
  tovush() { console.log("Ovoz chiqaradi"); }
}

class Kuchuk extends Hayvon { // Merosxo'rlik
  tovush() { console.log("Vov-vov!"); } // Polimorfizm
}

const meningKuchugim = new Kuchuk("Oktosh");
meningKuchugim.tovush();

Va qolgan turlari haqida qisqacha malumot:

1. OBYEKT (Object)
Ma'lumotlar va ularni qayta ishlash metodlarini o'z ichiga olgan mustaqil birlik. 
Masalan: "Avtomobil" obyekti. Uning ma'lumotlari: rangi, modeli; metodlari: "o't oldirish", "yurish".

2. KLASS (Class)
Obyektlarni yaratish uchun shablon yoki chizma. Bitta klassga tegishli barcha obyektlar bir xil tuzilish va metodlar to'plamiga ega bo'ladi.

3. INKAPSULATSIYA (Encapsulation)
Obyektning ichki ma'lumotlarini tashqi dunyodan yashirish. Ma'lumotlarga faqat maxsus belgilangan metodlar orqali kirish mumkin.

4. MEROSXO'RLIK (Inheritance)
Yangi klassning (bola klass) boshqa klassdan (ota klass) xususiyat va metodlarni qabul qilib olishi. Bu kodni qayta ishlatish imkonini beradi.

5. POLIMORFIZM (Polymorphism)
Har xil klass obyektlarining bir xil metodga (chaqiruvga) o'z xususiyatidan kelib chiqib, turlicha javob berish imkoniyati.

6. ABSTRAKSIYA (Abstraction)
Obyektning faqat eng muhim xarakteristikalarini ajratib ko'rsatish va ikkinchi darajali detallarni yashirish. Fokus obyektning QANDAY bajarishiga emas, balki NIMA qilishiga qaratiladi.
