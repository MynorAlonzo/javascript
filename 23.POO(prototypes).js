function Tiburon(nombre,cientifico){
    this.nombre=nombre
    this.cientifico=cientifico
}

//Metodos

Tiburon.prototype.atacar=function(){
    console.log('cuidado fuera del agua')
}


//instancia de tiburon

const tintorera= new Tiburon('tintorera','prionace glauca')

console.log(tintorera.atacar())


//Herencia en los prototipos

function TiburonToro(nombre,peligrocidad){
    this.super=Tiburon
    this.super(nombre)
    this.peligrocidad=peligrocidad
}


//instancia de tiburon toro

const costero= TiburonToro.prototype= new Tiburon()
TiburonToro.prototype.constructor=Tiburon

//sobreescritura de metodos
TiburonToro.prototype.atacar= function(){
    console.log('cuidado fuera del agua, toro en las procimidades')
}

//metodos
Tiburon.prototype.mutilar=function(porciento){
    console.log(`${porciento}% de Riesgo de amputacion si se produce un ataque`)
}


costero.atacar()
costero.mutilar(25)