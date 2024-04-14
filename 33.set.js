//son como arrays pero no nos permiten repetir datos

let mochila = new Set(['linterna', 'libro','cuchillo', 'lata sardinas'])

console.log(mochila.has('cuchillo'))

//eliminar elementos del set

mochila.delete('libro')

console.log(mochila)

//añadimos elementos al set
mochila.add('fruta')
console.log(mochila)

//tamaño del set
console.log(mochila.size)


//convertir el set en un array
const mochilaArray =[...mochila]
console.log(mochilaArray)