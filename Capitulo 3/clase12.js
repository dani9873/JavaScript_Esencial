var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true, 
    cocinero:false,
    cantante: true, 
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Escobar',
    edad: 17
}
function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    if (persona.ingeniero){
        console.log(`Ingeniero`)   
    }
    else{
        console.log('No es un ingeniero')
    }
    if (persona.cocinero){
        console.log(`Cocinero`)   
    }
    if (persona.cantante){
        console.log(`Cantante`)   
    }
    if (persona.dj){
        console.log(`Dj`)   
    }
    if (persona.guitarrista){
        console.log(`Guitarrista`)   
    }
    if (persona.drone){
        console.log(`Vuela drone`)   
    }
}

imprimirProfesiones(sacha)
//para indicar que es CONSTANTE
//var mayoriaDeEdad = 18
const MAYORIA_DE_EDAD = 18
const MINORIA_DE_EDAD = 17

//Asignar una variable a una funcion
//const esMayorDeEdad = function (persona){
//    return persona.edad >= MAYORIA_DE_EDAD
//}
//const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(juan)

/*function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}*/
const esMenorDeEdad = ({edad}) => edad <= MINORIA_DE_EDAD

function permitirAcceso(persona){
    if(esMenorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}