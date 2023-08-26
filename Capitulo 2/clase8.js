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
function imprimirNombreEnMayusculas(persona){
    var {nombre} = persona// lo anterior es igual a var nombre = persona.nombre 

    //2. console.log(persona.nombre.toUpperCase())
    console.log(nombre.toUpperCase())
}

//imprimirNombreEnMayusculas(daniel.nombre)
//imprimirNombreEnMayusculas(dario.nombre)
imprimirNombreEnMayusculas(daniel)
imprimirNombreEnMayusculas(dario)

//imprimirNombreEnMayusculas({nombre: 'Pepito'})

function imprimirNombreYEdad({nombre, edad}){
    //Hola, me llamo Sacha y tengo 28 años
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(daniel)


function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad+1
    }
}