

const numeros = [5, 7, 12, 4]


const tutores = ["Ferran", "Stefano", "Luna", "Rocco", "Abril", "Ezequiel", "Delfina"]

// console.log( tutores[0] )
// console.log( tutores[3] )
// console.log( tutores[6] )

// console.log( numeros[1] * numeros[3] )

// for (let i = 0; i < tutores.length; i++) {
//     console.log( tutores[i] )
// }

// console.log(tutores.length)

const buscarTutor = (nombre) => {

    for (let i = 0; i < tutores.length; i++) {
        if (nombre === tutores[i]) {
            alert("El tutor se encuentra en el grupo")
            return 
        }
    }
    
    alert("No se encontraron coincidencias")
}

// buscarTutor("Abril")


tutores.push("Agustina")
tutores.unshift("Ricardo")

// console.log(tutores)

tutores.pop()
tutores.shift()

// console.log(tutores)

// tutores.splice(3, 2)
tutores.splice(3, 2, "Agustina", "Ricardo")

// console.log(tutores)

// console.log( tutores.join(', ') )
// console.log( tutores.join('\n') )

const desterrados = ["Rocco", "Abril"]
const equipoFinal = tutores.concat(desterrados)

// console.log( equipoFinal.slice(2, 7) )
// console.log( equipoFinal.slice(5) )

// console.log(equipoFinal)

const miSlice = (arr, inicial, final) => {
    let nuevoArray = []

    for (inicial; inicial < final; inicial++) {
        nuevoArray.push( arr[inicial] )
    }

    return nuevoArray
}

// const ejemplo = miSlice(equipoFinal, 2, 7)
// console.log(ejemplo)

// console.log( equipoFinal.indexOf('Gustavo') )

// console.log( equipoFinal.includes('Ferran') )
// console.log( equipoFinal.includes('Delfina') )
// console.log( equipoFinal.includes('Jose') )

const mensaje = "Hola mundo gente bella que lindo el día"

const newMensaje = mensaje.split('').reverse().join('')

// console.log(mensaje)
// console.log(newMensaje)
// console.log( mensaje.includes("coderhouse") )


const producto = {
    id: 1,
    nombre: "Producto 1",
    precio: 1500,
    talle: "L"
}

const producto2 = {
    id: 2,
    nombre: "Producto 2",
    precio: 2500,
    talle: "S"
}

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
    }
]

// console.log( productos )

productos.push( {
    id: 6,
    nombre: "Producto 6",
    precio: 6500,
    talle: "M"
} )

// console.log(productos)

// for (let i = 0; i < productos.length; i++) {
//     console.log( productos[i].nombre )
// }


class Mascota {
    // constructor - props
    constructor (nombre, tipo, edad) {
        this.nombre = nombre
        this.tipo = tipo
        this.edad = edad
        this.vivo = true
    }

    // listar métodos
    saludar() {
        if (this.vivo) {
            console.log(this.nombre + " te está saludando!")
        } else {
            console.log("Tengo una mala noticia...")
        }
    }

    cumplirAnios() {
        this.edad++
        if (this.edad === 85) {
            // this.vivo = false
            this.fallecer()
        }
    }

    fallecer() {
        this.vivo = false
    }

    revivir() {
        this.vivo = true
    }
}


const mascotas = [
    new Mascota("Ronnie", "perro", 6),
    new Mascota("Dory", "pez", 2),
    new Mascota("Pikachu", "tortuga", 82)
]

mascotas.push( new Mascota("Ferran", "pony", 5) )

const agregarMascota = () => {
    const nombre = prompt('Ingrese nombre de la mascota')
    const tipo = prompt('Ingrese tipo de la mascota')
    const edad = Number( prompt('Ingrese edad de la mascota') )

    mascotas.push( new Mascota(nombre, tipo, edad) )
}

// agregarMascota()

// console.log(mascotas)

// for (let i = 0; i < mascotas.length; i++) {
//     console.log( mascotas[i].nombre )
//     console.log( mascotas[i].edad )
// }


//           ref        array
for (const mascota of mascotas) {
    // console.log(mascota.nombre)
    // console.log(mascota.edad)
    mascota.cumplirAnios()
    // mascota.fallecer()
}

// console.log(mascotas)


for (const prod of productos) {
    // prod.precio = prod.precio * 1.20
    prod.precio *= 1.20
}

console.log(productos)




const filtrarPorPrecio = (filtro) => {
    const busqueda = []

    for (const prod of productos) {
        if (prod.precio >= filtro) {
            busqueda.push( prod )
        }
    }

    return busqueda
}

console.log( filtrarPorPrecio(4000) )


let total = 0

for (const prod of productos) {
    total += prod.precio
}
// console.log(busqueda)
console.log(total)


//

const arr = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]