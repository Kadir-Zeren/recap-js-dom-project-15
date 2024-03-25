//? Selectors
const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");

//? Sonuc tablosu
const gelirinizTd = document.getElementById("geliriniz");

//? Variables
let gelirler = 0;

//? Events

//? formun submit butonuna basildiginda
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);

  //? input degerini sifirladik
  ekleFormu.reset();

  //? Degisliklikleri sonuc tablosuna yazan fonks
  hesaplaVeGuncelle();
});

//? Functions

const hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler;
};
