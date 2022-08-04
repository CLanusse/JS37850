
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

// ADD EVENT LISTENER

const saludar = () => {
    console.log('Hola mundo!')
}

// btn1.addEventListener('click', saludar)

btn1.addEventListener('click', (event) => {
    console.log(event)

    console.log("Hola Mundo!")
})

btn1.addEventListener('mouseover', () => {
    btn1.classList.toggle('btn-danger')
    // btn1.classList.replace('btn-primary', 'btn-danger')
})

btn2.addEventListener('click', () => {
    btn2.innerText = ' =( '
    btn2.disabled = true
})

// OPCION 2

btn3.onclick = () => {
    console.log("Click botón 3")
}

btn3.onmouseover = () => {
    console.log("Mouse over 3")
}

// MODAL EXAMPLE

const modalContainer = document.querySelector('#modal-container')
const modal = document.querySelector('#modal')
const abrirModal = document.querySelector('#modal-open')
const cerrarModal = document.querySelector('#modal-close')

abrirModal.addEventListener('click', () => {
    modalContainer.classList.add('modal-container-active')
})

cerrarModal.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container-active')
})

modalContainer.addEventListener('click', (event) => {
    console.log(event)
    // modalContainer.classList.remove('modal-container-active')
    cerrarModal.click()
})

modal.addEventListener('click', (event) => {
    event.stopPropagation()
})

// window.addEventListener('mousemove', () => {
//     console.log('Clickeando el window')
//     // modalContainer.classList.toggle('modal-container-active')
// })

// window.addEventListener('click', (event) => {
//     console.log(event.target)
//     // console.log(event.x)
//     // console.log(event.y)
// })

// EVENTOS DE FORMULARIO

const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector('#input-apellido')
const inputDireccion = document.querySelector('#input-direccion')

const form = document.querySelector('#formulario')

// console.log( inputNombre.value )
// inputNombre.addEventListener('input', (e) => {
//     console.log(e)

//     const value = inputNombre.value

//     if (value.length < 6) {
//         inputNombre.classList.add('invalido')
//     } else {
//         inputNombre.classList.remove('invalido')
//     }
// })

const usersList = document.querySelector('#usuarios')

const usuariosRegistrados = []

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const direccion = inputDireccion.value

    if (nombre.length < 5 || apellido.length < 5 || direccion.length < 5) {
        alert("DATOS INVALIDOS")
        return
    }

    const user = {
        nombre: nombre, 
        apellido: apellido, 
        direccion: direccion
    }

    usuariosRegistrados.push(user)

    console.log(usuariosRegistrados)

    form.reset()

    agregarUsuarioDOM(user)
})

const agregarUsuarioDOM = (user) => {
    const li = document.createElement('li')
    li.innerHTML = `
                <h5>${user.nombre} ${user.apellido}</h5>
                <p>${user.direccion}</p>
            `
    usersList.append(li)
}