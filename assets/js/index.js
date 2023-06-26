
// Declaracion de las rutas de las imagenes del muñeco
const rutas = [
    './assets/img/patibulo0.png',
    './assets/img/patibulo1.png',
    './assets/img/patibulo2.png',
    './assets/img/patibulo3.png',
    './assets/img/patibulo4.png',
    './assets/img/patibulo5.png', 
    './assets/img/patibulo6.png',
    './assets/img/patibulo7.png',
    './assets/img/patibulo8.png'
];

const palabras =  [
    'naruto',
    'sakura',
    'sasuke',
    'kakashi',
    'jiraiya',
    'orochimaru',
    'tsunade',
    'hashirama',
    'tobirama',
    'sarutobi',
    'minato'
];
let vidas = 8;
let aciertos = 0;
let palabra = ''
let letra = '';

const jugar = id('jugar')
const imagen = id('imagen');
const agregar = id('agregar');

jugar.addEventListener('click', iniciar);
agregar.addEventListener('click', agregarPalabra);


function iniciar(){
    reset();
    imagen.src = rutas[vidas];
    console.log(imagen.src);
    
    palabra = palabras[randomNumber()];
    let guessWord = id('palabra-a-adivinar')
    
    for(let i = 0; i < palabra.length; i++){
        let span = document.createElement('span');
        guessWord.appendChild(span);
    }
    
    console.log(palabra); 
}

const btn_letras = document.querySelectorAll('#letras button');
for(let i = 0 ; i < btn_letras.length; i++){
    btn_letras[i].addEventListener('click', clickLetras);
}

function clickLetras(event){
    letra = event.target.innerHTML;
    const spans = document.querySelectorAll('#palabra-a-adivinar span');
    let bol = false;
    const button = event.target;
    button.disabled = true;
    
    // Chequeamos si existe la letra dentro de la palabra
    for(let i = 0 ; i < palabra.length; i++){
        if(letra == palabra[i]){
            spans[i].innerHTML = letra;
            aciertos++
            console.log(aciertos);
            bol = true;
        }
    }

    if(!bol){
        vidas--
        imagen.src = rutas[vidas];
        console.log('Tienes ' + vidas + ' vidas');
    }

    win()      
    console.log(letra);
}


function agregarPalabra(){
    let newPalabra = prompt('Introduzca una nueva palabra').toLowerCase();
    newPalabra = newPalabra.split(' ')[0];
    palabras.push(newPalabra)
    console.log(palabras);
}



