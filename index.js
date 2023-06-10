/* const alısverısListem = ["elma", "ekmek", "sut"];

const stringAlısverısListem = alısverısListem.join();
console.log(stringAlısverısListem);

const stringAlısverısListem2 = alısverısListem.join(" kiraz ");
console.log(stringAlısverısListem2);

const yiyecekler = ["pasta", "pizza", "hamburger", "döner", "lahmacun"];
const icecekler = ["su", "kola", "kahve", "çay", "süt"];

const menu = yiyecekler.concat(icecekler);
console.log(menu);

// Path: index.js
const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function (malzeme, malzemeIndex) {
  console.log(malzeme, malzemeIndex);
});

const sayilar = [1, 2, 3];

let sayilerin5kati = sayilar.map(function (sayi) {
  return sayi * 18;
});

console.log(sayilerin5kati);

const users = [
  {
    name: "Ahmet",
    surname: "Can",
    age: 25,
  },
  {
    name: "Ali",
    surname: "Yılmaz",
    age: 35,
  },
];

const newUsers = users.map((user) => {
  user.fullName = `${user.name} ${user.surname}`;
  return {
    fullName: user.fullName,
    age: `${user.age} yaşındadır.`,
  };
});

console.log(newUsers);
console.log(users);

const sayilar7 = [4, 5, 6];

const sonuc1 = sayilar7.some(function (sayi) {
  return sayi > 5;
});

console.log(sonuc1);

const sonuc2 = sayilar7.some(function (sayi) {
  return sayi < 3;
});

console.log(sonuc2);

const number = [1, 2, 3, 4, 5];

const filterNumber = number.filter(function (sayi) {
  return sayi > 3;
});

console.log(filterNumber);
console.log(number);

// Path: index.js
const sayilar8 = [4, 5, 6, 7];

const bulunacakElaman1 = sayilar8.find(function (sayi) {
  return sayi === 5;
});

console.log(bulunacakElaman1);

const bulunacakElaman2 = sayilar8.find(function (sayi) {
  return sayi > 5;
});

console.log(bulunacakElaman2);

const bulunacakElaman3 = sayilar8.find(function (sayi) {
  return sayi < 3;
});

console.log(bulunacakElaman3);

// Path: index.js

const sayilar9 = [10, 20, 30];

function indirgeyici(velvet, sayi) {
  return velvet + sayi;
}

const sonuc8 = sayilar9.reduce(indirgeyici, 70);
console.log(sonuc8);

const sonuc7 = sayilar9.reduce(indirgeyici, 5);
console.log(sonuc7);

//  ODEVVVVVVVVVVVVVVVV SDAKNLKNJLDSAKJLDSIJIJDE DWJKJHDCKSHJDEWEJHKNEWJDHJHIKDQ

const dizi = [2, 5, 8, 11, 15, 17];

const newDizi = dizi.filter(function (number) {
  return number > 10;
});

const filtrenmisDizi = dizi.map(function (number) {
  return number * 5;
});

console.log(newDizi); 
*/

let dizi5 = [2, 5, 8, 11, 15, 17];

let yeniDizi = dizi5.filter((item) => item > 10).map((item) => item * 5);
console.log(yeniDizi);

// Path: index.js

let number = [3, 6, 9, 14, 16];

let bulunacakNumber = number.find(function (sayi) {
  return sayi > 5;
});

if (bulunacakNumber > 5) {
  console.log("Beşten büyük bir eleman mevcut.");
} else {
  console.log("Beşten büyük bir eleman mevcut değil.");
}

// Path: index.js

const names = ["Ali", "Ahmet", "Can", "Ayşe", "Fatma", "Hayriye", "Ali"];

let countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);
