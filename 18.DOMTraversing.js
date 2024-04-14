//DOM TRAVERSING 

//Tipos de nodos
//1. Elementos
//2.Atributos
//3.Text Nodes
//8.Comentarios
//9.Documentos
//10.DocType

const lista = document.querySelector('#lista')
console.log(lista.children)

//DOM Traversing (de hijos a padres)
//usamos el parentElement

console.log(lista.parentElement)


//DOM TRAVERSING (entre hermanos)

console.log(lista.previousSibling.previousSibling)
console.log(lista.nextSibling)

