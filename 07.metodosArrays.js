//METODOS DE LOS ARRAYS

const frutas=[  'platano',
                'sandia',
                'manzana',
                'pera',
                'melon',
                'uva',
                'sandia'
            ]

const verduras=[    'lechuga',
                    'pepino',
                    'tomate'

]

const empresa=[
    {
        id:0,
        nombre:"Javier",
        apellidos:"Garcia Gutierrez",
        edad:34
    },
    {
        id:1,
        nombre:"Mynor",
        apellidos:"Alonzo Ramos",
        edad:24
    },
    {
        id:2,
        nombre:"Taylor",
        apellidos:"Alonzo Hidalgo",
        edad:34
    },
    {
        id:3,
        nombre:"Jairon",
        apellidos:"perez Gutierrez",
        edad:25
    },
    {
        id:4,
        nombre:"Marta",
        apellidos:"perez Soza",
        edad:25
    },
    {
        id:5,
        nombre:"Alexis",
        apellidos:"Alonzo Hidalgo",
        edad:29
    }
]

//CONCAT : nos une dos arrays o añade
//elementos al array

console.log(frutas.concat('limon'))

//EVERY: nos obliga a que todos los elementos
//del array cumplan una determinada condicion

frutas.every(fruta=>{
    console.log(fruta=='sandia')
})

//SOME: nos devuelve elemento por elemento
//si son true o false

frutas.some(fruta=>{
    console.log(fruta==='sandia')
})

//FILTER: nos filtra el array y nos devuelve otro
//array con las condiciones que le indiquemos

frutas.filter(fruta =>{
if(fruta.length>5){
    console.log(`${fruta} tiene mas de 5 caracteres`)

}else{
    console.log(`${fruta} tiene menos de 5 caracteres`)
}
})


//FIND: nos busca las coincidencias que buscamos

frutas.find(fruta=>{
    if(fruta!=='melon'){
        console.log(fruta)
    }
})

//FOREACH: por cada elemento nos recorre array

frutas.forEach(fruta =>{
if(fruta.length>5){
    console.log(fruta)
}
})



//INCLUDE: nos da true o false en funcion so 
//existe ese elemento del array

console.log(frutas.includes('melon'))

//INDEXOF: nos devuelve un numero negativo
//si no encuentra el elemento en el array y 
//si lo encunetra nos dice la posicion que ocupa

console.log(frutas.indexOf('sandia'))

//JOIN: nos separa los elementos del array
//segun le indiquemos

console.log(frutas.join('**'))

//LASTINDEXOF: busca la ultima coincidencia 

console.log(frutas.lastIndexOf('sandia'))

//LENGTH(propiedad): mide el tamaño del array

console.log(frutas.length)

//MAP: nos itera arrays y arrays de objetos
//y nos devuelve un array

empresa.map(em=>{
    document.body.innerHTML+=`
    <ul>
    <li>
    id:${em.id}<br>
    nombre:${em.nombre}<br>
    Apellidos:${em.apellidos}<br>
    edad:${em.edad}
    </li>
    </ul>
    `
})

//POP: elimina el ultimo elemento de un array
// y nos lo devuelve en pantalla

console.log(frutas.pop())
console.log(frutas)

//PUSH: agrega al final del array el nuevo elemento 
//que le indiquemos y nos devuelve la longitud del 
//array con el nuevo elemento

console.log(frutas.push('fresa'))
console.log(frutas)

//REDUCE: reduce el array a un solo elemento
frutas.reduce(fruta=>{
    console.log(fruta)
})

//REVERSE: nos devuelve el array invertido
console.log(frutas.reverse())

//SLICE: nos devuelve los indices comprendidos
//entre el primer indice que le indiquemos y el
//segundo no incluido

console.log(frutas.slice(1,4))

//SORT: nos ordena el array alfabeticamente

console.log(frutas.sort())

//UNSHIFT: nos agrega al principio del array
//el elemento que le indiquemos

console.log(frutas.unshift('mango'))
console.log(frutas)

//SHIFT: nos elimina el primer elemento del 
//array

console.log(frutas.shift())
console.log(frutas)


//SPLICE: nos da los elementos entre dos indices
//1. ponemos desde donde queremos que empiece a contar
//2. cuantos elementos va a eliminar o a sumar
//3. y si va a sumar los que vaya a añadir

frutas.splice(0,4,'mango')
frutas.splice(0,0,'aguacate','kiwi')
console.log(frutas)


