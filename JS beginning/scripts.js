var y = 5
console.log(y)

for (let i = 1; i <= 5; i++) {
    if (i%2 !==0)
    console.log('Hello world', i)
    
}
// initialize i to 0 or 1, set the condition (i<=5), add the increment (i++)
for(i=0 ; i<10 ; i+=2){
    console.log(i)
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

var x = ['one', 'two', 'three', 'four', 'five']
// console.log(x.length)
for(i = 0 ; i < x.length ; i++){
    if(i == 3){
        continue
    }
    console.log(x[i])
}
// don't forget that the array starts from item number 0
// break stops the loop while continue tells the loop to ignore that item
// .length is used to see the length of an array

var i =Math.PI
var i =Math.round(24.56)
// truncate recognises just the whole number and ignores the decimal
var y = Math.min(3, 4, 5, 6, 1)
var z = Math.max(3, 4, 5, 6, 1)
var x = Math.random()
var k = Math.round(Math.random() *1000)
// this limits the value of the random number from 1 to 1000


console.log(i)
console.log(y)
console.log(z)
console.log(x)
console.log(k)

// loops, switch, date, strings method, (intervals)on Monday


// DOM stands for Document Object Models
// var a = Date.now()
// console.log(a)

// TYPES OF LOOPS IN JAVASCRIPT
// FOR LOOP:This loops through a block of code a number of times
// FOR/IN: This loops through the properties of an object
// FOR/OF:This  loops through the properties of iterable object
// WHILE:This loops through a block of code while a specified condition is true
// DO/WHILE:This also loops through a block of code while a specified condition is true


