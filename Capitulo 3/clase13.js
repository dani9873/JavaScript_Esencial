var daniel = {
    nombre: 'Daniel',
    apellido: 'Escobar',
    edad: 23,
    peso:75
}
console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso} kg`)

/*function aumentarDePeso (persona){
    return persona.peso += 200
}*/
const INCREMENTAR_PESO = 0.2
const DIAS_DEL_AÑO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTAR_PESO
const adelgazar = persona => persona.peso -= INCREMENTAR_PESO

for (var i  = 1; i <= DIAS_DEL_AÑO; i++){
    var random = Math.random()
    if (random < 0.25){
        //aumenta de peso
        aumentarDePeso(daniel)
    }else if(random < 0.5){
        //adegazar
        adelgazar(daniel)
    }
}

console.log(`Al final del año ${daniel.nombre} pesa ${daniel.peso.toFixed(1)} kg`)
