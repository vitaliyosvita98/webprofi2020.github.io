$(function(){
	$('.newscontent').hide();
	$('h3.newstitle').click(function(){
		$('.newscontent').slideToggle('slow');
	});
});