
let usuario = localStorage.getItem('usuario')

document.querySelector('#bienvenida').innerText = `Bienvenido ${usuario}`



// const productoEnLS = localStorage.getItem('producto')
// const producto = JSON.parse(productoEnLS)

const producto = JSON.parse( localStorage.getItem('producto') )

console.log(producto)


// ====== EJEMPLO APLICADO ==========

const listaUsuarios = document.querySelector('#lista-usuarios')

const usuarios = JSON.parse( localStorage.getItem('usuarios') )

console.log(usuarios)

usuarios.forEach( (usuario) => {
    const li = document.createElement('li')
    li.innerHTML = `
                    <h4>Nombre: ${usuario.nombre}</h4>
                    <p>Rol: ${usuario.rol}</p>
                `
    listaUsuarios.append(li)
} )


const btnBorrar = document.querySelector('#borrar')

btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('usuarios')
    listaUsuarios.innerHTML = ''
})












// ========= ejemplo lucas


const provincias = [
    {
        id: 1,
        prov: 'Buenos Aires'
    },
    {
        id: 2,
        prov: 'Córdoba'
    },
    {
        id: 3,
        prov: 'Santa fe'
    }
]

const clickearProvincia = (event) => {
    console.log(event.target)
    const id = event.target.id

    const prov = provincias.find((prov) => prov.id === id)
}