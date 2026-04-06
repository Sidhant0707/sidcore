const lenis = new Lenis()

function raf(time){
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.from(".reveal",{

opacity:0,
y:40,
duration:1,
stagger:0.2,
ease:"power3.out"

})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})

})
