//.map()
//girilen callback fonksiyonunu uygulayarak elde edilen sonuçlarla yeni bir dizi oluşturur.

const urunler = [
    { id: 1, name: "Kalem", fiyat: 8 },
    { id: 2, name: "defter", fiyat: 5 },
    { id: 3, name: "silgi", fiyat: 7 },
    { id: 4, name: "Kalemtraş", fiyat: 9 }

]
const urunOlusturucu = (urun) => `${urun.name} fiyatı ${urun.fiyat} liradır`;
//yukarda yaptığımız kod sadeliğine Refactoring denir 
console.log(urunler.map(urunOlusturucu));

//Reactta jsx ifadeyle aşağıdaki gibi yazılır

// function UrunGoster({urunListesi}){
//     return
//     urunListesi.map(urun=>
//     <li key={urun.id}>
//         {urun.name} fiyatı {urun.fiyat} liradır.
//         </li>)
// }

//urun id niz yoksa


// function UrunGoster({urunListesi}){
//     return
//     urunListesi.map((urun,index)=>
//     <li key={index}>
//         {urun.name} fiyatı {urun.fiyat} liradır.
//         </li>)
// }