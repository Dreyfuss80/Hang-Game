

// --------------------------------------------------------

// funcion para iniciar eljuego
buttonComenzar.addEventListener('click', () => {
    
    document.getElementById('patibulo').src = rutas[7]
    vidas = 7;
    span__palabraOculta.textContent = '';
    
    // Hallando un numero random que vaya de 1 hasta el largo del array de las palabras guardadas
    let randomNumber = Math.floor(Math.random()*palabras.length)
    
    // Asignandole el valor de la palabra escogida
    palabraAdivinar = [...palabras[randomNumber]];
    console.log(palabraAdivinar)
    for(let i = 0; i< palabraAdivinar.length; i++){
        palabraOculta[i]= '_' + ' ';
    }
    console.log(palabraOculta)
    
    span__palabraOculta.textContent = palabraOculta.join('');
    buttonComenzar.disabled = true;
    gameON = true;

})

document.addEventListener('keydown', (event) => {
    if(gameON) {  // Comprueba si activamos una partida
        let letra = event.key //Escuchamos la letra pulsada
        letra = letra.toLowerCase()
        console.log(letra);
        let letraUsadaBolean = false;
        
        // Un ciclo para comprobar que la letra este dentro de la palabra a adivinar
        for(let i = 0; i < palabraAdivinar.length;i++){
            if(letra == palabraAdivinar[i]){
                palabraOculta[i] = letra + ' ';
                checker = true
            }
        }
        
        
        if(!checker){ //Chequeamos si la letra pulsada coincidio para bajar vida o continuar con el juego
            // Aqui chequearemos que no sea la misma letra la que hemos pulsado ya
            for(let i = 0; i < letrasUsadas.length; i++){
                if(letrasUsadas[i] == letra){
                    console.log('Esa letra ya fue pulsada');
                    letraUsadaBolean = true;
                }
                    
            }
            if(!letraUsadaBolean){
                letrasUsadas.push(letra);
                console.log(letrasUsadas);
                vidas--
                document.getElementById('patibulo').src = rutas[vidas]
                console.log(vidas)
            }
            
        }else{  // Si fue buena la letra pulsada se activo el checker true y necesitamos llevarlo a false nuevamente
            checker = false;
        }
        span__palabraOculta.textContent = '';
        span__palabraOculta.textContent = palabraOculta.join('');
        
        //Comprobamos cuantas vidas nos quedan para deshabilitar la partida
        if( vidas < 1){ 
            console.log('Lo sentimos mucho usted ha perdido')
            buttonComenzar.disabled = false;
            gameON = false; 
        }

        // Comprobando si no coinciden las dos palabras, la oculta y la palabra a adivinar
        for(let i = 0; i < palabraAdivinar.length; i++){
            if(palabraAdivinar[i] != palabraOculta[i][0]){
                win = false;
            }else{
                win = true;
            }
        }   
    }
    
    // chequeando si la condicion de win se da 
    if (win){
        console.log('Felicidades usted ha ganado');
        buttonComenzar.disabled = false;
        document.getElementById('patibulo').src = './assets/img/felicidades.png'
        win = false;
        span__palabraOculta.textContent = '';

    }
    
})

// Funcion Terminar
buttonTerminar.addEventListener('click', () => {
    console.log('Esperamos que regrese Pronto');
    buttonComenzar.disabled = false;
    span__palabraOculta.textContent = '';
    vidas = 7;

})


