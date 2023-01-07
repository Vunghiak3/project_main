const sliderNext =  document.querySelector(".next__slider");
const sliderPrev = document.querySelector(".prev__slider");
const sliderIn5 = document.querySelector(".slider__in5");
const sliderIn6 = document.querySelector(".slider__in6");
const sliderContainer = document.querySelectorAll(".slide__container");
let positonX = 0; 
let index = 0;
const sliderWidth = sliderContainer[0].offsetWidth;
const sliderLength = sliderContainer.length;
sliderNext.addEventListener("click",function() {
    handleChangeSlide(1);
})
sliderPrev.addEventListener("click",function() {
    handleChangeSlide(-1);
})

const dotIteams = document.querySelectorAll(".dot");
[...dotIteams].forEach((iteam) => 
    iteam.addEventListener("click", function(c){
        [...dotIteams].forEach(g => g.classList.remove("active__iteam"));
        c.target.classList.add("active__iteam");
        const sliderIndex = parseInt(c.target.dataset.index);
        index = sliderIndex;
        positonX = -1 * index * sliderWidth;
        sliderIn6.style = `transform: translateX(${positonX}px);`;
    })
)
const dot1 = document.querySelector(".dots1")
const dot6 = document.querySelector(".dots6")
if(index == 0){
    dot1.classList.add("active__iteam");
}

function handleChangeSlide(direction){
    if(direction === 1){
        index++;
        if(index == 6){
            index = 0;
            positonX = positonX + sliderWidth * 5;
            sliderIn6.style = `transform: translateX(0)`;
            if(index == 0){
                dot1.classList.add("active__iteam");
                dot6.classList.remove("active__iteam");
            }
            return;
        }
        positonX = positonX - sliderWidth;
        sliderIn6.style = `transform: translateX(${positonX}px)`;
        // console.log(index);
        // console.log(positonX);
        // console.log("next slide");
    }else if(direction === -1){
        index--;
        if(index == -1){
            index = 5;
            positonX = positonX - sliderWidth * 5;
            sliderIn6.style = `transform: translateX(${positonX}px)`;
            if(index == 5){
                dot6.classList.add("active__iteam");
                dot1.classList.remove("active__iteam");
            }
            return;
        }
        positonX = positonX + sliderWidth;
        sliderIn6.style = `transform: translateX(${positonX}px);`;
    }
    [...dotIteams].forEach((g) => g.classList.remove("active__iteam"))
    dotIteams[index].classList.add("active__iteam")
}
