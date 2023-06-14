// Declaracion de variables asociadas a elementos
let palabrasArray = ['pepe', 'maria'];
const ingresarPalabra = document.getElementById('button__ingresar-palabra');
const ingresarOracion = document.getElementById('button__ingresar-oracion')
const agregarPalabra = document.getElementById('agregar__palabra')
const agregarOracion = document.getElementById('agregar__oracion')
const buttonGuardarPalabra = document.getElementById('button__guardar-palabra')
const inputGuardarPalabra = document.getElementById('input__guardar-palabra')
const buttonInicio = document.getElementById('button__inicio');

buttonInicio.addEventListener('click', () => {
    window.location.href = "index.html";    
})


//Aqui mostramos la entrada de datos dependiendo del boton 
ingresarPalabra.addEventListener('click', () => {
    agregarPalabra.classList.toggle('ocultar')
})
ingresarOracion.addEventListener('click', () => {
    agregarOracion.classList.toggle('ocultar')
})



// Funcion para guardar una palabra en el array
buttonGuardarPalabra.addEventListener('click', () => {
    palabrasArray.push(inputGuardarPalabra.value)
    console.log(palabrasArray)
})



// Funcion guardar y leer del local storage
if (localStorage === ""){
    var palabras = ['pepe', 'maria'];
    localStorage.setItem(palabras,JSON.stringify(palabras))
}

/*
palabras.splice(0,palabras.length)
console.log(palabras)

let palabrasTemp = localStorage.getItem('palabras');

palabrasTemp = JSON.parse(palabrasTemp)

for (let i = 0; i < palabrasTemp.length; i++){
    palabras.push(palabrasTemp[i])
}

*/