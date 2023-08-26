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
function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
function imprimirSiEsMayorDeEdad(persona){
    //Sacha es mayor de edad
    //Sacha es menor de edad
    /*console.log(`${persona.nombre} es `)
    if (persona.edad >=18){
        console.log(`mayor de edad`)   
    }
    else{
        console.log('menor de edad')
    }*/
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(juan)