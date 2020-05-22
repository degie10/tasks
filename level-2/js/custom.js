var aboutBox = document.querySelector('.about');
var aboutPhoto = document.querySelector('.about__photo img');
var aboutBoxText = document.querySelector('.about__text');
var mobileViewport = window.matchMedia("screen and (min-width: 768px)");


if(aboutBoxText.offsetHeight > 407) {
    aboutBox.style.height = 'auto';
}

if (aboutBox.offsetHeight > aboutPhoto.height && mobileViewport.matches) {
    aboutPhoto.style.padding = "2rem";
}

//enable bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })