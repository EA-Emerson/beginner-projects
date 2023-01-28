const square = function(x) {
    return x * x;
    };
console.log(square(12));
    // This function has 1 parameter, so theres no need to call the function name afterwords

const makeNoise = function() {
    console.log("Pling!");
    };
    makeNoise();
    // This function has no parameter. Hence we have to call it at the end to make it execute its block of code

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
    };
console.log(power(2, 10));

/*Some functions produce a value, such as power and square, and some
don’t, such as makeNoise, whose only result is a side effect. A return
statement determines the value the function returns. When control
comes across such a statement, it immediately jumps out of the current
function and gives the returned value to the code that called the
function. A return keyword without an expression after it will cause
the function to return undefined. Functions that don’t have a return
statement at all, such as makeNoise, similarly return undefined.
Parameters to a function behave like regular bindings, but their initial
values are given by the caller of the function, not the code in the
function itself.*/

let x = 10;
if (true) {
let y = 20;
var z = 30;
console.log(x + y + z);}

const halve = function(n) {
    return n / 2;
    };
    let n = 10;
    console.log(halve(100));
    // → 50
    console.log(n);
    // → 10

    const hummus = function(factor) {
        const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
        unit += "s";
        }
        
        console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(1, "can", "chickpeas");
        ingredient(0.25, "cup", "tahini");
        ingredient(0.25, "cup", "lemon juice");
        ingredient(1, "clove", "garlic");
        ingredient(2, "tablespoon", "olive oil");
        ingredient(0.5, "teaspoon", "cumin");
        return factor

        };
        console.log(hummus(5));


        function greet(who, what) {
            console.log(`Hello ${who} and ${what}`);
            }
            greet("Harry", "Harry's dog");
            console.log("Bye");
        
        // function suare(x) {
        //     return x * x;
        //     }

        // let nme = prompt('What is your name?')
        // if (nme.length>0) {
        //     console.log(`You have a beautiful name, ${name}`)
        // }
        // else{
        //     console.log('What the fuck is that dumbass name you stupid bitch')
        // }

        // function chicken() {
        //     return egg();
        //     }
        //     function egg() {
        //     return chicken();
        //     }
        //     console.log(chicken() + " came first.");
        // this outputs call stack size exceeded on the console

        function sqare(x) { return x * x; }
console.log(sqare(4, true, "hedgehog"));
       
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
    }
    console.log(minus(10))
    console.log(minus(10, 4))

    function powe(base, exponent=2){
        let result =base**exponent
        // for (let count = 0; count < exponent; count++) {
        //     // const element = exponent[count];
        //     result*=base
        // }
        return result
    }
    console.log(powe(4))
    console.log(powe(3,5))
