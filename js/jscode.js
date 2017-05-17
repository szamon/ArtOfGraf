// window.addEventListener('resize', menu);

var menuBig = function(){
	var selectBig = document.querySelector(".centeredTopImage");
	var selectMainBackgroundBig = document.querySelector(".mainBackgroundBig");

	// if(document.documentElement.clientWidth < 900){
		selectBig.onclick = function(){
			if(document.querySelector(".centeredTopImage").classList.contains('centeredTopImageBig')){
				document.querySelector(".centeredTopImage").classList.remove('centeredTopImageBig');
				document.querySelector(".main1").classList.remove('main1Click');
				document.querySelector(".main2").classList.remove('main2Click');
				document.querySelector(".main3").classList.remove('main3Click');
				document.querySelector(".mainBackground").classList.remove('mainBackgroundClick');
				document.querySelector(".mainBackgroundBig").classList.remove('mainBackgroundBigClick');
			}else{
				document.querySelector(".centeredTopImage").classList.add('centeredTopImageBig');
				document.querySelector(".main1").classList.add('main1Click');
				document.querySelector(".main2").classList.add('main2Click');
				document.querySelector(".main3").classList.add('main3Click');
				document.querySelector(".mainBackground").classList.add('mainBackgroundClick');
				document.querySelector(".mainBackgroundBig").classList.add('mainBackgroundBigClick');
			};//end of onclick
		};

		selectMainBackgroundBig.onclick = function(){
			if(document.querySelector(".centeredTopImage").classList.contains('centeredTopImageBig')){
				document.querySelector(".centeredTopImage").classList.remove('centeredTopImageBig');
				document.querySelector(".main1").classList.remove('main1Click');
				document.querySelector(".main2").classList.remove('main2Click');
				document.querySelector(".main3").classList.remove('main3Click');
				document.querySelector(".mainBackground").classList.remove('mainBackgroundClick');
				document.querySelector(".mainBackgroundBig").classList.remove('mainBackgroundBigClick');
			};
		};
		//end of onclick
}; //end of function


var loadingScreen = function(){
	// window.onload = function(){
	// 	document.querySelector('.loaderWrapper').classList.add('loaderWrapperHide');
	// };
	document.onreadystatechange = function(){
	if (document.readyState === "complete"){
		document.querySelector('.loaderWrapper').classList.add('loaderWrapperHide');
	}};
}

// window.addEventListener('resize', menu);

var menu = function(){
	var select = document.querySelector("header button img");

	// if(document.documentElement.clientWidth < 900){
		select.onclick = function(){
			if(document.querySelector(".lista").classList.contains('listaMobileVisible')){
				document.querySelector(".lista").classList.remove('listaMobileVisible')
			}else{
				document.querySelector(".lista").classList.add('listaMobileVisible');
			}
	};//end of onclick
	// };//end of first if
	// if(document.documentElement.clientWidth >= 900){
	// 	document.querySelector(".lista").classList.add('listaDesktopVisible')
	// };//end of second if
}; //end of function

var player = function(){
	document.querySelector(".soundContainer").onclick = function(){
	if(document.querySelector(".soundContainer audio").paused){
		document.querySelector(".soundContainer audio").play();
	}else{
		document.querySelector(".soundContainer audio").pause();
	}
};
};

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 70,
            shrinkOn2 = 200,
            lista = document.querySelector(".lista"),
            element1 = document.querySelector(".wrapperLeft div");

        if (distanceY > shrinkOn) {
            lista.classList.add('listaScroll');
                if(distanceY>shrinkOn2){
                     element1.style.visibility = 'hidden'; 
                 }else{element1.style.visibility = 'visible';}
          
        } else {
            
                lista.classList.remove("listaScroll");
                
            
        }
    });
}

window.onload = init();
window.onload = player();
window.onload = menu();
window.onload = loadingScreen();
window.onload = menuBig();
