$(document).ready(function(){
    $(document).ready(function() {
        $(".nap ul li a").hover(function(){
            $(".nap-wrap .inform").addClass("new-inf");
        });

        $(".a-act1").click(function(){
            $(".right-bot3").hide();
            $(".right-bot2").hide();
            $(".right-bot1").show();
            $(".a-act2").removeClass("cliniks-active");
            $(".a-act3").removeClass("cliniks-active");
            $(".a-act1").addClass("cliniks-active");
        });

        $(".a-act2").click(function(){
            $(".right-bot1").hide();
            $(".right-bot3").hide();
            $(".right-bot2").show();
            $(".a-act1").removeClass("cliniks-active");
            $(".a-act3").removeClass("cliniks-active");
            $(".a-act2").addClass("cliniks-active");
        });

        $(".a-act3").click(function(){
            $(".right-bot1").hide();
            $(".right-bot2").hide();
            $(".right-bot3").show();
            $(".a-act1").removeClass("cliniks-active");
            $(".a-act2").removeClass("cliniks-active");
            $(".a-act3").addClass("cliniks-active");
        });


        $(".how1-padd1").click(function(){
            $(".how1-padd1").addClass("new-bg1");
            $(".how1-padd2").removeClass("new-bg1");
            $(".how1-padd3").removeClass("new-bg1");
        });

        $(".how1-padd2").click(function(){
            $(".how1-padd2").addClass("new-bg1");
            $(".how1-padd1").removeClass("new-bg1");
            $(".how1-padd3").removeClass("new-bg1");
        });

        $(".how1-padd3").click(function(){
            $(".how1-padd3").addClass("new-bg1");
            $(".how1-padd1").removeClass("new-bg1");
            $(".how1-padd2").removeClass("new-bg1");
        });

    });

    $(document).ready(function(){
        $('.owl-carousel2').owlCarousel({
            center: true,
            dots:false,
            items:3,
            loop:true,
            nav:true,
            navText:["",""],
            responsive:{
                0:{
                    items:1,
                },
                1250:{
                    items:2,
                }

            }
        });
        $('.owl-carousel1').owlCarousel({
            autoplaySpeed:1000,
            autoplay: true,
            autoplayTimeout: 3000,
            items:1,
            dots:false,
            loop:true,
            nav:true,
            navText:["",""],
        });
    });

    $('.popup').magnificPopup();
});

jQuery("document").ready(function($){
    var nav = $('.top-line-wrap');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

    jQuery(".nap ul li").hover(function(){ 
var nap_title = jQuery(this).text(); 
console.log(nap_title); 
jQuery(".new-inf h3").text(nap_title) 
});

});

$(document).ready(function() {
    $('.burg').click(function() {
        $('.ul-hidden').slideToggle(500);
    });
    $(window).resize(function() {
        if ($(window).width() > 500 ) {
            $('.ul-hidden').removeAttr('style');
        }
    });
});

jQuery(function($){
    $(".input-req2").mask("+7 (***)***-**-**");
    $("#phone").mask("(999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");

});

