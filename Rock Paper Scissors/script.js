var reset=document.querySelector('.reset');
var players=document.querySelectorAll('.player');
var computers=document.querySelector('.computerBtns');
var computerGuess = document.querySelector('.computerguess');
var compGuess = document.querySelector('.compGuess');

var computer=['Rock', 'Paper', 'Scissors'];

compGuess.innerHTML = '';
reset.addEventListener('click', function recall(){

    players.forEach(function(player){
        player.addEventListener('click', function(e){
            computerGuess.innerHTML = 'The computer chose:  ';
            var compRand=computer[Math.floor(Math.random()*computer.length)];
            console.log(`The computer chose: ${compRand}`);

            setTimeout(() => {
                compGuess.textContent = compRand
            }, 300);

            setTimeout(() => {
                if (e.target.innerHTML === compRand) {
                    alert('You tied with the computer');
                    alert.addEventListener('click', function(){
                        compGuess.textContent = ''
                    })
                }
    
                else if ((e.target.innerHTML == "Rock" && compRand == "Paper") || 
                (e.target.innerHTML == "Paper" && compRand == "Scissors") || 
                (e.target.innerHTML == "Scissors" && compRand == "Rock"))
                {
                    alert('You lost to the computer');
                }
                else{
                    alert('Congratulations, you beat the computer');
                }
            }, 500);
            
        })
        
    })
})