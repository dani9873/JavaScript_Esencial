const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
//const lukeUrl= `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = ({ crossDomain: true })

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, callback).fail(function () {
        console.log(`Sucedio un error. No se puedo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)
                    })
                })
            })
        })
    })
})


