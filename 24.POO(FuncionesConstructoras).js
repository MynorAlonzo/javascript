const automovil=function(color,marca,velocidadMax){
    this.color= color
    this.marca= marca
    this.velocidadMax = velocidadMax


this.acelerar= function(){
    console.log('estoy acelerando a tope')
}
}


const seat= new automovil('rojo','seat',200)

console.log(seat)
seat.acelerar()