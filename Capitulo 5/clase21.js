function Persona(nombre, apellido) {
    //console.log('Me ejecutaron')
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `)
}

Persona.prototype.soyAlto = function () {
    if (this.altura > 1.8) {
        console.log(`Si eres alto, mides ${this.altura}`)
    } else {
        console.log(`No eres suficientemente alto`)
    }

}

var daniel = new Persona('Daniel', 'Escobar', 1.73)
var erika = new Persona('Erika', 'Luna', 1.85)
var arturo = new Persona('Arturo', 'Martinez',1.90)
daniel.saludar() //Hola me llamo Daniel