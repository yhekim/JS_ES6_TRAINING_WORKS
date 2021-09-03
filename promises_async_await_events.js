 //Promises and async/await

 //sonucu olumlu yada olumsuz cevabın ne zaman döneceğini bilmediğimiz durumlarda yapılır
 //Asenkron şekilde diğer kodlarınızı engellmeden ilerler


 const veriGetir = new Promise((basarili, basarisiz) => {
         const veriGeldimi = true;
         if (veriGeldimi) {
             basarili("veri geldi")
         } else {
             basarisiz("veriyi alamadık")
         }
     }


 )
 veriGetir
     .then((cevap) => console.log("gelen cevap:", cevap))
     .catch((hata) => console.log("gelen hata:", hata))


 //React da 

 const axios = require("axios");

 function ulkeGetir() {
     axios.get("https://restcountries.eu/rest/v2/all")
         .then((response) => console.log(response.date))
         .catch((err) => console.log(err))

 };


 // bunun aynısını 

 async function ulkeGetir() {
     const ulkeListesi = await axios.get("https://restcountries.eu/rest/v2/all")
     console.log(ulkeListesi.data)

 };

 ulkeGetir();