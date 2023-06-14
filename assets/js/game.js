// Declaracion de Variables

// Declaracion de las rutas de las imagenes del muñeco
const rutas = ['./assets/img/patibulo0.png', './assets/img/patibulo1.png', './assets/img/patibulo2.png', './assets/img/patibulo3.png', './assets/img/patibulo4.png', './assets/img/patibulo5.png', './assets/img/patibulo6.png','./assets/img/patibulo7.png'];

const palabras = ['minato', 'saku', 'wilson']; // Palabras a adivinar
let palabraAdivinar = ''; // Palabra a adivinar es la palabra escogida del array palabras
let palabraOculta = []; //Palabra oculta, es el array que se muestra con guiones
let letrasUsadas = []; //array con todas las teclas que han sido pulsadas
let gameON = false; // variable usada para declarar si el juego esta activo o no, en vistas a poder escuchar todos los eventos que sea de presionar una tecla
let vidas; //Cant de vidas
let checker = false; // Variable que chequeara si la tecla pulsada se encuentra o no
let win = false; // Variable que chequeara si ganamos
document.getElementById('patibulo').src = rutas[0];

// Declarando las variables asociadas a los elementos del DOM
const span__palabraOculta = document.getElementById('span__palabra-oculta');
const span__letrasUsadas = document.getElementById('span__letras-usadas');
const buttonComenzar = document.getElementById('button__comenzar');
const buttonTerminar = document.getElementById('button__terminar');
const buttonInicio = document.getElementById('button__inicio');
const spanVidas = document.getElementById('span__vidas')


// Eventos
buttonComenzar.addEventListener('click',() => {
    emptySpan();
    buttonComenzar.disabled= true;
    document.getElementById('patibulo').src = rutas[7];
    vidas = 7;
    spanVidas.textContent = 'Vidas: ' + vidas;
    randomWord();
    console.log(asignarGuiones())
    asignarGuiones();
    span__palabraOculta.textContent = palabraOculta;
    gameON = true;
})

buttonInicio.addEventListener('click', () => {
    window.location.href = "index.html";    
})


// Evento Pulsacion de teclas
document.addEventListener('keydown', (e) => {
    if(gameON){
        if(checkLetter(e.key)){
            if(!checkPulse(e.key)){
                // console.log('Estamos entrando al if');
                span__letrasUsadas.textContent = letrasUsadas;
                if(checkPalabraAdivinar(e.key)){
                    span__palabraOculta.textContent = palabraOculta.join('');
                }else{
                    vidas--
                    spanVidas.textContent = 'Vidas: ' + vidas;
                    document.getElementById('patibulo').src = rutas[vidas];

                }
            }   
        }else{
            alert('La letra pulsada no corresponde a ninguna comprendida entre la a y la z minuscula')
        }

        
    }
 
    if(checkWin()){
        document.getElementById('patibulo').src = './assets/img/felicidades.png';
        gameON = false;
        buttonComenzar.disabled = false;
        emptySpan();
        emptyVariables();
        console.log(span__palabraOculta.textContent);
        console.log(span__letrasUsadas.textContent);
        console.log(palabraOculta);
        console.log(palabraAdivinar);
    }

    if(loose()){
        document.getElementById('patibulo').src = './assets/img/loose.png';
        gameON = false;
        buttonComenzar.disabled = false;
        emptySpan();
        emptyVariables();
    }
})


buttonTerminar.addEventListener('click', () => {
    document.getElementById('patibulo').src = './assets/img/loose.png';
    gameON = false;
    buttonComenzar.disabled = false;
    emptySpan();
    emptyVariables();
})






// Funciones

// Funcion igualando la palabra oculta y la adivinar con los espacios y los guiones
function asignarGuiones(){
    for(let i = 0; i < palabraAdivinar.length; i++){
        palabraOculta[i]= '_ ';
    
    }
    span__palabraOculta.textContent = palabraOculta.join('');
}

//Vaciar los span
function emptySpan(){
    span__palabraOculta.textContent = ' ';
    span__letrasUsadas.textContent = ' ';
    spanVidas.textContent = ' ';
}

// Numero random y asignacion de palabra del array
function randomWord(){
    let randomNumber = Math.floor(Math.random()*palabras.length);
    palabraAdivinar = [...palabras[randomNumber]];
    console.log(palabraAdivinar.join(''));
}

// Funcion para chequear que la letra pulsada este comprendida entre la y la z minuscula
// del 97 al 122 incluido
const checkLetter = (letra) => {
    if(letra.charCodeAt(0) >= 97 && letra.charCodeAt(0)<=122){
        return true;
    }else{
        return false;
    } 
}

// Funcion para chequear que la letra pulsada no haya sido pulsada ya
const checkPulse = (letra) => {
    for(let i = 0; i < letrasUsadas.length; i++){
        if(letra == letrasUsadas[i]){
            alert('Esta letra ya la tenemos')
            return true
        }
    }
    letrasUsadas.push(letra);
    return false
}

// Funcion para chequear si la tecla oprimida se encuentra dentro de la palabra a adivinar
const checkPalabraAdivinar = (letra) => {
    for(let i = 0; i < palabraAdivinar.length;i++){
        if(letra == palabraAdivinar[i]){
            palabraOculta[i] = letra + ' ';  
            return true
        }
    }
    return false
}

// Comprobar si ganamos
const checkWin = () => {
    let palabraTemp = palabraOculta.join('');

    palabraTemp = palabraTemp.replace(/(\ )/gm,"");
    if(palabraTemp == palabraAdivinar.join('')){
        return true
    }
    return false
}

// Vaciar todas las variables
function emptyVariables(){
    /*
    while(palabraOculta.length>0){
        palabraOculta.pop();
    }*/
    palabraAdivinar = '';
    palabraOculta.length = 0;
    letrasUsadas.length = 0;
}

// Funcion comprobar si perdimos
function loose(){
    if (vidas == 0){
        return true;
    } 
}



