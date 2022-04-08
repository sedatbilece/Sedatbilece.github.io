const buton=document.querySelector("#modebut");
const boxs=document.querySelectorAll('.box'); 
const eltitle =document.querySelectorAll('.eltitle');
const eltitlea=document.querySelectorAll(".eltitlea");
buton.addEventListener("click",function(){



boxs.forEach((box)=>{

    box.classList.toggle('box');
    box.classList.toggle('box2');
});


eltitle.forEach((tit)=>{

    tit.classList.toggle('eltitle');
    tit.classList.toggle('eltitle2');
});

eltitlea.forEach((tit)=>{

    tit.classList.toggle('eltitlea');
    tit.classList.toggle('eltitlea2');
});




});