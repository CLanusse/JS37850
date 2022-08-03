
// ========== DOM =======

// console.log( document.body )


const titulo = document.getElementById('titulo')
const contenedor = document.getElementById('content')

const listItems = document.getElementsByClassName('item')

// console.log(titulo)
// console.log(contenedor)

// console.log(listItems)

// for (const item of listItems) {
//     console.log(item)
// }

// const nombre = prompt('Ingrese su nombre')
const nombre = "Conrado"
titulo.innerText = "Bienvenido " + nombre + "!!"

// contenedor.innerHTML = "Hola Mundo!"
contenedor.innerHTML = "<p>Hola mundo <strong>Coder</strong>!</p>"

contenedor.className = "container my-5 mx-3"

for (const item of listItems) {
    // item.className = "item bg-item"
    item.classList.add('bg-item')
    // item.classList.remove('bg-item')
}


// CREAR ELEMENTOS

const div = document.createElement('div')
div.className = "container my-2"
div.innerHTML = "<h3>Hola mundo!</h3>"


// console.log(div)

contenedor.append(div)
// document.body.prepend(div)
// document.body.append(div)

// const lista = document.getElementById('lista')

// const li = document.createElement('li')
// li.className = "item bg-item"
// li.innerText = "Un item nuevo"

// console.log(li)

// lista.append(li)


const listaTutores = document.getElementById('tutores')

// console.log(listaTutores)

for (const tutor of tutores) {
    const li = document.createElement('li')
    li.className = "item"
    li.innerText = tutor

    listaTutores.append(li)
}


// contenedor.remove()

// console.log(contenedor)

// document.body.append(contenedor)



const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1500,
        talle: "L"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2500,
        talle: "S"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3500,
        talle: "XS"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4500,
        talle: "XL"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 5500,
        talle: "L"
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 6500,
        talle: "L"
    },
    {
        id: 7,
        nombre: "Producto 7",
        precio: 7500,
        talle: "L"
    },
    {
        id: 8,
        nombre: "Producto 8",
        precio: 8500,
        talle: "L"
    }
]

// const producto1 = {
//     id: 1,
//     nombre: "Producto 1",
//     precio: 1500,
//     talle: "L"
// }

const containerProductos = document.getElementById('productos')

productos.forEach((producto) => {
    const div = document.createElement('div')
    div.innerHTML = `<h4>${producto.nombre}</h4>
                    <p>Precio: ${producto.precio}</p>
                    <small>Talle: ${producto.talle}</small>`

    containerProductos.append(div)
})

// const divProducto = document.createElement('div')

// divProducto.innerHTML = "<h4>" + producto1.nombre + "</h4> <p>Precio: " + producto1.precio + "</p>"

// divProducto.innerHTML = `<h4>${producto1.nombre}</h4>
//                         <p>Precio: ${producto1.precio}</p>
//                         <small>Talle: ${producto1.talle}</small>`


// console.log(divProducto)


// const h4 = document.createElement('h4')
// h4.innerText = producto1.nombre
// divProducto.append(h4)

// const p = document.createElement('p')
// p.innerText = "Precio: " + producto1.precio
// divProducto.append(p)

// const small = document.createElement('small')
// small.innerText = "Talle: " + producto1.talle
// divProducto.append(small)
