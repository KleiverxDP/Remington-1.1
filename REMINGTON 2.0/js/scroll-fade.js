window.addEventListener('scroll', function(){

    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoPantalla = window.innerHeight/1;

    if(posicionObj1 < tamañoPantalla){ 
        animacion.style.animation = 'mover 1s ease-out'
    }


 
})

window.addEventListener('scroll', function(){

    let animacion = document.getElementById('animado1');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoPantalla = window.innerHeight/1;

    if(posicionObj1 < tamañoPantalla){ 
        animacion.style.animation = 'mover1 1s ease-out'
    }


 
})