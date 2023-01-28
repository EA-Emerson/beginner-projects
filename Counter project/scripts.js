var count = 0

var value = document.querySelector('#value')
var btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles=e.currentTarget.classList


        if(styles.contains('decrease')){
            count --

            if (count<0) {
                value.style.color='red'
            }

            else if(count==0){
                value.style.color='black'
            }
        }


        else if(styles.contains('reset')){
            count = 0

            if (count==0) {
                value.style.color='black'
            }
        }
        

        else if(styles.contains('increase')){
            count++
            
            if (count>0) {
                value.style.color='green'
            }

            else if(count==0){
                value.style.color='black'
            }
        }

    value.textContent=count

    })

})
