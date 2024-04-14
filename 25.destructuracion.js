//Destructurando objetos

const mascotas={
    raza:'salchicha',
    color:'pardo',
    edad: 3,
    propietario:'Mynor Alonzo'
}

const {raza, color, edad, propietario}= mascotas

console.log(propietario)

//destructurando arrays

const camareras=['Juanita','Carla','Sofia','Alejandra','Gabriela']

const [Juanita, Carla, Sofia, Alejandra, Gabriela]= camareras

console.log(Gabriela)
console.log(camareras[2])