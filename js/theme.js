;(function($) {
    "use strict"; 
    AOS.init({
        duration: 1000,

    });

    //* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main-header-area').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >=290) {
                    $(".main-header-area").addClass("navbar-fixed").fadeIn();
                } else {
                    $(".main-header-area").removeClass("navbar-fixed");
                }
            });
        };
    };
    
    // sidebar_menu All Page/
    $("#menu-opener").on('click', function () {
        $(".sidebar-menus").toggleClass("active");
    });
    $(".remove-one").on('click', function () {
        $(".sidebar-menus").removeClass("active");
    });  
    
    // Scroll to top
    function scrollToTop() {
        if ($('.back-to-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    $('.back-to-top').fadeIn();
                } else {
                    $('.back-to-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.back-to-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                return false;
            });
        }
    } 
    
    // maan Languages nice selector
    $(document).ready(function() {
        $('select').niceSelect();
    });
 
    // achievement-area counterUp
    function counterUp() {
        if ($('.achievement-count').length) { 
            $('.counter').counterUp({
                delay: 10,
                time: 2000, 
            });
        };
    }

    //* Magnificpopup js
    function magnificPopup() {
        if ($('.play-btn').length) { 
            //Video Popup
            $('.play-btn').magnificPopup({
                disableOn: 200,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });   
        };
    };

    $('.cleint-item').owlCarousel({
        loop:true, 
        margin: 130,
        responsiveClass:true,
        items:4,
        autoplay:true,
        autoplayTimeout:8000,
        animateOut: 'fadeOut',
        smartSpeed: 1100,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            500:{
                items:2
            }, 
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    /*Function Calls*/   
    scrollToTop();
    navbarFixed (); 
    magnificPopup(); 
    counterUp();

})(jQuery); 


