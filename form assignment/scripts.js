setTimeout(() => {
    (alert('Welcome to your personal ToDo List Manager.'))
}, 300);

setTimeout(() => {
    (alert('Read the following instructions carefully: \n 1. Click on the textarea and type in your ToDo. \n 2. Click on the ADD button to add your ToDo to the list. \n 3. Click on Delete to remove your ToDo from the list.')
    )

}, 2000);

let toDoButton =document.getElementById('add_btn');
// let toDoContainer=document.getElementById('container');
let input=document.getElementById('txt');
let list=document.querySelector('.lists');

// use the tag
list.addEventListener('click', function(e){
    if (e.target.className=='dlt') {
        var li =e.target.parentElement
        list.removeChild(li)
        
    }
})

// use document.forms when working with forms
// we use square bracket for forms, not parenthesis
// forms uses submit as event listener, not click
var form=document.forms['container']
form.addEventListener('submit', function(e){
    e.preventDefault()

    var v =document.querySelector('.textarea').value

    var new_li =document.createElement('li')
    var bookname=document.createElement('span')
    var deletebtn=document.createElement('span')


    bookname.innerHTML=v
    deletebtn.innerHTML='Delete'


    bookname.classList.add('txt')
    deletebtn.classList.add('dlt')
    new_li.classList.add('li')

    if (v=='') {
        alert('Please type something')
    }

    else{
    new_li.appendChild(bookname)
    new_li.appendChild(deletebtn)
    list.appendChild(new_li)

    input.value=''
    }
    
    

})
// this is to print whatever is targeted on the console

// prevent default can be used to prevent a button or link from doing its default action

// let btns=document.querySelectorAll('#dlt')
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement
//         li.parentElement.removeChild(li)
//     })
// })

// no need to convert to array when using querySelectorAll


// toDoButton.addEventListener('click', function(){
//     var new_span=document.createElement('span');
//     new_span.classList.add('txt')
//     new_span.innerText=input.value;
//     if (!new_span.innerText) {
//         alert('Please type something valid');
//     return   
//     }

//     var del=document.createElement('span')
//     del.classList.add('dlt')
//     del.innerText='Delete'

//     var li=document.createElement('li')
//     li.appendChild(new_span)
//     li.appendChild(del)
//     list.prepend(li)
//     input.value='';

//     del.addEventListener('click', function(){
//         new_span.remove()
//         li.remove()
//     })
    
// })





// dlt.addEventListener('click', function(){
//     oldspan.style.textDecoration='line-through'
// })


// dlt1.addEventListener('click', function(){
//     oldspan1.style.textDecoration='line-through'
// })


// dlt2.addEventListener('click', function(){
//     oldspan2.style.textDecoration='line-through'
// })