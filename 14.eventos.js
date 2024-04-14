/*
onblur() : Se pierde el foco
onchange() : Al modificar el valor del componente.
onbeforeunload() : se lanza al intentar cerrar una ventana
onclick() : al hacer clic en un elemento
ondblclick() : al hacer doble click
onerror() : si se produce un error al cargar la pagina web o una pestaña
onfocus() : cuando un componente obtiene el foco
onkeydown() : al pulsar cualquier tecla
onkeypress() : al pulsar una tecla correspondiente a un caracter
onkeyup() : al levantar cualquer tecla
onload() : se produce al terminar de cargarse la pagina web o una pestaña
onmousedown() : al presionar un boton del raton
onmousemove() : se ha movido el raton
onmouseout() : el cursor del raton sale del area acupada por un
onmouseover() : el cursor del raton entra en el area ocupada por
onmouseup() : al dejar de presionar un boton del raton
onresize() : al redimensionar una ventana o frame
onselect() : cuando se selecciona un texto
onunload() : al salir de la pagina web


*/


const cuerpo = document.querySelector('body')
const formulario = document.querySelector('#formulario')
const boton = document.querySelector('button')
function pulsar(){
    alert('Haz pulsado correctamente')
}


window.addEventListener('resize', function e(){
    cuerpo.style.backgroundColor = 'green';
    cuerpo.style.width = '100%';
    cuerpo.style.height = '1000px'
})


formulario.addEventListener('focus',(e)=>{
    formulario.style.backgroundColor = 'red'
}) 
formulario.addEventListener('blur',(e)=>{
    formulario.style.backgroundColor = 'black'
}) 

boton.addEventListener('click', (e)=>{
    formulario.style.backgroundColor = 'blue'
})


formulario.addEventListener('change', (e)=>{
    formulario.style.backgroundColor = 'green'
})