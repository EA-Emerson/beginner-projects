// FOR/OF:This  loops through the properties and values of iterable object
// It lets you loop over iterable data structures such as arrays, strings, maps, nodelists, and more

// NOTE: Variable can be declared with 'const', 'let' or 'var'
// 'const is used when declaring variable names for an array'

// const cars = ['Nissan', ' Koenigsegg', ' Mazda', ' Audi', ' Volvo', ' BMW'];
// let text =' '
// for (let x of cars) {
//     text+= x;
//     console.log(text) ;  
// }
// console.log(cars.map)

// cars.forEach(function () {
//     console.log(cars.map[(Array.from({length: 3}, () =>Math.floor(Math.random()*cars.length)))])
// })
// cars.forEach.apply

// console.log(cars[x])
// console.log(cars=Math.floor(Math.random()*cars.length))

// var _ = require('underscore');

const cars = ['Nissan', ' Koenigsegg', ' Mazda', ' Audi', ' Volvo', ' BMW'];
function getrandom(list) {
    const zex =[]
    for (let i = 0; i <=6; i++) {
        const random=Math.floor(Math.random()*cars.length)
        zex.push(list[random])
        
    }
    return zex
    
}
// function getElements(list){
//     return [...list].sort(() =>Math.random() < 0.5 ? 1:-1).slice(0,4)
// }

console.log(getrandom(cars))
console.log(getrandom(cars))
console.log(getrandom(cars))
console.log(getrandom(cars))
console.log(getrandom(cars))
console.log(getrandom(cars))
// console.log(getElements(cars))
// console.log(getElements(cars))
// console.log(getElements(cars))
// console.log(getElements(cars))
// console.log(getElements(cars))
// console.log(zex)
// console.log(getrandom())
// var random = cars[Math.random()*cars.length];
// console.log("Random: ", random)

// for(x in cars){
//     console.log(cars[x]);
// }

// let language = 'javascript';

// for(let x in language){
//     console.log(language[x])
// }

// let txt='';
// for(let x of language){
//     txt+=x + ' ';
//     console.log(txt)
// }
