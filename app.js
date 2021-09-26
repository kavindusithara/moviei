$(document).ready(() =>{
    $('#mobile-menu').click(() =>{
        $('#mobile-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')

    })

    // setting owl

    let navText = ["<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items:1,
        dots:false,
        loop:true,
        nav:true,
        navText:navText,
        autoplay:true,
        autoPlayHoverPause:true
    })

    $('#top-movies-slide').owlCarousel({
        items:2,
        dots:false,
        loop:true,
        autoplay:false,
        autoPlayHoverPause:true,
        responsive : {
            480:{
                items : 3
            },
            700:{
                items : 4
            },
            1280:{
                items : 5
            },
            1600:{
                items : 6
            },
        }
    })

    $('.movie-slide').owlCarousel({
        items:2,
        dots:false,
        nav:true,
        navText: navText,
        margin:15,
        responsive : {
            480:{
                items : 2
            },
            700:{
                items : 4
            },
            1280:{
                items : 5
            },
            1600:{
                items : 6
            },
        }
    })


})