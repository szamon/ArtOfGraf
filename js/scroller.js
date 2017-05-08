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