function Persona(nombre, apellido, altura) {
    //console.log('Me ejecutaron')
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `)
}

Persona.prototype.soyAlto = function () { 
    return this.altura > 1.8}

var daniel = new Persona('Daniel', 'Escobar', 1.73)
var erika = new Persona('Erika', 'Luna', 1.85)
var arturo = new Persona('Arturo', 'Martinez',1.90)
daniel.soyAlto()
daniel.saludar() //Hola me llamo Daniel