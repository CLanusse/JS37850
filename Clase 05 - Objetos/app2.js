// CONSTRUCTORES

const producto = {
    id: 13,
    nombre: "Producto 1",
    stock: 100,
    precio: 12000
}


// function Producto(id, nombre, stock, precio) {
//     console.log(this)
//     this.id = id
//     console.log(this)

//     this.nombre = nombre
//     console.log(this)

//     this.stock = stock
//     console.log(this)

//     this.precio = precio    
//     console.log(this)
// }

function Producto(id, nombre, stock, precio) {
    this.id = id
    this.nombre = nombre
    this.stock = stock
    this.precio = precio    

    this.calcularIva = () => {
        return this.precio * 1.21
    }
}

const producto1 = new Producto(1, "Zapas XL", 50, 22000)
const producto2 = new Producto(2, "Taza negra", 20, 600)

// console.log(producto1)
// console.log(producto2)
// console.log( producto1.calcularIva() )


// function Mascota(nombre, tipo, edad) {
//     this.nombre = nombre
//     this.tipo = tipo
//     this.edad = edad

//     this.saludar = function () {
//         console.log(this.nombre + " te dice hola!!")
//     }

//     this.cumplirAnios = () => {
//         this.edad++
//     }
// }

// const mascota1 = new Mascota("Ronnie", "perro", 6)
// const mascota2 = new Mascota("Dory", "pez", 2)
// const mascota3 = new Mascota("Pikachu", "tortuga", 82)


// mascota1.saludar()
// mascota2.saludar()
// mascota3.saludar()

// mascota1.cumplirAnios()
// mascota2.cumplirAnios()
// mascota3.cumplirAnios()

// console.log(mascota1)
// console.log(mascota2)
// console.log(mascota3)

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

const mascota1 = new Mascota("Ronnie", "perro", 6)
const mascota2 = new Mascota("Dory", "pez", 2)
const mascota3 = new Mascota("Pikachu", "tortuga", 82)

// console.log(mascota1)
// console.log(mascota2)
// console.log(mascota3)

// mascota1.saludar()
// mascota1.fallecer()
// mascota1.saludar()

// mascota3.cumplirAnios()
// mascota3.cumplirAnios()
// mascota3.cumplirAnios()

// console.log(mascota3)

while (mascota2.vivo) {
    mascota2.cumplirAnios()
}

console.log(mascota2)