
var btn =document.querySelector('.btn')
var body = document.body

btn.addEventListener('click', function(){

        var color=['red', 'blue', 'pink', 'black', 'yellow', 'green', 'orange']

        var rand= Math.floor(Math.random()*color.length)
        body.style.backgroundColor=color[rand]
        btn.innerHTML=color[rand]

        // console.log[rand]
    // var x=setInterval(() => {
    //     var color=['red', 'blue', 'pink', 'black', 'yellow', 'green', 'orange']

    //     var rand = Math.floor(Math.random()*color.length)
    //     body.style.backgroundColor = color[rand]       
    //     btn.innerHTML = color[rand]
    // }, 1000);

    // btn.addEventListener('dblclick', function(){
    //     clearInterval(x)
    // })

})

var btn2=document.querySelector('.btn2')

var body = document.body



var color=document.querySelector('.color')

// const hey='#'

var Random=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e']

btn2.addEventListener('click', function(){
    hex='#'
    for (let i = 0; i <6; i++) {
        hex+=Random[getrandom()]
    }
    body.style.backgroundColor = hex
    color.innerHTML=hex
})
function getrandom() {
    return Math.floor(Math.random()*Random.length)
}
// btn2.addEventListener('click', function(){

// function getrandom(list){
//         const zex =[]
    
//         for (let i = 0; i <6; i++) {
//             var maths=Math.floor(Math.random()*Random.length)
//             zex.push(list[maths])
//     }
//     return zex
// }   
// const newArray= [hey].concat(getrandom(Random))

// const finalColor=newArray.join("")

// btn2.innerHTML=finalColor

// body.style.backgroundColor = finalColor

// color.innerHTML=finalColor

// console.log(newArray)
// }

// )
 


 

 



