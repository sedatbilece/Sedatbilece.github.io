const panels=document.querySelectorAll(".panel");// tüm panellerin listesini döndürür


panels.forEach((panel)=>{//paneller içinde geziniyoruz

panel.addEventListener("click",()=>{//tüm panellere click event geldiğinde 
     removeActiveClasses();// aktif panel hangisi olursa olsun aktifliği kaldırılıp
     panel.classList.add("active");//tıklanan panele aktif ekleniyor
})


})

function  removeActiveClasses(){//aktiflik kaldırma fonksiyonumuz

    panels.forEach( panel=>{
        panel.classList.remove("active");
    })
}

