let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let slides = document.getElementsByClassName('slider__img');
let currentSlide = 1;
let intervalId;
let buttons = document.getElementsByClassName('cats__item');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    slideSwitch(buttons[i].dataset.name)
  });
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    let newSlide = currentSlide + 1;
    slideSwitch(validSlideNumberCheck(newSlide));
  }, 4000); 
}function stopAutoSlide() {
  clearInterval(intervalId);
}
function slideSwitch(slideNumber) {
  if (typeof slideNumber === 'number') {
    for (let i = 0; i < slides.length; i++) {
      if (i != slideNumber) {
        slides[i].classList.remove('slider__img_active');
      } else {
        setTimeout(() => {
          slides[i].classList.add('slider__img_active');
        }, 50);
      }
    }
  } else {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].dataset.name != slideNumber) {
        slides[i].classList.remove('slider__img_active');
      } else {
        slides[i].classList.add('slider__img_active');
      }
    }
  }
}

function validSlideNumberCheck(slideNumber) {
  let validNumber = slideNumber;

  if (slideNumber < 0) {
    validNumber = slides.length - 1;
  } else if (slideNumber > slides.length - 1) {
    validNumber = 0;
  }

  currentSlide = validNumber;

  return currentSlide;
}

btnLeft.onclick = function () {
  let newSlide = currentSlide - 1;
  slideSwitch(validSlideNumberCheck(newSlide));
}

btnRight.onclick = function () {
  let newSlide = currentSlide + 1;
  slideSwitch(validSlideNumberCheck(newSlide));
}

/******************************************************************************/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.47,
  spaceBetween: 5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});