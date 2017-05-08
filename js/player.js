var player = function(){
	document.querySelector(".soundContainer").onclick = function(){
	if(document.querySelector(".soundContainer audio").paused){
		document.querySelector(".soundContainer audio").play();
	}else{
		document.querySelector(".soundContainer audio").pause();
	}
};
};

player();