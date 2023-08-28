var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.78
}

var juana = {
    nombre: 'Juana',
    apellido: 'Juarez',
    altura: 1.71
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var daniel = {
    nombre: 'Daniel',
    apellido: 'Escobar',
    altura: 1.73
}
//arrays
var personas = [daniel, alan, martin, dario, vicky, juana, paula]

for (var i =0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}