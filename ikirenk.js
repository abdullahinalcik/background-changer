const tıkla=document.querySelector("#btn-tık");
// console.log(tıkla);
const over=document.querySelector("#btn-over");
// console.log(over);

const renkler = ["yellow", "blue", "green", "red", "pink", "purple"];

const background = document.querySelector("#body");
console.log(background);

const mevcutYazı = document.querySelector("#header").innerHTML;
 console.log(mevcutYazı);
 tıkla.addEventListener("click",()=>{
    const rastGeleSayı = Math.floor(Math.random() * renkler.length); 
    const eklenenYazı = renkler[rastGeleSayı].toLocaleUpperCase();
    const yeniYazı = mevcutYazı + " " + eklenenYazı;

    document.querySelector("#header").innerText = yeniYazı;
    tıkla.innerText = eklenenYazı;
    background.style.backgroundColor = renkler[rastGeleSayı];


 }
 
 )
 over.addEventListener("mouseover",()=>{
    const rastGeleSayı = Math.floor(Math.random() * renkler.length); 
    const eklenenYazı = renkler[rastGeleSayı].toLocaleUpperCase();
    const yeniYazı = mevcutYazı + " " + eklenenYazı;

    document.querySelector("#header").innerText = yeniYazı;
    over.innerText = eklenenYazı;
    background.style.backgroundColor = renkler[rastGeleSayı];


 }
 
 )