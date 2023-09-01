const API_URL='https://swapi.dev/api/'
const PEOPLE_URL='people/:id'
//const lukeUrl= `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts=({crossDomain:true})

//Solo se ejecuta si el request es exitoso
const onPeopleResponse = function (persona){
    console.log(`Hola yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,onPeopleResponse)
}
//Los request no llegan en el orden que los pedimos
obtenerPersonaje(1)
obtenerPersonaje(3)
obtenerPersonaje(6)
obtenerPersonaje(3)
