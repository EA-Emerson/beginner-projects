var btn = document.querySelector('#stop')
var hide = document.querySelector('#hide')
var container = document.querySelector('.container')
var header=document.querySelector('h1')

console.log(header)
    var x = setInterval((rand) => {
        var rand = Math.floor((Math.random()*10)+1)
        document.querySelector('h1').innerHTML=rand;
    }, 300);


hide.addEventListener('click', function(e){
    e.target.style.display='none'
    clearInterval(x)

    var input = document.createElement('input')

    var btn = document.createElement('button')
    btn.style.marginLeft='10px'

    container.appendChild(input)
    container.appendChild(btn).innerHTML='Confirm'

    input.setAttribute('class', 'one');
    input.setAttribute('type', 'number')
    

    // setattribute is better than classlist
    // use the .hasattribute to check for an attribute
    // removeattribute is used to remove an attribute

    // var i=input.hasAttribute('class')
    // var i=input.removeAttribute('class')
    btn.addEventListener('click', function aero(){
        if (header.innerHTML == input.value) {
            alert("You got the correct number")
        }
        else {
            alert("Wrong number")
        }
        header.classList.remove("h1")
        
    })

})


