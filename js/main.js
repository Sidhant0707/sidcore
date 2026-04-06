gsap.from(".reveal",{
opacity:0,
y:40,
duration:1,
stagger:0.2,
ease:"power3.out"
})

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer=new THREE.WebGLRenderer({
canvas:document.querySelector("#bg"),
alpha:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=5

const particlesGeometry=new THREE.BufferGeometry()

const particlesCount=2000

const posArray=new Float32Array(particlesCount*3)

for(let i=0;i<particlesCount*3;i++){

posArray[i]=(Math.random()-0.5)*20

}

particlesGeometry.setAttribute(
"position",
new THREE.BufferAttribute(posArray,3)
)

const particlesMaterial=new THREE.PointsMaterial({
size:0.03,
color:0xffffff,
transparent:true,
opacity:0.7
})

const particlesMesh=new THREE.Points(
particlesGeometry,
particlesMaterial
)

scene.add(particlesMesh)

let mouseX=0
let mouseY=0

document.addEventListener("mousemove",(event)=>{

mouseX=(event.clientX/window.innerWidth)-0.5
mouseY=(event.clientY/window.innerHeight)-0.5

})

function animate(){

requestAnimationFrame(animate)

particlesMesh.rotation.y+=0.001

camera.position.x+= (mouseX*2-camera.position.x)*0.02
camera.position.y+= (-mouseY*2-camera.position.y)*0.02

renderer.render(scene,camera)

}

animate()

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight

camera.updateProjectionMatrix()

renderer.setSize(window.innerWidth,window.innerHeight)

})
