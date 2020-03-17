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