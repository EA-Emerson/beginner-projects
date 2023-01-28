// TYPES OF LOOPS IN JAVASCRIPT
// FOR LOOP:This loops through a block of code a number of times


// for (let i = 0; i < 5; i++) {
//     console.log('The number is ' + i)
// }

// let jello;
// for(jello=0; jello<10; jello++){
//     console.log(jello)
// }
// var hex='#'
// const cars = ['bmw', 'ford', 'toyota', 'nissan', 'volvo']
// for (let i = 0; i < 4; i++) {
    
//     // console.log(element)
//     hex+=cars[i];

    
// }
// console.log(hex)

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 1; i <= 5; i++) {
//     if (i%2 !==0)
//     console.log('Hello world', i)
    
// }
// initialize i to 0 or 1, set the condition (i<=5), add the increment (i++)

const Random=[2, 3, 4, 5, 1, 3, 5, 6, 7, 8 ,9, 3, 1,4 ,12, 1434, 14]
const hey='#'

function getrandom(list){
    const zex =[]

    for (let i = 0; i <6; i++) {
        const random=Math.floor(Math.random()*Random.length)
       zex.push(list[random])
    
    }
    return zex
    
    
}
const newArray= [hey].concat(getrandom(Random))

console.log(newArray)
console.log(newArray)
console.log(newArray)
// console.log(Random)
// console.log(getrandom(hey))
// console.log(getrandom(hey))
// console.log(getrandom(hey))

// console.log(getrandom(Random))
// console.log(getrandom(Random))
// console.log(getrandom(Random))
// console.log(getrandom(Random))


// function Randim() {
//     return Math.floor(Math.random()*Random.length)
// }

// var x = ['one', 'two', 'three', 'four', 'five']
// console.log(x.length)
// for(i = 0 ; i < x.length ; i++){
//     if(i == 3){
//         continue
//     }
//     console.log(x[i])
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// don't forget that the array starts from item number 0
// break stops the loop while continue tells the loop to ignore that item
// .length is used to see the length of an array
