const tutores = ["Ferran", "Stefano", "Luna", "Rocco", "Abril", "Ezequiel", "Delfina"]
const numeros = [5, 7, 12, 4]

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


// for (const producto of productos) {
//     console.log(producto)
// }



const porCadaUno = (array, funcion) => {

    for (const elemento of array) {
        funcion(elemento)
    }

}

// porCadaUno(numeros, console.log)
// porCadaUno(numeros, alert)
const mostrarDoble = (num) => {
    console.log(num * 2)
}

let total = 0
const acumulador = (num) => {
    total += num
}

// porCadaUno(numeros, mostrarDoble )
// porCadaUno(numeros, acumulador )
// console.log(total)

// porCadaUno(tutores, (tutor) => {
//     alert(tutor)
// })

// porCadaUno(tutores, (tutor) => {
//     console.log("Nombre: " + tutor)
// })


// numeros.forEach( mostrarDoble )
// numeros.forEach( (num) => {
//     console.log(num)
//     console.log(num * num)
// } )

// tutores.forEach( (tutor) => {
//     console.log("Nombre: " + tutor)
// } )

productos.forEach( (prod) => {
    prod.precio *= 1.20
} )

// console.log(productos)

// const busqueda = productos.find( (prod) => {
//     return prod.talle === "XL"
// } )
// const busqueda = productos.find( (prod) => prod.talle === 'XL )


// const busqueda = productos.find( (prod) => {
//     return prod.precio >= 4000
// } )

// let precio = Number( prompt('Ingrese el precio de busqueda') )

// const busqueda = productos.find( (prod) => prod.precio >= precio )
// console.log(busqueda)


// const filtrados = productos.filter( (prod) => prod.precio >= 6000 )

// console.log(filtrados)

const alguno = productos.some( (prod) => prod.talle === "L" )

// if (alguno) {
//     alert("Sí, hay coincidencia")
// }
// console.log(alguno)

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]


// const cursos2 = cursos.map( (curso) => {
//     return curso.precio
// } )

const cursos2 = cursos.map((curso) => {
    const newCurso = {
        nombre: curso.nombre,
        precio: curso.precio,
        cupo: 100
    }

    return newCurso
})

// cursos.forEach( (curso) => {
//     curso.cupo = 100
// })


// console.log(cursos)
// console.log(cursos2)


// EJEMPLO APLICADO -> productos

// find
const buscado = productos.find( (prod) => prod.id === 7 )
// console.log(buscado)

// some
const barato = productos.some( (prod) => prod.precio <= 1500)
// console.log(barato)

// filter
const talles = productos.filter( (prod) => prod.talle === "L" )
// console.log(talles)

// map
const nombres = productos.map( (prod) => prod.nombre )
// console.log(nombres)

const carrito = []


const agregarAlCarrito = (id) => {
    const producto = productos.find( (prod) => prod.id === id)

    carrito.push(producto)
}

// agregarAlCarrito(4)
// agregarAlCarrito(7)
// agregarAlCarrito(2)

// console.log(carrito)



// console.log( Math.random() * 20 + 10)

const tirarDados = () => {
    const num = Math.ceil( Math.random() * 6 )

    console.log(num)
}

// tirarDados()


const ahora = new Date()

console.log(ahora)

const navidad = new Date(2022, 11, 24, 23, 30, 40) 

// console.log( navidad.getDay() )
// console.log( navidad.getFullYear() )
// console.log( navidad.getMonth() )

const diff = navidad - ahora

// console.log(diff / 86400000)

const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")