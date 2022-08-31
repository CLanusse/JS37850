
// fetch('./data.json')
//     .then((resp) => resp.json())
//     .then((data) => {
//         // renderizar etc.
//         console.log(data)
//     })

// const { default: Swal } = require("sweetalert2")
// // const { Swal } = require("sweetalert2")



// https://pokeapi.co/api/v2/pokemon/{id or name}/

// const url = "https://pokeapi.co/api/v2/pokemon/1"

const pokemonContainer = document.querySelector('#pokemon')
const btnSiguiente = document.querySelector('#btnSiguiente')
const btnAnterior = document.querySelector('#btnAnterior')

const pedirPokemon = (query) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then((resp) => resp.json())
        .then((pokemon) => {
            console.log(pokemon)
    
            pokemonContainer.innerHTML = `
                            <h3>${pokemon.name}</h3>
                            <img src=${pokemon.sprites.front_default} alt=${pokemon.name}/>
                    `
        })
        .catch((err) => {
            // Swal.fire({
            //     title: 'Error',
            //     icon: 'error'
            // })
        })
}

let id = 1

btnSiguiente.addEventListener('click', () => {
    id++
    pedirPokemon(id)
})

btnAnterior.addEventListener('click', () => {
    if (id === 1) { return }
    id--
    pedirPokemon(id)
})

const form = document.querySelector('#form-busqueda')
const inputBusqueda = document.querySelector('#busqueda')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const busqueda = inputBusqueda.value

    pedirPokemon(busqueda)
})

pedirPokemon(id)