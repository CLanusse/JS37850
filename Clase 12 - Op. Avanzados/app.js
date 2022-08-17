

// let n = 10

// n = n + 1
// n += 1
// n++



let temperatura = 30
// let mensaje

// if (temperatura >= 25) {
//     mensaje = "Día caluroso"
// } else {
//     mensaje = "Día fresco"
// }

// console.log(mensaje)

// sintaxis op. ternario
// condicion ? caso1 : caso2

// temperatura >= 25 ? (console.log("Día caluroso"), console.log("Ferran tiene razón?")) : console.log("Día fresco")

const mensaje = temperatura >= 25 ? "Día caluroso" : "Día fresco"

// console.log(mensaje)

// logico AND
// condicion && caso

// if (temperatura >= 40) {
//     alert("Demasiado calor")
// }

// temperatura >= 40 && alert("Demasiado calor")
// const alerta = temperatura >= 40 && "Demasiado calor"
// console.log(alerta)

// op. OR


// valores falsy: false, null, undefined, 0, '', NaN


// console.log( null || "Hola Coder" )


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

const buscarProducto = (id) => {
    return productos.find(prod => prod.id === id) || {error: "No se encontró el producto"}
}


// console.log( buscarProducto(60) )

// console.log( 0 ?? "Error")


// const usuario = null

// console.log( usuario.nombre || "El usuario no existe" )
// console.log( usuario?.nombre || "El usuario no existe" )


// const busqueda = productos.find(prod => prod.id === 70)

// console.log( busqueda?.precio || "No existe el producto" )


// DESESTRUCTURACION DE OBJETOS


const usuario = {
    nombre: 'Ferran',
    rol: 'tutor',
    coder_ch_c_id: 'Javascript',
    tel: {
        casa: null,
        movil: 1233467
    },
    email: 'ferran@coder.com'
}

const usuario2 = {
    nombre: 'Vero',
    rol: 'estudiante',
    curso: 'Javascript',
    tel: {
        casa: null,
        movil: 332224254
    },
    email: 'vero@coder.com'
}

// const usuario3 = usuario2
// usuario3.nombre = 'Vero Lopez'

const usuario3 = {
    ...usuario2,
    nombre: 'Vero Lopez'
}

// console.log(usuario2)
// console.log(...usuario3)
// console.log(usuario.nombre: 'Vero', usario.rol: 'estudiante')

// const email = usuario.email
// const nombre = usuario.nombre
// const curso = usuario.curso
// const tel = usuario.tel.movil

// const {prop1, prop2} = objeto

// const {nombre, curso, rol} = usuario2
// const {nombre, curso, tel: {movil} } = usuario2
// const {nombre: alumno, coder_ch_c_id: curso, tel: {movil} } = usuario
// const {nombre, curso, tel: {casa} } = usuario2

// console.log(casa)
// console.log(alumno, curso, movil)
// console.log(email, nombre, curso, tel)

const container = document.querySelector('#container')

const {nombre, precio, error} = buscarProducto(56)

error 
    ? container.innerHTML = error
    : container.innerHTML = `
                <h4>${nombre}</h4>
                <h5>Precio: ${precio}</h5>
        `

console.log(error)


// DESESTRUCTURACION DE ARRAYS

const tutores = ["Ferran", "Stefano", "Luna", "Rocco", "Abril"]
const graduados = ["Vero", "Martin", "Renzo", "Seba"]


const [,,a, b, c] = tutores

// console.log(a, b, c)

// console.log(...tutores)
// console.log("Ferran", "Stefano", "Luna", "Rocco", "Abril")

// console.log(..."Hola mundo")


const temperaturas = [8, 12, 16, 11, 9, 4]

// console.log( Math.max(8, 12, 16, 11, 9, 4) )
// console.log( Math.max(...temperaturas) )

// const nuevosTutores = [...tutores, ...graduados]

// const nuevosTutores = tutores
// nuevosTutores.push("Seba")

const nuevosTutores = [...tutores, "Seba"]


console.log(tutores)
console.log(nuevosTutores)

const carrito = []

const agregarAlCarrito = (id) => {
    const producto = buscarProducto(id)

    const productoAlCarrito = {
        ...producto,
        cantidad: 1
    }
    
    // producto.cantidad = 1
    // carrito.push(producto)

    carrito.push(productoAlCarrito)
}


agregarAlCarrito(2)

console.log(productos)
console.log(carrito)