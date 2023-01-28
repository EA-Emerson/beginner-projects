// FOR/IN: This loops through the properties of an object
const person = {fname:'john', lname:'Doe', age:30};
let text ='';
for (x in person) {
    text+=person[x] + ' ';
    console.log(text)
}
// From the examople above, the for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

const numbers = [20, 35, 234, 2, 3434, 290];
let txt ='';
for(c in numbers){
    txt+=numbers[c]+ ' ';
    console.log(txt)
}
// Using for in loops over an array
// Do not use FOR IN loops over an array if the index order is important
// This is because the index order is implementation-dependent and array values may not be accessed in the order you expect
// It is better to use a FOR loop, a FOR OF loop or 'ArrayName'.forEach() when index order uis important
