// window.addEventListener('resize', menu);

var menuBig = function(){
	var selectBig = document.querySelector(".centeredTopImage");

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
			};

	};//end of onclick
	// };//end of first if
	// if(document.documentElement.clientWidth >= 900){
	// 	document.querySelector(".lista").classList.add('listaDesktopVisible')
	// };//end of second if
}; //end of function


menuBig();
