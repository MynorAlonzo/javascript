//IF(si) - ELSE (y si no)

let estaFrio=true
if(estaFrio){
    console.log('me pondre la chaqueta')
}else{
    console.log('saldre en manga corta')
}

//IF  ELSE IF    ELSE 

let oferta;
let hora = 1;

if(hora>= 8 && hora <= 10){
    console.log('el cafe esta en oferta')
}else if(hora>10 && hora<=12){
    console.log('Las tostadas estan en oferta')
}else if(hora>12 && hora<=14){
    console.log('La cerveza esta en oferta')
}else if(hora>14 && hora <= 16){
    console.log('Los menus estan en oferta')
}else if(hora>16 && hora<= 23.59){
    console.log('Tenemos clases de billar en oferta')
}else{
    console.log('Tenemos masajes en oferta')
}


//CONDICIONAL TERNARIO (forma de simplificar un condicional simple)


hora>=8 && hora<=10 ? console.log('El cafe esta en oferta'): console.log('el cafe no esta en oferta')
hora>10 && hora<=12 ? console.log('Las tostadas estan en oferta'): console.log('Las tostadas no estan en oferta')
hora>12 && hora<=14 ? console.log('La cerveza esta en oferta'): console.log('La cerveza no estan en oferta')
hora>14 && hora<=16 ? console.log('Los menus estan en oferta'): console.log('los menus no estan en oferta')
hora>16 && hora<=23.59 ? console.log('Tenemos clases de billar en oferta'):console.log('No tenemos clases')
hora>0 && hora <= 8 ? console.log('tenemos masajes en oferta'):console.log('no tenempos masjes en oferta')


//SWITCH CASE

let edad = 21;

switch(edad){
    case 18:
        console.log('Eres apto para el nivel 5')
        break;
    case 19:
        console.log('Eres apto para el nivel 6')
        break;
    case 20:
        console.log('Eres apto para el nivel 7')
        break;
    case 21:
        console.log('Eres apto para el primer nivel')
        break;
    default:
        console.log('No eres apto para el puesto')
}