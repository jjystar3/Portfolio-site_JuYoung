
let spyEls = document.querySelectorAll('.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.5,
    duration: "100%",
    offset: 50
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

let controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.5, duration: "100%", offset: 50}});

new ScrollMagic.Scene({triggerElement: "#main"})
  .setClassToggle(".header_logo", "active")
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about"})
  .setClassToggle(".header_about", "active")
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#skill"})
  .setClassToggle(".header_skill", "active")
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#work"})
  .setClassToggle(".header_work", "active")
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact"})
  .setClassToggle(".header_contact", "active")
  .addTo(controller);

let modalBtn = document.querySelectorAll('.port .btn-modal');

let modal1El = document.querySelector('#modal1');
let closeBtn1 = document.querySelector('#modal1 .btn-close');
let video1 = document.querySelector('#video1');

let modal2El = document.querySelector('#modal2');
let closeBtn2 = document.querySelector('#modal2 .btn-close');
let video2 = document.querySelector('#video2');

modalBtn[0].addEventListener('click', function () {
  modal1El.style.display = 'flex';
  video1.play();
});
modalBtn[1].addEventListener('click', function () {
  modal2El.style.display = 'flex';
  video2.play();
});
closeBtn1.addEventListener('click', function () {
  modal1El.style.display = 'none';
  video1.pause();
  video1.currentTime = 0;
});
closeBtn2.addEventListener('click', function () {
  modal2El.style.display = 'none';
  video2.pause();
  video2.currentTime = 0;
});

new Date().getFullYear();
console.log(new Date().getFullYear());

let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

let toTopBtn = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  if(window.scrollY > 500){
    toTopBtn.style.opacity = 1;
    toTopBtn.style.transform = 'translateX(0)';
  }else{
    toTopBtn.style.opacity = 0;
    toTopBtn.style.transform = 'translateX(100px)';
  }
});

let bgDay = document.querySelector('.bg-day');
let bgNight = document.querySelector('.bg-night');
let bgImg = document.querySelector('.bg-img');

$(document).ready(function() {

  $(window).scroll(function(e){
    let scrollTop = $(window).scrollTop();
    let docHeight = $(document).height();
    let winHeight = $(window).height();
    let scrollPercent = (scrollTop) / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent*100);

      // $('#scrollPercentLabel>span').html(scrollPercentRounded);
      // console.log(scrollPercentRounded);
      bgDay.style.opacity = 1 - (scrollPercentRounded * 0.01);
      bgNight.style.opacity = scrollPercentRounded * 0.01;

      if(scrollPercentRounded < 10 || scrollPercentRounded > 90){
        bgImg.style.filter = 'blur(0)';  
      }else{
        bgImg.style.filter = 'blur(10px)';  
      }
      repositionLabel();
  });

  $(window).resize(function(){
    repositionLabel();
  });

  function repositionLabel() {
    $('#scrollPercentLabel').css({
      position:'fixed',
      left: ($(window).width() - $('#scrollPercentLabel').outerWidth()) / 2,
      top: (($(window).height() - $('#scrollPercentLabel').outerHeight()) / 2) - $('#scrollPercentLabel').height()
    });
  }

  repositionLabel();

});
