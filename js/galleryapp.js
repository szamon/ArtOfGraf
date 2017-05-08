var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


var $overlay = $('<div id="overlay"></div>')
var $image = $('<img>');

$overlay.append($image);

$("body").append($overlay);

$(".gallery a").click(function(event){

	if(!isMobile){

	event.preventDefault();

	var imageLocation = $(this).attr("href");

	$image.attr("src", imageLocation);

	$overlay.show();

	}});

$overlay.click(function(){
	$(this).hide();
	});
