const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
//const lukeUrl= `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = ({ crossDomain: true })


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function (persona) {
        console.log(`Hola yo soy ${persona.name}`)
        if (callback) {
            callback()
        }
    })
}
//Obtenemos lo personajes en este orden
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function (){
                    obtenerPersonaje(6)
                })
            })
        })
    })
})


