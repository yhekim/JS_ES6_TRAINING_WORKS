//.filter()
const urunler = [
        { id: 1, name: "Kalem", fiyat: 8 },
        { id: 2, name: "defter", fiyat: 5 },
        { id: 3, name: "silgi", fiyat: 7 },
        { id: 4, name: "Kalemtraş", fiyat: 9 }

    ]
    //verilen dizi elemanını basit bir koşul atanr True dönenler tekrar bir dizi oluşturur.

const yeniUrunler = urunler.filter(urun => urun.fiyat > 5);
console.log(yeniUrunler);

console.log(yeniUrunler.filter(urun => urun.name.toLowerCase().includes("kalem")));
//buradad yeni liste de name inde kalem olanlar dizi şeklinde yazar 

//**************************** */

//filter() ile map() fonksiyonları beraber kullanılır

console.log(urunler.filter(urun = urun.fiyat > 5).map(urun => `${urun.name} fiyatı 5 ' ten büyüktür.`))