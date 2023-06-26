function randomNumber(){
    const valor = Math.floor( Math.random(  )*palabras.length )
    return valor
}

function id( str ){
    return document.getElementById( str );
}


function reset(){
    jugar.disabled = true;
    agregar.disabled = true;
    vidas = 8;
    aciertos = 0;
    for(let i = 0 ; i < btn_letras.length; i++){
        btn_letras[i].disabled = false;
    }
    id('resultado').innerHTML = '';
    
    // console.log(vidas, aciertos);
}



function win(){
    if(aciertos == palabra.length){
        document.getElementById('resultado').innerHTML = 'Usted ha ganado. ' + 'La palabra a adivinar era: ' + palabra.toUpperCase()
        imagen.src = '/assets/img/felicidades.png'
        for(let i = 0 ; i < btn_letras.length; i++){
            btn_letras[i].disabled = true;
        }
        jugar.disabled = false;
        agregar.disabled = false;
        id('palabra-a-adivinar').innerHTML = '';
    }
    
    if(vidas == 0){
        document.getElementById('resultado').innerHTML = 'Usted ha perdido. ' + 'La palabra a adivinar era: ' + palabra.toUpperCase();
        for(let i = 0 ; i < btn_letras.length; i++){
            btn_letras[i].disabled = true;
        }
        jugar.disabled = false;
        agregar.disabled = false;

        id('palabra-a-adivinar').innerHTML = '';

    }
}




