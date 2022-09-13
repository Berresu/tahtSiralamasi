let kiraliyet=["Charles","Anne","Edward","William","Henry","George","Charlotte","Louis","Lilibet","Archie"];

const button=document.getElementById("btnDegistir");
const sira1=document.getElementById("sira1");
const sira2=document.getElementById("sira2");
const sira3=document.getElementById("sira3");
const sira4=document.getElementById("sira4");
const sira5=document.getElementById("sira5");
const sira6=document.getElementById("sira6");

button.addEventListener("click", ()=>{
    let sayi1=Math.floor(Math.random()*10);
    sira1.innerHTML=kiraliyet[sayi1];

    let sayi2=Math.floor(Math.random()*10);
    sira2.innerHTML=kiraliyet[sayi2];

    let sayi3=Math.floor(Math.random()*10);
    sira3.innerHTML=kiraliyet[sayi3];

    let sayi4=Math.floor(Math.random()*10);
    sira4.innerHTML=kiraliyet[sayi4];

    let sayi5=Math.floor(Math.random()*10);
    sira5.innerHTML=kiraliyet[sayi5];

    let sayi6=Math.floor(Math.random()*10);
    sira6.innerHTML=kiraliyet[sayi6];
})