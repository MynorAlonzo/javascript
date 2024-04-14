const cafeteria ={
    nombre: 'los pinos',
    actividades(juego){
        console.log(`soy ${this.nombre} y estamos jugando al ${juego}`)
    }
}


const persona={
    nombre: 'emilio'
}


//call (acceder al contexto de otro objeto)
let accederCall = cafeteria.actividades.call(persona,'Billar')

//apply( acceder al ontexto de otro objeto)
let accederAplly= cafeteria.actividades.apply(persona,['poker'])

//bind(retorna una nueva funcion con el nuevo contexto)

const jugar= cafeteria.actividades.bind(persona)
jugar('futbolin')
jugar('ajedrez')