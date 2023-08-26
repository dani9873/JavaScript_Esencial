var nombre = 'Daniel'

function ImprimirNombreEnMayusaculas(nombre){
    //window.nombre para aceder a la variable global en el navegador
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

ImprimirNombreEnMayusaculas(nombre)
