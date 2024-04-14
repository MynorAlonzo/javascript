//BREAK, CONTINUE,  RETURN
const animales = ['perro',
                    'ardilla',
                    'buho',
                    'cobra',
                    'murcielago',
                    'pato',
                    'oso',
                    'vaca']


for(let i=0; i< animales.length; i++){

    if(i ===5){
        continue;
    }
        console.log(animales[i])
    
}



function saludo(nombre){
    return   `Hola que tal ${nombre}`
  
}


console.log(saludo('Mynor').length)