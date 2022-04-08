const buton=document.querySelector("#modebut");//tek eleman
const boxs=document.querySelectorAll('.box'); //Liste
const eltitle =document.querySelectorAll('.eltitle');//Liste
const eltitlea=document.querySelectorAll(".eltitlea");//Liste



buton.addEventListener("click",function(){// Butona tıklanırsa



boxs.forEach((box)=>{//tüm boxlar üzerinde gezip 

    box.classList.toggle('box');// box toggle (dark)    0 1
    box.classList.toggle('box2');// box2 toggle (light) 1 0
});//boxs


eltitle.forEach((tit)=>{//box ile aynı işlemler

    tit.classList.toggle('eltitle');
    tit.classList.toggle('eltitle2');
});//eltitle

eltitlea.forEach((tit)=>{//box ile aynı işlemler

    tit.classList.toggle('eltitlea');
    tit.classList.toggle('eltitlea2');
});//eltitlea




});//buton click event end