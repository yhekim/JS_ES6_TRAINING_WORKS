//ESmODULES  (es modülleri)

export const isim = "mehmet";
export const kullanici = { isim: "yusuf", yas: 31 };
export function merhaba(isim) {
    return `merhaba ${isim}`

}

//yada

const isim = "mehmet";
const kullanici = { isim: "yusuf", yas: 31 };

function merhaba(isim) {
    return `merhaba ${isim}`

}
export { isim, kullanici, merhaba };

// eğer içeride birden fazla aktarılması gerekn şey varsa default olanı;

export { function1 as default, function2, isim } //bunun importuda
import { default as function1, function2, isim } //şeklinde import edilmeli

//ama tek varsa kesinlikle
export default function1; //denir

//anınde yeniden dışa aktarım  hem name,hem default  export varsa dışarı aktarmak istiyorsak