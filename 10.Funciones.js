//Funciones declarativas****************************

function saludo(saludo){
    document.write(saludo)
    console.log(saludo)
}

saludo('hola')
//En las funciones declaradas existe el
//efecto hoisting o elevacion por ello nos
//llamar a la funcion antes de escribir esta
nombreCompleto('Mynor','Alonzo')
function nombreCompleto(nombre,apellido){
    document.write(`mi nombre es ${nombre.fontcolor('red')} ${apellido}`)
}

//Funciones expresadas****************************
//no existe el efecto hoisting o elevacion
//por lo que debo de llamar a la funcion
//despues de escribirla y no antes
const saltar = function(){
 console.log('estoy saltando')
}

saltar()

//Funciones flecha****************************
 const suma=(numero1, numero2)=> console.log(numero1+numero2)

 suma(9,3)

//Funciones autoejecutables y *****************
//anonimas autoejecutables************

//funcion clasica autoejecutable
const saludo2=(function(){
    console.log('buenas noches')
})()


//Funcion moderna autoejecutable

const saludo3=(()=>{
    console.log('buenos dias')
})()


//funcion clasica anonima autoejecutable
//tienen que ir al princio del codigo
/*(function(){

    console.log('buenas tardes')
})()*/

//funcion moderna anonima autoejecutable
 /*
(()=>{
    console.log('buen dia')
})()*/