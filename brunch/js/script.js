/*
const slide = document.querySelectorAll('.slide');
const slides = document.querySelector('.slides');

const nextBtn = document.querySelector('.slider-1-button-next');
const prevBtn = document.querySelector('.slider-1-button-prev');

const slideLen = slide.length;
const slideWidth = 500;

let curIndex = 0; 

// next button event
nextBtn.addEventListener('click', function(){
    if(curIndex < slideLen-1) {
        slides.style.transform = "translateX(-" + ((slideWidth*2) * (curIndex)) + "px)";
        curIndex++;
    }
})

// prev button event
prevBtn.addEventListener('click', function(){
    if(curIndex > 0) {
        slides.style.transform = "translateX(-" + ((slideWidth*2) * (curIndex-1)) + "px)";
        curIndex--;
    }
})
*/