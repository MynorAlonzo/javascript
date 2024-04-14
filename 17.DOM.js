//Vamos a acceder al body

console.log(document.body)


//vamos a crear etiquetas desde js

let caja = document.createElement('div')
let caja2 = document.createElement('div')


//vamos a dar estilos a nuestro dif

caja.style.width ='100px'
caja.style.height = '100px'
caja.style.backgroundColor = 'green'
caja.style.borderRadius = '50%'

caja2.style.width = '100px'
caja2.style.height = '100px'
caja2.style.backgroundColor = 'blue'
caja2.style.borderRadius ='9px'
//renderizando nuestro elemento

document.body.appendChild(caja)
document.body.appendChild(caja2)

document.body.append(caja,caja2)
//diferencias entre append y appendchild
//1. appendchild no permite renderizar mas de un elemento
//2. append si permite renderizar dos o mas
//3. appendchild no permite renderizar string o cadenas
//4. append si permite meter varios elementos

//nos dice la codificacion de caracteres

console.log(document.characterSet)

//cuantos hojos tiene el documento

console.log(document.childElementCount)

//nodos hijos del documento
console.log(document.childNodes)

//para devolvernos los hijos que tiene
console.log(document.children)

//CLONAR EL DOCUMENTO
//se le pasa un boolean true o false en funcion
//de si queremos que nos clone tambien el contenido
let clonadoBody = document.body.cloneNode(true)

console.log(clonadoBody)

//como saber el tipo de contenido
console.log(document.contentType)

//creando atributos
let subtitulo = document.querySelector('#sub1')

subtitulo.setAttribute('class','tituloClase')

//seleccionar elementos
let subtitulo2 = document.querySelector('#sub2')
subtitulo2.style.color = 'red'

let subtitulo3 = document.getElementById('sub3')
subtitulo3.style.color='green'
subtitulo3.textContent='Cambio de texto'

//creando un comentario
let comentario = document.createComment('soy un comentario')

console.log(comentario)


//creando fragment

let container = document.createDocumentFragment()
document.appendChild(container)

//creando un nodo de texto desde javascript

const textNode = document.createTextNode('soy un nodo de texto')
document.body.appendChild(textNode)

//acceder a la etiqueta html/doctype
console.log(document.doctype)

//nos da el elemento html

console.log(document.documentElement)

//URI
console.log(document.documentURI)

//saber el domain o dominio
console.log(document.domain)

//primer hijo
console.log(document.firstChild)

//primer elemento hijo
console.log(document.firstElementChild)

//querySelectorAll

const enlaces = [...document.querySelectorAll('a')]
enlaces.map(enlace=>{
    enlace.style.color = 'red'
})