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

menu();