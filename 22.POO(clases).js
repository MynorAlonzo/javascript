class Automovil {
    constructor(marca, modelo, fechaLanzamiento, combustible, color) {
        this.marca = marca
        this.modelo = modelo
        this.fechaLanzamiento = fechaLanzamiento
        this.combustible = combustible
        this.color = color
    }

    //getter
    get getColor() {
        return this.color
    }

    //setter
    set setColor(color) {
        this.color = color
    }

    //Metodos
    velocidad(velocidad) {
        if (velocidad > 200) {
            return 'Ya no debes acelerar mas esto es el maximo ¡¡¡Peligro!!!'
        } else {
            return `Para alcanzar tu velocidad maxima faltan ${200 - velocidad}KM/h`
        }
    }

    //Metodos estaticos
    static ruedas() {
        return 'tengo las ruedas de serie'
    }
}


//instancia de clases
const coche = new Automovil('mazda', 'protege', 2000, 'gasolina', 'verde')

console.log(coche)

//con Set cambiamos el color
coche.setColor = 'azul'
console.log(coche)

//con Get mostramos el color
console.log(coche.getColor)

console.log(coche.velocidad(100))

console.log(Automovil.ruedas())



//Herencia
//constructor de clase heredada primero 
//ponemos las caracteristicas propias
//y luego lo que heredo

//en el super solo lo que heredamos

class Nautica extends Automovil {
    constructor(marca, modelo,materialCasco, tipoMotor){
    super(marca, modelo)
    this.materialCasco = materialCasco
    this.tipoMotor = tipoMotor
}}

//Instancia de Nautica

const titanic = new Nautica('metal','carbon','titanic','titanicModel')

console.log(titanic)