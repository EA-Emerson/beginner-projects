var btn =document.querySelector('.btn')
var p=document.querySelector('p')
// var x=document.body

// btn.addEventListener('click', function(){
//     var h =window.innerHeight
//     var w=window.innerWidth

//     // console.log(`The height is: ${h}, while the width is: ${w}`)
//     p.innerHTML=`The height is: ${h}, while the width is: ${w}`
// })

function demo(){
    var h =window.innerHeight
    var w=window.innerWidth

    // console.log(`The height is: ${h}, while the width is: ${w}`)
    p.innerHTML=`The height is: ${h}, while the width is: ${w}`
}
window.onresize= demo
