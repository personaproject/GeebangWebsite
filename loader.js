// <<Params>>
var isMenuArise = false;
let menuCounter= 0;

// <<Loader>>
// Assigning anime function to animate LoaderLogo(loop, easeInOutSine, alternate, delayedSVG)
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
// If document has loaded completely, then pause the LoaderAnimation and set Loader to noneDisplay
$(document).ready(()=>{
  $(".loader-wrapper").delay(5100).fadeOut("slow");
  document.getElementsByTagName("html")[0].style.overflowY = "unset";
  setTimeout(() => logoAnim.pause(), 5100);
})

// <<Navigation>>
// We need to set up all the lists position to the <startPosition[hamburger]>
const setUpMenu = document.querySelectorAll("ul li").forEach(el =>{
  menuCounter += 1;
  el.style.transform = `translateY(${(6-menuCounter)*(3.8)}rem)`;
})
// Assigning anime function to animate Navigation[alternateDirection, easeInOutBack, noAutoPlay, 300ms]
var aniMenu = anime({
  targets: document.querySelectorAll('ul li'),
  translateY: 0,
  duration:300,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutBack',
  autoplay: false,
  // Control the animation to stop at <startPosition> or <endPosition>
  update: anim =>{
    if(anim.progress >= 100 & isMenuArise==true){
      aniMenu.pause();
    }
    if(aniMenu.progress<=0 & isMenuArise==false){
      aniMenu.pause();
    }
  }
})
// Trigger the onClick event by user to show or hide the menu
document.getElementById("hamburger").onclick = () => {
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

// <<Page Section>>
//PageAnimation
const RunAnimationPage = page =>{
  switch (page){
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
  }
}
   