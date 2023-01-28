var inputs = document.querySelector('.inputs')
var reset = document.querySelector('.resetbtn');
var start =  document.querySelector('.start');
var hint = document.querySelector('.hint span');
var guess = document.querySelector('.guess_left span');
var wrong = document.querySelector(".wrong_letters");
var text = document.querySelector('.texts');



var startNow = document.querySelector('.startNow');
var mainGame = document.querySelector('.mainGame');
var rulesAgain = document.querySelector('.rulesAgain');
var rules = document.querySelector('.rules');
var mainRules = document.querySelector('.mainRules');
var rulesBtn = document.querySelector('.rulesBtn');
var rulesList = document.querySelector('.rulesList');
var welcome = document.querySelector('.welcome');
var closeRules = document.querySelector('.closeRules');
var RULEBTN = document.querySelector('.RULEBTN');
var startbtn = document.querySelector('.STARTBTN');


var Lives;

reset.style.display = 'none';

function showRules() {
    rulesList.style.display = 'block';
    welcome.style.display = 'none';
    RULEBTN.style.display = 'none';

    closeRules.addEventListener('click', function(){
        welcome.style.display = 'block';
        rulesList.style.display = 'none';
        RULEBTN.style.display = 'block';
    })

}

start.addEventListener('click', function randomword() {

    mainGame.style.display = 'block';
    rules.style.display = 'none';
    reset.style.display = 'block';

    rulesAgain.addEventListener('click', function(){
        rules.style.display = 'block';
        startbtn.style.display = 'none';
        rulesList.style.display = 'block';
        welcome.style.display = 'none';
        RULEBTN.style.display = 'none';

        closeRules.addEventListener('click', function(){
            rules.style.display = 'none';
            welcome.style.display = 'block';
            rulesList.style.display = 'none';
            RULEBTN.style.display = 'block';
        })

    })

    Lives = 10;
    wrong.innerHTML = '';
    var randomobj = wordlist[Math.floor(Math.random()*wordlist.length)];
    var word = randomobj.word.toUpperCase();
    hint.innerHTML = randomobj.hint;

    var html = [];
    var Html = [];
    for(var i = 0; i<word.length; i++){
        html[i] = `<input class = "yeah" style="text-align:cente; width:50px ;padding:10px"
         value="_" disabled></input>` ;   
    }
    for(var i = 0; i<word.length; i++){
        Html[i] = `<input class = "yeah" style="text-align:cente; width:50px ;padding:10px"
         value="-" disabled></input>` ;   
    }
    inputs.innerHTML = html.join("");
    
    guess.innerHTML =`You have ${Lives} lives left`;

    console.log(word)
    var keynum;
    document.addEventListener('keyup', function(e){
        console.log(typeof wrong.innerHTML)
            if (e.which >= 64 && e.which<= 90) {
                keynum = e.key.toUpperCase()

                if (word.includes(keynum)) {
                    for(var j = 0; j<word.length; j++){       
                        if (word[j]==keynum) {
                            html[j]=`<input class="yeah" type = "text" style="text-align:center;
                            width:50px; font-weight:800; padding:10px" value="${keynum}" disabled></input>`;
                            
                            Html[j]=`<input class="yeah" type = "text" style="text-align:center;
                            width:50px; font-weight:800; padding:10px" value="${keynum}" disabled></input>`;
                        }
                    }
                }

                
                else{
                    if (wrong.innerHTML.includes(keynum)) {
                        return null
                    }
                    else{   
                        wrong.innerHTML+=keynum;
                        if (wrong.innerHTML.length <= 10 && Lives > 0) {
                            Lives -= 1
                            guess.innerHTML=`You have ${Lives} lives left`

                        }
                        else if (Lives <= 0 && wrong.innerHTML.length >= 10) {
                            wrong.innerHTML = wrong.innerHTML.substring(0, 10);
                            
                                setTimeout(() => {
                                    alert("YOU LOSE! Better luck next time \n Click on the reset button to play again")
                              }, 200);
                              
                            return
                            }
                            
                      }
                    }
                }

            inputs.innerHTML=html.join(" ")
            text.innerHTML = Html.join(" ")
            text.style.display = 'none'
            if (text.innerHTML == inputs.innerHTML) {
                setTimeout(() => {
                    alert('Congratulations, YOU WIN!\nClick on the RESET button to play again')
                }, 500);

                return
            }

        })
        return
    })


reset.addEventListener('click', function resetGame(){
    window.location.reload()

})