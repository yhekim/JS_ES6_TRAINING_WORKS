//obje ve dizilein parçalara ayrılıp değişkenlere atanması

const kullanici = {
        ad: "mehmet",
        soyad: "keskin",
        yas: 31,
        adres: "samsun",
        medeni: "evli"
    }
    //rest operatoru
const { ad, ...kalan_obje } = kullanici;
console.log(ad);
console.log(kalan_obje);
console.log(kullanici);

const sayilar = [1, 2, 3, 4, 5];
const [birinciEleman, ...kalan_sayilar] = sayilar;
console.log(birinciEleman);
console.log(kalan_sayilar);