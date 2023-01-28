let reviews = [
    {
        id:1, 
        name:'John Doe', 
        job:'JOB: Web developer', 
        img:'img/astronaut (2).jpg',
        text:`"The sky isn't the limit"`
    }, 

    {
        id:2, 
        name:'Jane Doe', 
        job:'JOB: Software Engineer',
        img:'img/white astro (2).jpg', 
        text:`"I'm outta this world"`
    },

    {
        id:3,
        name:'Batman',
        job:'JOB: Billionaire by day, superhero by night', 
        img:'img/543180.jpg',
        text:`"I'm Batman"`
    },

    {
        id:4,
        name:'Godzilla',
        job:'JOB: King of monsters',
        img:'img/107606.jpg',
        text:`"...Mutant dino noises"`
    },

    {
        id:5,
        name:'Homelander',
        job:'JOB: Leader of THE SEVEN',
        img:'img/3490138 (2).jpg',
        text:`"The only man in the sky is me"`
    }
]

const prev = document.querySelector('.prevbtn')
const next = document.querySelector('.nextbtn')
const random = document.querySelector('.random')

let currentitems=0

window.addEventListener('load', function(){
    showperson(currentitems)
})

var names=document.querySelector('.name')
var job = document.querySelector('.job')
var info= document.querySelector('.info')
var img=document.querySelector('img')



function showperson(person){
    const item = reviews[person]
    img.src = item.img
    names.innerHTML = item.name
    job.innerHTML=item.job
    info.innerHTML=item.text
}

prev.addEventListener('click', function(){
    currentitems--
    if(currentitems < 0){
        currentitems=reviews.length-1
    }
    showperson(currentitems)
    console.log(currentitems)
})

next.addEventListener('click', function(){
    currentitems++
    if(  currentitems > reviews.length -1){
       currentitems=0
    }

    showperson(currentitems)
    console.log(currentitems)
})

random.addEventListener('click', function(){
    currentitems=Math.floor(Math.random()*reviews.length)
    showperson(currentitems)
    
var body = document.body
var color=document.querySelector('.color')
var Random=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e']

hex='#'

for (let i = 0; i <6; i++) {

    hex+=Random[getrandom()]

}

body.style.backgroundColor = hex

color.innerHTML=hex

function getrandom() {
    return Math.floor(Math.random()*Random.length)
}

})