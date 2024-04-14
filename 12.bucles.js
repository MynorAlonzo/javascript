//BUCLES
//bucles son una estructura de control de
//flujo que se van repitiendo dependiendo
//de una condicion dada

//While(mientras)

let timer = 0;


while(timer <= 20){

    timer++
    console.log('timer: '+timer)
}


//Do WHILE (haz - mientras)
//se va a ejecutar siempre 
//minimo una vez
//primero hace luego evalua

let time = 0

do{
    time++
    console.log('time:' +time)
}while(time>20)



//FOR (por)


let frutas = ['platano','naranja','sandia','melon']

for(let i=0; i<frutas.length; i++){
    console.log(frutas[i])
}


//FOR OF (por)
//Recorremos un array y nos devuelve
//los elementos

for(const fruta of frutas){
    console.log(fruta)
}


//FOR IN (por)
//Recorre un array y nos devuelve los indices

for(const fruta in frutas){
    console.log(fruta)
}

//RECORREMOS OBJETOS CON FOR IN

const mascota = {
    nombre: "Pipo",
    raza: "Pastor Aleman",
    edad: 3,
    propietario: "Luis Fernandez",
    aficciones:['Saltar','Jugar','Morder']
}

for(const propiedad in mascota){
    console.log(`key ${propiedad}- value: ${mascota[propiedad]}`)
}