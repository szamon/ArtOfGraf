var loadingScreen = function(){
	// window.onload = function(){
	// 	document.querySelector('.loaderWrapper').classList.add('loaderWrapperHide');
	// };
	document.onreadystatechange = function(){
	if (document.readyState === "complete"){
		document.querySelector('.loaderWrapper').classList.add('loaderWrapperHide');
	}};
}

loadingScreen();