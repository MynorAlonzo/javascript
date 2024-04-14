let frase = "Mi perro es un pastor aleman y es bueno"
let frase2 = ", y es muy inteligente"

//ANCHOR: Nos devuelve el texto envuelto en un enlace a

console.log(frase.anchor())

//BIG: Bis devuelve el texto en un formato mas grande

document.write(frase.big())

//BOLD: nos devuelve el texto en negrita

document.write(frase.bold())

//CHARAT: nos da el caracter que coincida 
// con el numero que le pasemos por el argumento

document.write(frase.charAt(6))



//CHARCODEAT: Nos devuelve el unicode que 
//coincida con  el numero que le pasemos por el 
//argumento

document.write(frase.charCodeAt(3))


//CONCAT: nos concatena o une un string al que ya tenemos
//y tambien nos permite pasar una variable

document.write(frase.concat(" y es muy fuerte" + frase2))


//ENDSWITH: nos dice si el string acaba en el conjunto
// de caracteres o caracter que le indiquemos

document.write(frase.endsWith('aleman'))


//FONTCOLOR: nos cambia el color de texto del string

document.write(frase.fontcolor('red'))

//FONTSIZE: nos cambia el tamaño del tecto,
// pasandole un numero por el argumento

document.write(frase.fontsize(5))


//INCLUDES: nos da true o false en funcion si el
//el caracter o conjunto de caracteres que le 
//indiquemos esta incluido en el texto


document.write(frase.includes('perro'))


//INDEXOF: si existe el indice que le especifiquemos
//en el argumento nos da su posicion y si  no
//pues nos da -1

document.write(frase.indexOf('es'))


//ITALICS: nos convierte el texto en cursiva 
// o italica

document.write(frase.italics())


//LASTINDEXOF: nos va a dar la posicion del caracter
//o conjunto de caracteres que le pasemos por el argumento
//si no existeria nos dara -1

document.write(frase.lastIndexOf('es'))


//LENGTH:  nos va a dar la longitud de un
//string incluidos los espacios

document.write(frase.length)


//LINK: nos devuelve un enlace y le da
//el atributo por defecto href

document.write(frase.link('https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FPastor_alem%25C3%25A1n&psig=AOvVaw3ikN2-aWga-cDKujAFCZbW&ust=1674440991569000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODTpIeR2vwCFQAAAAAdAAAAABAD'))

//MATCH: nos devuelve la coincidencia si existiera
//o de lo contrario nos devuelve null

document.write(frase.match('escoba'))

//REPEAT: nos devuelve el string repetido
//las veces que le indiquemos

document.write(frase.repeat(3))


//REPLACE:  nos permite reemplazar una
//parte del string por otro pasandole 
//por el primer argumento los que queremos
//cambiar y por el segundo la nueva parte

document.write(frase.replace('pastor aleman','boxer'))

//SLICE: nos devuelve un porcion de cadena,
//nosotros le indiquemos entre dos numeros

document.write(frase.slice(2,8))

//SMALL: hace que el string se vea mas pequeño

document.write(frase.small())


//SPLIT: nos divide el sttringen substring
//que podemos decidir en cuantas porciones dividimos
//el string principal

document.write(frase.split(' ', 10))


//STARWIDTH: nos da true o false en funcion
// si el primer caracter empieza por la letra
//que pacemos por el argumento y hace distincion 
//entre mayusculas y minusculas

document.write(frase.startsWith('M'))


//SUB: Nos da el string como si fuera  un
//subitulo

document.write(frase.sub())

//SUBSTRING: nos devuelve una prosicion de cadena
//entre dos numeros que pasemos por argumento
//incluyendo el primero pero no el segundo

document.write(frase.substring(4,10))

//TOLOCALELOWERCASE:  convierte los caracteres en minusculas
//dentro del entorno local

document.write(frase.toLocaleLowerCase())


//TOLOCALEUPPERCASE: convierte los caracteres en mayusculas
//dentro del entorno local

document.write(frase.toLocaleUpperCase())



//TOLOWERCASE:convierte la cadena en minuscula

document.write(frase.toLowerCase())


//TOUPPERCASE: convierte la cadena a mayusculas

document.write(frase.toUpperCase())