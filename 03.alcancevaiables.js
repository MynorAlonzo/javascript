//Ambito superglobal
//Tenemos acceso desde cualquier archivo

//Ambito Global
//tenemos acceso desde cualquier lado del archivo

//Var
var perro = "lucas"
console.log(perro)

//LET
let pez ="tiburon"
console.log(pez)
//Ambito Local
//tenemos acceso desde el contexto que engloba la funcion

//VAR 
function saltar(){
    var gato = "felino"
    console.log(gato)
}
saltar()

//LET
function gritar(){
    let dinosaurio = "era antigua"
    console.log(dinosaurio)
}
gritar()

//Ambito de bloque
//es el contexto que esta englobado dentro de un
//bucle o un condicional un if

//VAR
var nombre = "Maria"
if(nombre==="Maria"){
    var apellido= "gonzalez"
    console.log(apellido)
}

console.log(apellido)


//LET
let nombre1 = "Marta"
if(nombre1==="Marta"){
    let apellido1= "gomez"
    console.log(apellido1)
}

//CONST se comporta igual que LET