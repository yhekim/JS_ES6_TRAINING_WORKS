//Array methods 
//.includes()

const isim = "mehmet";
console.log(isim.includes("met")) //true döner
console.log(isim.includes("MET")) //FALSE döner

const yeniIsim = isim.toLowerCase();
console.log(yeniIsim); //output:"mehmet";

//*************** */

const urunler = [
    { id: 1, name: "Kalem", fiyat: 8 },
    { id: 2, name: "defter", fiyat: 5 },
    { id: 3, name: "silgi", fiyat: 7 },
    { id: 4, name: "Kalemtraş", fiyat: 9 }
]

console.log(urunler.filter((urun) => urun.name.includes("Kubra")));
//burada filter  aşağıdaki diziyi döndürür 
// [
//     { id: 4, name: "kubrami", fiyat: 9 },
//     { id: 3, name: "kubra", fiyat: 7 }
// ]