const botonGrabar = document.getElementById('botonGrabar');
const botonParar = document.getElementById('botonParar');
let Reconocimiento = window.webkitSpeechRecognition || window.SpeechRecognition;
let recognition = new Reconocimiento();
recognition.lang = "es-Es";
recognition.continuous = true;

//RESULTADOS EN PANTALLA
const body = document.querySelector('body');
let color;

const dibujaPantalla = function (frase) {
    //pintamos segun color
    if (frase == "rojo") color = "red";
    if (frase == "verde") color = "green";
    if (frase == "amarillo") color = "yellow";
    if (frase == "morado") color = "purple"
    if (frase == "azul") color = "blue";
    if (frase == "negro") color = "black";
    localStorage.setItem('colorActual', color);
    body.style.backgroundColor = color;
    body.style.backgroundColor = window.innerWidth;
    body.style.backgroundColor = window.innerHeight;
}

//PERSISTENCIA DE DATOS EN LOCALSTORAGE

window.addEventListener('DOMContentLoaded', () => {
    colorGuardado = localStorage.getItem('colorActual');
    body.style.backgroundColor = colorGuardado;
    body.style.width = window.innerWidth;
    body.style.height = window.innerHeight;
})

//EVENTO

recognition.onstart = function () {
    console.log("Microfono funciona perfectamente")
}
recognition.onresult = function (event) {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript
    dibujaPantalla(frase)
}

botonGrabar.addEventListener('click', () => {
    recognition.start()
})

botonParar.addEventListener('click', () => {
    recognition.abort()
})