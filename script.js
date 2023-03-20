var arrowg = document.querySelector("arrowg");
var arrowd = document.querySelector("arrowd");
var btns = document.querySelectorAll(".manual-btn");
var slide = document.querySelectorAll(".banner-img");

let banner = document.getElementsByClassName("banner-img");
let etape = 0;
let counter = 0;

let nbr__img = banner.length;

let precedent = document.querySelector(".arrowg");
let suivant = document.querySelector(".arrowd");

function enleverAcitveImages() {
  for (let i = 0; i < nbr__img; i++) {
    banner[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nbr__img) {
    etape = 0;
  }
  enleverAcitveImages();
  banner[etape].classList.add("active");
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nbr__img - 1;
  }
  enleverAcitveImages();
  banner[etape].classList.add("active");
});

var sliderNar = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slide.forEach((slider) => {
    slider.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slide[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNar(i);
  });
});
