function Picture(path, caption){
	this.path = path;
	this.caption = caption;
};

var pictures = [
	new Picture("img/gallery/gallery1.jpg", ""),
	new Picture("img/gallery/gallery2.jpg", ""),
	new Picture("img/gallery/gallery3.jpg", ""),
	new Picture("img/gallery/gallery4.jpg", ""),
	new Picture("img/gallery/gallery5.jpg", ""),
	new Picture("img/gallery/gallery6.jpg", ""),
	new Picture("img/gallery/gallery7.jpg", ""),
	new Picture("img/gallery/gallery8.jpg", ""),
	]

var gallery = {
	indexOfPic: 0,
	pictures: pictures,
	mediaWidth: 884,

	printer: function(object, text){
		object.innerHTML = text;
	},

	fillHTML: function(){
		this.pathHtmlfill(".gallery");
	},

	pathHtmlfill: function(id){
		var classElement = document.querySelector(id);
		var HTML = "";
		for(var i = 0; i < gallery.pictures.length; i++){
			HTML += '<li class="">';
			HTML += '<a href="img/gallery/gallery' + (i+1) + '.jpg" class="">';
			HTML += '<img src="img/gallery/gallery' + (i+1) + '.jpg" alt="' + this.pictures[i].caption + '" class="img">';
			HTML += '</a></li>'
		}
		gallery.printer(classElement, HTML);
	},

	overlayCreate: function(){
		var anchors = document.querySelectorAll('.gallery a');
		anchors.forEach(function(item, index){
			item.onclick = function(event){
				event.preventDefault();
				if($(window).width()>=gallery.mediaWidth){
				var overlayContent = '<div class="overlayArrowLeftImgContainer">';
				overlayContent += '<img src="img/arrow.png" alt="arrow to the left" class="img overlayArrowLeftImg">';
				overlayContent += '</div>';
				overlayContent += '<img src="'+ gallery.pictures[index].path + '" alt="image' + index + '" class="img overlayImg">';
				overlayContent += '<div class="overlayArrowRightImgContainer">';
				overlayContent += '<img src="img/arrow.png" alt="arrow to the right" class="img overlayArrowRightImg">'
				overlayContent += '</div>';
				overlayContent += '<div class="overlayQuitImgContainer"><img src="img/CloseButton.png" alt="close" class="img"></div>';
				var content = document.querySelector(".overlayImgContainer");
				gallery.printer(content, overlayContent);
				overlay.style.display = "inline-block";
				overlay.style.opacity = 1;
				gallery.indexOfPic = index;
				gallery.overlayNav();
				gallery.overlayShow();
				};
			};
		});
	},

	overlayNav: function(){
		var leftArrow = document.querySelector('.overlayArrowLeftImgContainer');
		var rightArrow = document.querySelector('.overlayArrowRightImgContainer');
		var quit = document.querySelector('.overlayQuitImgContainer');
		var quit1 = document.querySelector('#overlay');
		var quit2 = document.querySelector('.outerOverlay');
		var image = document.querySelector('.overlayImgContainer');

		leftArrow.onclick = function(){
			console.log('left arrow log');
			if(gallery.indexOfPic > 0){
				gallery.indexOfPic -= 1;
			}
			else {
				gallery.indexOfPic = gallery.pictures.length - 1;
			};
			document.querySelector('.overlayImg').src = gallery.pictures[gallery.indexOfPic].path;
		};

		rightArrow.onclick = function(){
			console.log('right arrow log!');
			if(gallery.indexOfPic < gallery.pictures.length - 1){
				gallery.indexOfPic += 1;
			}
			else {
				gallery.indexOfPic = 0;
			};
			document.querySelector('.overlayImg').src = gallery.pictures[gallery.indexOfPic].path;
		};

		quit.onclick = function(){
			console.log('quit x log');
			quit1.style.display = "none";
		};

		// quit1.onclick = function(){
		// 	console.log('overlay quit');
		// 	quit1.style.display = "none";
		// };

	},

	overlayShow: function(){
		var element = [document.querySelector(".overlayArrowLeftImgContainer"), document.querySelector(".overlayArrowRightImgContainer"), document.querySelector(".overlayQuitImgContainer")]; 
		for(i=0; i<=2; i++){
			element[i].onmouseover = function(){
				for(var i=0; i<3; i++){
					element[i].childNodes[0].style.opacity = 1;
				};
			};
		};
		for(i=0; i<=2; i++){
			element[i].onmouseleave = function(){
				for(var i=0; i<3; i++){
					element[i].childNodes[0].style.opacity = 0;
				};
			};
		};
	},
}

gallery.fillHTML();
gallery.overlayCreate();