const aboutBox = document.querySelector('.about');
const aboutPhoto = document.querySelector('.about__photo img');
const aboutBoxText = document.querySelector('.about__text');
const mobileViewport = window.matchMedia("screen and (min-width: 768px)");


if(aboutBoxText.offsetHeight > 407) {
    aboutBox.style.height = 'auto';
}

if (aboutBox.offsetHeight > aboutPhoto.height && mobileViewport.matches) {
    aboutPhoto.style.padding = "2rem";
}