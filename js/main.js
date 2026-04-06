const lenis = new Lenis()

function raf(time){
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


gsap.utils.toArray(".reveal").forEach((el) => {

gsap.from(el, {

opacity:0,
y:50,
duration:1,
ease:"power3.out",
scrollTrigger:{
trigger:el,
start:"top 80%"
}

})

})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})

})



const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas:document.querySelector("#bg"),
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=5



const particlesGeometry=new THREE.BufferGeometry()

const particlesCount=800

const posArray=new Float32Array(particlesCount*3)

for(let i=0;i<particlesCount*3;i++){

posArray[i]=(Math.random()-0.5)*10

}

particlesGeometry.setAttribute(
"position",
new THREE.BufferAttribute(posArray,3)
)

const particlesMaterial=new THREE.PointsMaterial({

size:0.01,
color:0xffffff

})

const particlesMesh=new THREE.Points(
particlesGeometry,
particlesMaterial
)

scene.add(particlesMesh)



function animate(){

requestAnimationFrame(animate)

particlesMesh.rotation.y+=0.0005

renderer.render(scene,camera)

}

animate()



window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight

camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth,window.innerHeight)

})
