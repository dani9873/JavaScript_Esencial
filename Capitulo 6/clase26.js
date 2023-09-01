class Persona{
    constructor(nombre,apellido,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.altura=altura
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn){
            fn(this.nombre,this.apellido,false)
        }
    }
s
    soyAlto(){
        return this.altura>1.8
    }
}


class Desarrollador extends Persona {
    
    constructor (nombre,apellido,altura){
    super(nombre,apellido,altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
        if (fn){
            fn(this.nombre,this.apellido,true)
        }
    }
}


function responderSaludo(nombre, apellido,esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log('Eres desarrollador !')
    }
}



var daniel = new Persona('Daniel', 'Escobar', 1.73)
var erika = new Desarrollador('Erika', 'Luna', 1.85)

daniel.saludar()
daniel.saludar(responderSaludo)
erika.saludar(responderSaludo)