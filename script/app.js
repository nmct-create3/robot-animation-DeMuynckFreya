let tl = gsap.timeline({
    defaults: {
      duration: .75,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
  })

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
  }).set('#Fire',{
    transformOrigin: '50% 10%'
  }).fromTo('#Robot',{
    y: 2.5,
},{
    y: -2.5,
}).fromTo('#Head',{
  y: 0,
},{
  y: 1,
  ease:'sine.out'
},0).fromTo('#Arm-left',{
    rotate: 2.5,
    transformOrigin: 'right top',
},{
    rotate: -2.5,
    transformOrigin: 'right top',
},0).fromTo('#Arm-right',{
  rotate: -2.5,
  transformOrigin: 'left top',
},{
  rotate: 2.5,
  transformOrigin: 'left top',
},0).to('#Shadow', {
    scale: 0.75,
},
  '<',
).to('#Fire', {
  scale: 1.35,
  ease: 'expo.Out'
},
  '<',)


const btnPause = document.querySelector(".js-pause");
const btnFast = document.querySelector("#speedFast")
const btnNormal = document.querySelector("#speedNormal")
const btnSlow = document.querySelector("#speedSlow")
btnPause.onclick = function () {
  tl.paused(!tl.paused());
  btnPause.classList.toggle("is-paused")
};


btnFast.onclick = () => tl.timeScale(2);
btnNormal.onclick = () => tl.timeScale(1);
btnSlow.onclick = () => tl.timeScale(.5);