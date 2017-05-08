var gallery = document.querySelectorAll('.gallery a');
var overlay = document.getElementById('overlay');

gallery.forEach(function(item){
	item.onclick = function(event){
		event.preventDefault();
		
		var overlayImg = '<img src="' + this.getAttribute('href') + '">';
		
		var content = document.querySelector("#overlay");
	
		content.innerHTML = overlayImg;
	

		overlay.style.display = "inline-block";
	};
});

overlay.onclick = function(){
	overlay.style.display = "none";
}

// var leftArrow = document.querySelector('.overlayArrowLeftImgContainer');
// var rightArrow = document.querySelector('.overlayArrowRightImgContainer');

// leftArrow.onclick = function(){
// 	console.log('left arrow click');
// };

// rightArrow.onclick = function(){
// 	console.log('right arrow click')
// };
