// $(function(){
    // $('button').click(function(){
    // $('p').text("Hi there")

    // })
//     $('button').on('click', function(){
//         $('p').text("Hi there")
//         $('p').css('color', 'red')
//         $('p').css('backgroundColor', 'black')
//     })
// })

// $(function(){
//    $('button').on('dblclick', function(){
//     $('p').slideUp()
//    })
// });
// You can use this keyword to target a previously selected event

// $(function(){
//     $('p').hover(function(){
//         $(this).addClass('highlight')

//     }, function(){
//         $(this).removeClass('highlight')
//     })

// })

$(function(){
    var i = 0
    $('.input').keypress(function(){
        $('span').text(i+=1)
        $('p').fadeOut().show()
    })
})

// $(function(){
//     $('.hide').click(function(){
//         $('.p1').fadeTo('slow', 0.30)
//         $('.p2').fadeTo('slow', 0.5)
//         $('.p3').fadeTo('slow',0.60)
//     })
// })

$(function(){
    $('.hide').click(function(){
        $('p').animate({left:'1166px'}, 3000)
        $('p').animate({top:'455px'})
        $('p').animate({left:'0px'})
        $('p').animate({top:'0px'})
        // 
        // $('p')
        // $('.p2').slideToggle()
        // $('.p3').slideToggle()
    })
})

// you can also use show for fadeIn and hide for fadeOut
// you can also set timer instead of specifying slow or fast

// $(function(){
//     $('.show').click(function(){
//         $('p').fadeIn('slow')
//     })
// })
