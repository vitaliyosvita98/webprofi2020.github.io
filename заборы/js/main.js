/// <reference path='lib/wow.js' />
/// <reference path='lib/TimeCircles.js' />
/// <reference path='lib/owl.carousel.js' />

'use strict';

var $window      = $(window),
	nbodyNode    = document.body || document.getElementsByTagName('body')[0],
	nStartScreen = document.getElementById('start-screen'),

	jbodyNode    = $(nbodyNode),
	jStartScreen = $(nStartScreen);


/* google map
================================================== */
function _g_map ()
{
	var maps = $('.g_map');

	if ( maps.length > 0 )
	{
		$.getScript('http://maps.google.com/maps/api/js?sensor=false', function( data, textStatus, jqxhr ) {

			maps.each(function() {
				var current_map = $(this);
				var latlng = new google.maps.LatLng(current_map.attr('data-longitude'), current_map.attr('data-latitude'));
				var point = current_map.attr('data-marker');

				var myOptions = {
					zoom: 14,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					mapTypeControl: false,
					scrollwheel: false,
					draggable: true,
					panControl: false,
					zoomControl: false,
					disableDefaultUI: true
				};

				var stylez = [
					{
						featureType: "all",
						elementType: "all",
						stylers: [
							{ saturation: -100 } // <-- THIS
						]
					}
				];

				var map = new google.maps.Map(current_map[0], myOptions);

				var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
				map.mapTypes.set('Grayscale', mapType);
				map.setMapTypeId('Grayscale');

				var marker = new google.maps.Marker({
					map: map,
					icon: {
						size: new google.maps.Size(36,48),
						origin: new google.maps.Point(0,0),
						anchor: new google.maps.Point(18,48),
						url: point
					},
					position: latlng
				});

				google.maps.event.addDomListener(window, "resize", function() {
					var center = map.getCenter();
					google.maps.event.trigger(map, "resize");
					map.setCenter(center);
				});
			});
		});
	};
};



$window.on('load', function () {



	/* google map
	================================================== */
	_g_map();


});




jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 400 ? 'In': 'Out')](500);           
    });
});


    jQuery(function($){
'use strict';

// -------------------------------------------------------------
//   Basic Navigation
// -------------------------------------------------------------
(function () {
var $frame  = $('#basic');
var $slidee = $frame.children('ul').eq(0);
var $wrap   = $frame.parent();

// Call Sly on frame
$frame.sly({
    horizontal: 1,
    itemNav: 'basic',
    smart: 1,
    activateOn: 'click',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 0,
    scrollBar: $wrap.find('.scrollbar'),
    scrollBy: 1,
    pagesBar: $wrap.find('.pages'),
    activatePageOn: 'click',
    speed: 300,
    elasticBounds: 1,
    easing: 'easeOutBack',
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,

    // Buttons
    forward: $wrap.find('.forward'),
    backward: $wrap.find('.backward'),
    prev: $wrap.find('.prev'),
    next: $wrap.find('.next'),
    prevPage: $wrap.find('.prevPage'),
    nextPage: $wrap.find('.nextPage')
});

$wrap.find('.toStart').on('click', function () {
    var item = $(this).data('item');
    // Animate a particular item to the start of the frame.
    // If no item is provided, the whole content will be animated.
    $frame.sly('toStart', item);
});

$wrap.find('.toCenter').on('click', function () {
    var item = $(this).data('item');
    // Animate a particular item to the center of the frame.
    // If no item is provided, the whole content will be animated.
    $frame.sly('toCenter', item);
});

$wrap.find('.toEnd').on('click', function () {
    var item = $(this).data('item');
    // Animate a particular item to the end of the frame.
    // If no item is provided, the whole content will be animated.
    $frame.sly('toEnd', item);
});


$wrap.find('.add').on('click', function () {
    $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
});

$wrap.find('.remove').on('click', function () {
    $frame.sly('remove', -1);
});
}());
});

      $('.owl-carousel2').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    navText:["",""],
})

        $(document).ready(function(){
  $(".arrow-top a").mPageScroll2id();
  $(".owl-carousel10").owlCarousel({
    loop:true,
    items:1,
    nav:true,
    dots:true,
     navText:["",""],
     autoplay:true, //Автозапуск слайдера
    
    smartSpeed:2000, //Время движения слайда
    autoplayTimeout:4000,
  });
});