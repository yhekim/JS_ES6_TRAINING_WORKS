 //toparlama ve yayma operatorü

 let kullanici = { ad: "yusuf", soyad: "hekim", sehir: "samsun" };
 kullanici = {...kullanici,
     sehir: "ankara"
 };
 console.log(kullanici);

 //react 

 const INITIAL_STATE = {
         yukleniyot: false,
         hataMesaji: "",
         arabalar: ["mercedes", "audi", "bmw"]
     }
     //dispatch({type:"ARABA_EKLE",payload:tofaş})

 const reducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case "ARABA_EKLE":
             return {
                 ...state,
                 arabalar: [...state.arabalar, action.payload]
             }

         default:
             return state;
     }
 }

 //state.arabalar =>   // ["mercedes","audi","bmw","tofas"]

 // Burada aslında sisteme 
 // hafızanda eski tutuğun state 
 // adında yeni değer ekleyerek 
 // yeni bir hafıza bölümü açıp
 //  artık yeni statem bu dmeek istiyorum

 //**************************************************** */

 //bir fonksiyon paremetlerini tek bir diziye atarken

 function topla(sayi1, sayi2, sayi3) {

     return sayi1, sayi2, sayi3;
 }

 const sayilar = [1, 2, 3];
 //console.log(topla(sayilar));  olmaz  1,2,3,undefinedunde.... gelir bunu yapmak için
 console.log(topla.apply(null, sayilar)); // çalışır bunun yeine

 console.log(topla(...sayilar)) //diybiliriz

 //******************************************** */

 const sayilar1 = [1, 2, 3];
 const sayilar2 = [5, 6, 7];
 //dizileri birleştirmek için

 const birlesmisdizi = sayilar1.concat(sayilar2);
 console.log(birlesmisdizi);
 //bunun yerine ise

 const yeniBirlesmisDizi = [...sayilar1, ...sayilar2];
 console.log(yeniBirlesmisDizi);



 //aynısını objeler için de yapabiliriz

 const kimlikBilgileri = { ad: "yusuf", soyad: "hekim" };

 const adres = { sehir: "samsun", ilce: "çarşamba" };

 const birlesmisKimlikAdresBilgileri = {...kimlikBilgileri, adres };

 console.log(birlesmisKimlikAdresBilgileri);