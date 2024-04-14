//setTimeOut

const pantalla= document.querySelector('body')


let retardo=setTimeout(()=>{
pantalla.style.backgroundColor='green'
clearTimeout(retardo)
console.log('se ha limpiado la pagina')
},10000)



//setInteval


let contador = 0
let newContador = setInterval(()=>{
contador>10 ? clearInterval(newContador): console.log(contador++)
},1000)


//window.requestAnimationFrame()

function holamundo(){
    let saludo=window.requestAnimationFrame(holamundo)
console.log('hola mundo')
saludo>1000 ? window-cancelAnimationFrame(saludo):null
}


holamundo()