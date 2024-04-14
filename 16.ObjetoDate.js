let time = new Date()

//dia del mes en numero
console.log(time.getDate())
//el dia de la semana
console.log(time.getDay())
//numero de mes
console.log(time.getMonth())
//año en numero
console.log(time.getFullYear())
//hora actual en primer parametro de la hora
console.log(time.getHours())
//minutos actuales
console.log(time.getMinutes())
//segundos actuales
console.log(time.getSeconds())
//  coge los milisegundos
console.log(time.getMilliseconds())

//fecha en formato string //
console.log(time.toString())
//fecha en string wed jun 02 2021
console.log(time.toDateString())
//fecha local en formato string
console.log(time.toLocaleString())
//convierte time a string la hora usando la actual especificacion local
console.log(time.toLocaleTimeString())
//convierte time a string usando la especificacion local pero la fecha
console.log(time.toLocaleDateString())
//coge la diferencia en minutos entre el tiempo local de la computadora
//y lascoordenadas universakes(UTC)
console.log(time.getTimezoneOffset()) 

//coge el dia del mes usando las coordenadas universales (UTC)
console.log(time.getUTCDate())
//coge las horas valor en un objeto time usando
//las cooordenadas del tiempo
console.log(time.getUTCHours())

const hora = document.createElement('h1')
document.body.appendChild(hora)
hora.textContent = 'La fecha de hoy es '+time.toLocaleDateString()