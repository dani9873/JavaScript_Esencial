var daniel = {
    nombre: 'Daniel', // clave y valor
    apellido: 'Escobar',
    edad: 23
}

var dario ={
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}
function imprimirNombreEnMayusculas({ nombre }/*2. persona*/){
    //var nombre = persona.nombre.toUpperCase()
    //console.log(nombre)

    //2. console.log(persona.nombre.toUpperCase())
    console.log(nombre.toUpperCase())
}

//imprimirNombreEnMayusculas(daniel.nombre)
//imprimirNombreEnMayusculas(dario.nombre)
imprimirNombreEnMayusculas(daniel)
imprimirNombreEnMayusculas(dario)

//imprimirNombreEnMayusculas({nombre: 'Pepito'})
imprimirNombreEnMayusculas({apellido: 'Gomez'})
imprimirNombreEnMayusculas()
