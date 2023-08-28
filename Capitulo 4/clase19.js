var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.78,
    cantidadDeLibros: 95
}

var juana = {
    nombre: 'Juana',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 96
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 98
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 99
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 90
}

var daniel = {
    nombre: 'Daniel',
    apellido: 'Escobar',
    altura: 1.73,
    cantidadDeLibros: 110
}

//const esAlta =(persona) => persona.altura > 1.8
const esAlta = ({altura}) => altura >1.8
//arrays
var personas = [daniel, alan, martin, dario, vicky, juana, paula]

var personasAltas = personas.filter(esAlta)

/*var personasAltas = personas.filter(function (persona){
    return persona.altura > 1.8
})*/
const pasarAlturaCms = persona  => ({
    //persona.altura *=100
        ...persona,
        altura: persona.altura * 100
    
})

var personasCms = personas.map(pasarAlturaCms)

// var acum = 0

// for (var i = 0; i< personas.length; i++){
//     acum = acum + personas[i].cantidadDeLibros
// }
//console.log(`En total todos tienen ${acum} libros`)
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)
console.log(`En total todos tienen ${totalDeLibros} libros`)
