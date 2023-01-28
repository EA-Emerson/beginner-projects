var random=document.querySelector('.random_generator')
random.style.padding='10px'

    random.addEventListener('click', function(){

        old=setInterval(() => {
            var text=Math.floor((Math.random()*1000)+1)
            document.querySelector('p').innerHTML=text
            }, 30);

            
            var stoprand=document.querySelector('#stop_random')
        
            stoprand.addEventListener('click', function(){
                stoprand.style.color='red'
                clearInterval(old)
            })

    })