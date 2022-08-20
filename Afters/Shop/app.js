
const productosContainer = document.querySelector('#contenedor-productos')
const carritoContainer = document.querySelector('#carrito-contenedor')

const btnVaciar = document.querySelector('#vaciarCarrito')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

// renderizado productos
stockProductos.forEach( (producto) => {
    const div = document.createElement('div')

    div.className = "producto"
    div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Talle: ${producto.talle}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button id="agregar-${producto.id}" onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    productosContainer.append(div)
    
    // const btnAgregar = document.querySelector(`#agregar-${producto.id}`)

    // btnAgregar.addEventListener('click', () => {
    //     agregarAlCarrito(producto.id)
    // })
})


// carrito

const carrito = JSON.parse(localStorage.getItem('carrito')) || []

const agregarAlCarrito = (id) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === id)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1
    } else {
        const producto = stockProductos.find( (prod) => prod.id === id)

        carrito.push( {
            ...producto,
            cantidad: 1
        } )
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
    toastAgregar()
    renderCarrito()
}

const elminarDelCarrito = (id) => {
    const producto = carrito.find((prod) => prod.id === id)
    producto.cantidad -= 1

    if (producto.cantidad === 0) {
        const indice = carrito.indexOf(producto)
        carrito.splice(indice, 1)
    }
 
    localStorage.setItem('carrito', JSON.stringify(carrito))
    toastEliminar()
    renderCarrito()
}

const vaciarCarrito = () => {

    Swal.fire(
        {
            title: 'Está seguro?',
            text: 'Esto no es reversible',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'No, cancelar'
        }
    ).then( (result) => {
        if (result.isConfirmed) {
            carrito.length = 0
            localStorage.setItem('carrito', JSON.stringify(carrito))
        
            Toastify({
                text: 'Se vació el carrito',
                time: 3000
            }).showToast()

            renderCarrito()
        }
    } )
}

btnVaciar.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
    carritoContainer.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = "productoEnCarrito"

        div.innerHTML = `
                    <p>${prod.nombre}</p>
                    <p>Precio: $${prod.precio}</p>
                    <p>Cantidad: ${prod.cantidad}</p>
                    <button onclick="elminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        carritoContainer.append(div)
    })

    actualizarCantidad()
    actualizarTotal()
}

const actualizarCantidad = () => {
    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
}

const actualizarTotal = () => {
    precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
}

const toastAgregar = () => {
    Toastify({
        text: 'Producto agregado al carrito',
        time: 3000,
        gravity: 'bottom',
        position: 'left'
    }).showToast()
}
const toastEliminar = () => {
    Toastify({
        text: 'Producto eliminado',
        time: 3000,
        gravity: 'bottom'
    }).showToast()
}




renderCarrito()









// === EJEMPLO RADIO BUTTON ====

const radioBtns = document.querySelectorAll('.radio-btn')

for (const radio of radioBtns) {
    radio.addEventListener('change', () => {

        const checked = document.querySelector('.radio-btn:checked')

        console.log(checked.value)

    })
}