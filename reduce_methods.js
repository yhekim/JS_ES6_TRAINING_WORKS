//reduce kullanımı
const urunler = [
        { id: 1, name: "Kalem", fiyat: 8 },
        { id: 2, name: "defter", fiyat: 5 },
        { id: 3, name: "silgi", fiyat: 7 },
        { id: 4, name: "Kalemtraş", fiyat: 9 }

    ]
    // reduce() methoduverilen dizi elemamnları üzerinde
    //reducer olarak adlandırdığımız bir callback fonksiyonu uygular ve herseferinde hatırlayarak diğeine
    // ekler hatırlar yani

//4 paremetra alır
// 1-her döngüden  çıkarak toplanan değer
// 2- sırası gelen dizi değeri
// 3- sırası gelen dizinin konumu
// 4-dizinin konumu

const toplamFiyat = urunler.reduce((toplam, urun) => (toplam = toplam + urun.fiyat), 0);
console.log({ toplamFiyat });

//string ekleme yapalım

const toplamString = urunler.reduce((toplam, urun) => (toplam = toplam + urun.name), "Ürun İsimler:");
const toplamString = urunler.reduce((toplam, urun) => (toplam = `${toplam} ,${urun.name}`), "Ürun İsimler:");


const toplamDizi = urunler.reduce((toplam, urun) => (toplam = [...toplam, urun.name]), []);
// aynı işlemi

const toplamDiziMap = urunler.map(urun => `${urun.name} ${urun.fiyat} TL`)