//Operadores de comparacion

//1. <  menor que

//2. > mayor que 
//3. >= mayor o igual que 
//4. <= menor o igual que
//5. == igual que (igual valor)
//6. === estrictamente igual que (igual el valor y tipo de dato)
//7. != diferente que (diferente valor)
//8. !== estrictamente diferente que (distinto valor y tipo de dato)


let edadMaria =37
let edadJose ='37'

if(edadMaria === edadJose){
    console.log('tenemos la misma edad')
}else{
    console.log('no tenemos la misma edad')
}
console.log(5!=="5")


//operadores aritmeticos 
console.log(5+3) //suma
console.log(8-3) //resta
console.log(5*3)  //multiplicacion
console.log(8/2)  //division
console.log(10%2) //modulo o resto


//Operadores logicos

//! no operador de negacion
let carro ='azul'
if(!carro){
    console.log(`el carro es de color ${carro}`)
}else {
    console.log('el carro no tiene color')
}
//&& operador and o y
let nombreMujer = "Carla"
let edadMujer = '27'
let estadoMujer = 'soltera'
let isMujer =  true

if(nombreMujer == "Carla" && edadMujer == '28'){
    console.log('se cumple la condicion')
}else{
    console.log('no se cumple la condicion')
}
//|| operador or o o

if(nombreMujer == "Carlos" || isMujer == false){
    console.log('se cumple la condicion')
}else{
    console.log('no se cumple la condicion')
}

