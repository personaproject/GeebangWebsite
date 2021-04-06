// params
var isMenuArise = false;

//functionLoader
var logoAnim = anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    fill: ['rgba(255,255,255,0)', '#ffffff'],
    stroke: ['#ffffff', 'rgba(54, 153, 221, 0.5)'],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { 
      return i * 250 },
    endDelay: 500,
    direction: 'alternate',
    loop: true
  });
$(window).on("load", function(){
    $(".loader-wrapper").delay(5100).fadeOut("slow");
    document.getElementsByTagName("html")[0].style.overflowY = "unset";
  })

//DOMFunctions
let menuCounter= 0;
const setUpMenu = document.querySelectorAll("ul li").forEach(el =>{
  menuCounter += 1;
  el.style.transform = `translateY(${(6-menuCounter)*(3.8)}rem)`;
})
var aniMenu = anime({
  targets: document.querySelectorAll('ul li'),
  translateY: 0,
  duration:300,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutBack',
  autoplay: false,
  update: anim =>{
    if(anim.progress >= 100 & isMenuArise==true){
      aniMenu.pause();
    }
    if(aniMenu.progress<=0 & isMenuArise==false){
      aniMenu.pause();
    }
  }
})
document.getElementById("hamburger").onclick = function(){
    switch (isMenuArise) {
      case false:
        isMenuArise = true;
        aniMenu.restart();
        break;
      case true:
        isMenuArise = false;
        aniMenu.play();
        break;
    }
}
   