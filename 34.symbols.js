//Es un dato primitivo que nos permite 
//crear identificadores unicos y evitar coliciones

let nombre1 = Symbol('nombre')
let nombre2 = Symbol('nombre')

console.log(nombre1===nombre2)

let objeto = {
    [nombre1]: 'peter'
}

objeto.nombre1 = 'antonio'
console.log(objeto[nombre1])

objeto[nombre1]='Luis'
console.log(objeto[nombre1])