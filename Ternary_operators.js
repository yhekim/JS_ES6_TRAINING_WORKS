//üç değişkenli koşul operatorleri
//koşul ? doğruysa_kısmı: yanlış_kısmı
//tek ifadede bu kullanılır 
//  if (condition) {

//      doğruysa
//  }
//  else{
//      yanlışssa
//  }

const kopruDurumu = "tadilat var"
kopruDurumu === "açık" ?
    console.log("köprü açık") :
    kopruDurumu === "kapali" ?
    console.log("köprü kapalı") :
    console.log(kopruDurumu);



//*********************  */

const sayi = 1;
sayi ? console.log("değer doğru") : console.log("değer yanlış");

// null , NaN, 0 ,"", undefined  bu değerler false diğerleri true dur

buyuzden
degerArray = [];
degerArray.length ? console.log("değer doğru") : console.log("değer yanlış");

degerObje = {};
Object.keys(degerObje).length ? console.log("değer doğru") : console.log("değer yanlış");

// dizi ve array de bakılmak istenise uuznluktan bakılmalı ki uzunluk sıfır geldiğinde false dönsün