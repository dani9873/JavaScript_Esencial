const API_URL='https://swapi.dev/api/'
const PEOPLE_URL='people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = (lukeUrl,{crossDomain:true})

//Solo se ejecuta si el request es exitoso
const onPeopleResponse = function (persona){
    console.log(`Hola yo soy ${persona.name}`)
}


$.get(lukeUrl,opts,onPeopleResponse)