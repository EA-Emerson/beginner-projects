// dom is a tree. at the top is html
// the tree branches into different parts
// document.getElementById('demo').innerHTML='paris' 
// this is used to target a single element with that id name

// document.getElementsByTagName('h2')

// var x= document.querySelector('#demo').innerHTML='portugal'
// console.log(x.innerHTML)
// use query selector to select one item and query selector all to select all items



var c = console.log.bind(document)

c("hello world")
c(58*2)
c('welcome to javascript hell')
console.log()


var moda=document.querySelector('.moda')
moda.previousElementSibling.querySelector('h1').innerHTML+='Hello'

// c(x.parentElement)
// c(x.parentNode)
// parentElement and parentNode both do the same thing

// c(x.nextElementSibling)
// nextElementSibling targets the next element

// c(x.previousElementSibling)
// This target the previous element

// var xo = document.querySelector('.demo')
// xo.addEventListener('click', function(){
//     alert('hello world')
// })
// click is the event. the function is the block of code that executes after the event

var c=console.log.bind(document)
var xo = document.querySelector('.demo')
xo.addEventListener('click', function(e){
    c(alert('hello world'))
    c(e.target.innerHTML)
})

var x='        apple, banana, mango,          '
var y=true

// var i ='paris, france'
// c(x.length)
// c(x.slice(3,9))
// c(x.replace('apple', 'onions'))
// c(x.concat(i))
c(x)
c(x.trim)
c(typeof x)
c(typeof y)

// This is how to store variable values in console.log

