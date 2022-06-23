
const selectedScroll = document.querySelector(".selected__scroll");
const optionsContainerScroll  = document.querySelector(".options-container__scroll");
const optionsListScroll  = document.querySelectorAll(".option__scroll");

selectedScroll .addEventListener("click", () => {
    optionsContainerScroll .classList.toggle("active");
});

optionsListScroll.forEach(e => {
    e.addEventListener("click", () => {
        selectedScroll.innerHTML = e.querySelector("label").innerHTML;
        optionsContainerScroll.classList.remove("active");
    });
});


const menuPc = document.querySelector(".menu__pc");
const a3Scroll = document.querySelector(".a3__scroll");
const logoColor = document.querySelector(".logo__color");
const logoWhite = document.querySelector(".logo__white");
const menuIteamText = document.querySelector(".menu__iteam--text");
const sC2 = document.querySelector(".sc2");
const sC3 = document.querySelector(".sc3");
const sC4 = document.querySelector(".sc4");
const iconSearchScroll = document.querySelector(".icon__search__scroll");
const loginButton = document.querySelector(".login__button");
window.addEventListener("scroll", function(){
    menuPc.classList.toggle("sticky", window.scrollY > 0);
    a3Scroll.classList.toggle("sticky", window.scrollY > 0);
    logoColor.classList.toggle("sticky", window.scrollY > 0);
    logoWhite.classList.toggle("sticky", window.scrollY > 0);
    menuIteamText.classList.toggle("sticky", window.scrollY > 0);
    sC2.classList.toggle("sticky", window.scrollY > 0);
    sC3.classList.toggle("sticky", window.scrollY > 0);
    sC4.classList.toggle("sticky", window.scrollY > 0);
    loginButton.classList.toggle("sticky", window.scrollY > 0);
    iconSearchScroll.classList.toggle("sticky", window.scrollY > 0);

});