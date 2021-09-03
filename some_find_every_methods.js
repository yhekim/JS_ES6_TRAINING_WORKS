//Array methots (dizi methotları)
//.find()  .some()  .every()

// const urunler = [
//     { id: 1, name: "Kalem", fiyat: 8 },
//     { id: 2, name: "defter", fiyat: 5 },
//     { id: 3, name: "silgi", fiyat: 7 },
//     { id: 4, name: "Kalemtraş", fiyat: 9 }
// ]
// const yazdir = urunler.find((urun) => urun.fiyat>5);
// console.log(yazdir);

//******************* */

//.find()  dizideki en az bir elemanın koşulu sağlayıp sağlamadığı ile ilgili True false döndürür.
const urunler = [
    { id: 1, name: "Kalem", fiyat: 8 },
    { id: 2, name: "defter", fiyat: 5 },
    { id: 3, name: "silgi", fiyat: 7 },
    { id: 4, name: "Kalemtraş", fiyat: 9 }
]

// const yazdir2 = urunler.some((urun) => urun.fiyat < 2);

// console.log(yazdir2);

//***************** */

//.ever()

//dizideki tüm elemanların koşolu sağlayıp sağlamadığına bakılır bir tane sağlamayan varsa false döner


console.log("every:", urunler.every((urun) => urun.fiyat > 1));