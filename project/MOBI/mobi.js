const textAndIconnar = document.querySelector(".text__and__iconar");
const menuMobiUl2 = document.querySelector(".menu__mobi__ul2");
const menuMobiHeader = document.querySelector(".menu__mobi__header")
textAndIconnar.addEventListener("click",function(){
    menuMobiUl2.classList.toggle("click__menu__mobi");
    menuMobiHeader.classList.toggle("focus__change__style");
});

const baGach = document.querySelector(".bagach");
const menuRight = document.querySelector(".menu__right");
const opaCity = document.querySelector(".opacity")
baGach.addEventListener("click", function(){
   menuRight.classList.toggle("click__left");
   baGach.classList.toggle("click__left");
   opaCity.classList.toggle("click__right");
});


opaCity.addEventListener("click", function(){
    menuRight.classList.remove("click__left");
    baGach.classList.remove("click__left");
    opaCity.classList.remove("click__right");
    menuMobiHeader.classList.remove("focus__change__style");
    menuMobiUl2.classList.remove("click__menu__mobi");
})

const backTop = document.querySelector(".button__back")
window.addEventListener("scroll", function(){
    if(window.pageYOffset > 100){
        backTop.classList.add("totop");
    }else{
        backTop.classList.remove("totop");
    };
});
backTop.addEventListener("click", function(){
    window.scroll(0,0);
});



const logoMau = document.querySelector(".logo__mau");
const logoTrang = document.querySelector(".logo__trang");
const smartPhone = document.querySelector(".smartphone");
const iconShopA = document.querySelector(".icon__shop__a");
const gach1 = document.querySelector(".gach1")
const gach2 = document.querySelector(".gach2")
const gach3 = document.querySelector(".gach3")
window.addEventListener("scroll",function(){
    smartPhone.classList.toggle("mobi",window.scrollY > 0);
    logoMau.classList.toggle("mobi", window.scrollY > 0);
    logoTrang.classList.toggle("mobi", window.scrollY > 0);
    iconShopA.classList.toggle("mobi", window.scrollY > 0);
    gach1.classList.toggle("mobi", window.scrollY > 0);
    gach2.classList.toggle("mobi", window.scrollY > 0);
    gach3.classList.toggle("mobi", window.scrollY > 0);
});