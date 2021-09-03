//kısayol obje anahtarları isimleri
const isim = "mehmet";
const yas = 35;
//{isim:"mehmet",yas:35} olması bekleniyor

const kullanici_objesi = {
    isim,
    yas
}
console.log(kullanici_objesi);

function Sayac({ baslangicDegeri = 10, adim }) {

    const [sayac, setSayac] =
    useCounter({ baslangicDegeri, adim });
    console.log(sayac);
    return ( < button onClick = { setSayac } > { sayac } < /button>);




    }