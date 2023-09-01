class Persona{
    constructor(nombre,apellido,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    
    constructor (nombre,apellido,altura){
    super(nombre,apellido,altura)
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

var daniel = new Persona('Daniel', 'Escobar', 1.73)
var erika = new Desarrollador('Erika', 'Luna', 1.85)
