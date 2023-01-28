let input = document.querySelector('.input');
let btns = document.querySelectorAll('.button');
let submit = document.querySelector('.submit');
let del = document.querySelector('.DEL');
let clear = document.getElementById('AC');
let output = document.querySelector('.output');
let input_array;

btns.forEach(function(btn){

    btn.addEventListener('click', function(e){
    var x=e.target.innerHTML;
    input.value += x;
})

})


clear.addEventListener('click', function(){
    input_array = input.value.split('')
    input_array = [];
    input.value = input_array.join("");
    output.value = 0
})

del.addEventListener('click', function(){
    input_array = input.value.split('');
    input_array.splice(input_array.length-1, 1)
    if (input.value.length <= 0) {
        // alert('please type in a value');
        var confirmation = confirm("please type in a number");
    }
    else{
        input.value = input_array.join("")
    }
})

submit.addEventListener('click', function(){
    function isNum(val){
        return !isNaN(val);
    }
    let solution = eval(input.value);
    btns.forEach(function(btn){

        btn.addEventListener('click', function(e){
        // var x=e.target.innerHTML;
        var updatedSolution = e.target.innerHTML
        input.value = solution += updatedSolution;
    })
    
    // clear.addEventListener('click', function(){
    //     input_array = input.value.split('')
    //     input_array = [];
    //     input.value = input_array.join("");
    //     output.value = 0
    // })
    
    // del.addEventListener('click', function(){
    //     input_array = input.value.split('');
    //     input_array.splice(input_array.length-1, 1)
    //     if (input.value.length <= 0) {
    //         // alert('please type in a value');
    //         var confirmation = confirm("please type in a number");
    //     }
    //     else{
    //         input.value = input_array.join("")
    //     }
    // })

    })
    // console.log(isNum(solution))
    if (input.value.length == 0) {
        alert('please type in a number')
    }
    else if(isNum(solution) == true){
        output.value = solution;
    }
    else{
        output.value = 0;
        // alert("Enter a valid expression");
    }
})



// function calculator(){
//     var amount=$('.amount').val()
//     var percentage=$('.percentage').val()

//     var tip=amount*(percentage/100)
//     var total =Number(amount)+tip;


//     var Tip=tip.toFixed(2)
//     var TIP=$('.tip').val()
//     TIP+=Tip
//     $('.tip').val(TIP)


//     var Total=total.toFixed(2)
//     var TOTAL=$('.total').val()
//     TOTAL+=Total
//     $('.total').val(TOTAL)

    
//     return false
// }

// $('.calculator').submit(calculator)


// var percentage=document.querySelector('.percentage')

// var amount=document.querySelector('.amount')

// var tip=document.querySelector('.tip')

// var total=document.querySelector('.total')

// let Submit= document.querySelector('.addup')

// Submit.addEventListener('click', function(e){
//     e.preventDefault()
//     var hey=e.target.innerHTML
//     console.log(hey)

//     var Amount=amount.value
//     var Percentage=percentage.value

//     var Tip = Amount*(Percentage/100)
//     tip.value+=Tip.toFixed(2)
//     console.log(tip.value)


//     var Total=Number(Amount)+Tip
//     var totals= total.value+Total.toFixed(2)
//     total.value=totals
//     console.log(totals)