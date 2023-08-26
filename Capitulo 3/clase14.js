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
const INCREMENTAR_PESO = 0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTAR_PESO
const adelgazar = persona => persona.peso -= INCREMENTAR_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = ()=> Math.random() < 0.4

const META = daniel.peso - 3
var dias = 0

while (daniel.peso > META){
    //va detener cada vez que encuentre esto
    //debugger
    if(comeMucho()){
        aumentarDePeso(daniel)
        //aumentarDePeso
    }
    if (realizaDeporte()){
        adelgazar(daniel)
    }
    dias += 1
}
console.log(`Pasaron ${dias} dias hasta que ${daniel.nombre} adelgazo 3kg`)