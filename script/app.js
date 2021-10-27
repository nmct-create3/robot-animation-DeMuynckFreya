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
  }).fromTo('#Robot',{
    y: 2.5,
},{
    y: -2.5,
}).to('#Shadow', {
    scale: 0.75,
},
  '<',
)

const btnPlay = document.querySelector(".c-play-icon--play");
const btnPause = document.querySelector(".c-play-icon--pause");
const btnFast = document.querySelector("#speedFast")
const btnNormal = document.querySelector("#speedNormal")
const btnSlow = document.querySelector("#speedSlow")
btnPause.onclick = () => tl.pause();
btnPlay.onclick = () => tl.play()