
const btnUsuario = document.querySelector('#user-btn')
const btnLogout = document.querySelector('#logout-btn')
const titleUsuario = document.querySelector('#bienvenida')

let usuario = localStorage.getItem('usuario')

const pedirUsuario = () => {
    usuario = prompt('Ingrese su nombre')
    localStorage.setItem('usuario', usuario)
}

if (!usuario) {
    pedirUsuario()
}

titleUsuario.innerText = `Bienvenido ${usuario}`

btnUsuario.addEventListener('click', () => {
    pedirUsuario()
    titleUsuario.innerText = `Bienvenido ${usuario}`
})

btnLogout.addEventListener('click', () => {
    localStorage.removeItem('usuario')
    usuario = ''
    titleUsuario.innerText = `Bienvenido ${usuario}`
})

// localStorage.setItem("usuario", "Conrado")
// sessionStorage.setItem('usuario', 'Ferran')

// console.log( localStorage.getItem('dark') )

// localStorage.setItem('numero', 123456)
// console.log( localStorage.getItem('numero') )


const producto = {
    id: 1,
    nombre: 'Producto 1',
    precio: 5500
}

// console.log(producto)
// console.log( JSON.stringify(producto) )

// const productoJSON = JSON.stringify(producto)
// localStorage.setItem('producto', productoJSON)

localStorage.setItem('producto', JSON.stringify(producto) )

// console.log( producto.toString() )
// console.log( localStorage.getItem('producto') )


/// ======== EJEMPLO APLICADO ==========

const inputNombre = document.querySelector('#input-nombre')
const inputRol = document.querySelector('#input-rol')
const btnGuardar = document.querySelector('#btn-guardar')

let usuarios = []

const usuariosEnLS = JSON.parse( localStorage.getItem('usuarios') )

if (usuariosEnLS) {
    usuarios = usuariosEnLS
}
// console.log(usuariosEnLS)

const guardarUsuario = () => {
    const valueNombre = inputNombre.value
    const valueRol = inputRol.value

    usuarios.push({
        nombre: valueNombre,
        rol: valueRol
    })

    localStorage.setItem('usuarios', JSON.stringify(usuarios) )

    console.log(usuarios)

    inputNombre.value = ''
    inputRol.value = ''
}

btnGuardar.addEventListener('click', guardarUsuario)
