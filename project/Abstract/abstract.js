const titleIn = document.querySelector(".title__in");
const optionsRadius = document.querySelector(".options__radius");
const optionJs = document.querySelectorAll(".option__js");

titleIn.addEventListener("click", () => {
    optionsRadius.classList.toggle("active");
});

optionJs.forEach(a => {
    a.addEventListener("click", () => {
        titleIn.innerHTML = a.querySelector("label").innerHTML;
        optionsRadius.classList.remove("active");
    });
});