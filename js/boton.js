function irArriba(pxPantalla){
    window.addEventListener('scroll', () =>{
        var scroll = document.documentElement.scrollTop;
        var btn = document.getElementById('btn');

        if(scroll > pxPantalla){
            btn.style.right = 20 + "px";
        } 
        else{
            btn.style.right = -100 + "px";
        }
    })
}

irArriba(670);