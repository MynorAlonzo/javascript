//var, let y const

//variable: Guardar un espacio en memoria

//declaracion de la variable
let mascota1;

//inicializacion de la variable
mascota1 = "perro";

//declaracion e inicializacion de una variable
let mascota2 = "perro";

console.log(mascota1);

mascota1 = "gato";
console.log(mascota1);

//REGLAS DE LAS VARIABLES
//1. LET no me permite declarar la variable
//   con el mismo nombre
//2. LET permite declarar la variable y no inicializarla
//   y mas tarde en cualquier lugar del codigo volver inicializarla

//1. var me permite declarar otra variable con el mismo nombre
//2. var me permite declararla pero no inicializarla
// 3. const no deja declarar una variable sin inicializarla
var nombre = "Mynor"

console.log(nombre)

var nombre = "Daniel"

console.log(nombre)


//variable undefined i variable null

let pez;

console.log(pez)

function saltar(){
    let tiburon = "blanco"
}
//console.log(tiburon)

//Estado Inicial
let encendido = null
console.log(encendido)

//const

const perro = "lucas";

console.log(perro)