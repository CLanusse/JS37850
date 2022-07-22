// objetos


class Usuario {
    constructor (nombre, salario, direccion, telefono) {
        this.nombre = nombre
        this.salario = salario
        this.direccion = direccion,
        this.telefono = telefono
    }

    saludar() {
        console.log(this.nombre + "dice Hola!")
    }
}

const user1 = new Usuario("John Doe", 2000, "Calle Falsa 123", 123456)
const user2 = new Usuario()

// console.log(user2)

const producto1 = {
    nombre: 'Producto 1',
    precio: 1500,
    id: 1
}

// class Estudiante extends Usuario {
//     constructor(curso, estado) {
//         super("Kael", 50000, "asdf", 123)
//         this.curso = curso
//         this.estado = estado
//     }
// }

// const est1 = new Estudiante("js", "en curso")

// console.log(est1)
// est1.saludar()







// ------ FUNCIONES ----------


// escribir una función para sumar un rango de números

// sumarRango(1, 5)
// 1 + 2 + 3 + 4 + 5 = 15
// sumarRango(5, 1)
// 5+4+3+2+1 = 15

// function sumarRango(inicial, final) {
//     // ...
// }

const sumarRango = (inicial, final) => {
    let total = 0 //acumulador

    if (inicial <= final) {
        for (inicial; inicial <= final; inicial++) {
            total += inicial
            // total = total + inicial
        }
    } else {
        for (inicial; inicial >= final; inicial--) {
            total += inicial
        }
    }
    
    return total
}

const resultado = sumarRango(20, 500)

// console.log(resultado)


// =================
// funcion que según el banco y el monto que ingreso, me retorne el monto con intereses
// calcularPrestamo(15000, 'Nacion') ----> 165000

const calcularPrestamo = (monto, banco) => {
    if (monto <= 10000) {
        alert("Monto inválido")
        return
    }

    let total = 0

    switch(banco) {
        case 'galicia':
            total = monto * 1.15
            break
        case 'santander':
            total   = monto * 1.55
            break
        case 'nacion':
            total = monto * 1.7
            break
        default:
            alert('Banco incorrecto')
    }

    return total
}

// const prestamo1 = calcularPrestamo(200000, 'santander')
// console.log(prestamo1)


// ej1 pedirDatos
// const pedirDatos = () => {
//     const banco = prompt('Ingrese su banco')
//     const monto = Number( prompt('Ingrese el monto') )
    
//     // const prestamo = calcularPrestamo(monto, banco)
//     // return prestamo
//     return calcularPrestamo(monto, banco)
// }

// const prestamo = pedirDatos()
// console.log(prestamo)

// ej2 pedirDatos

const pedirDatos = () => {
    const nombre = prompt('Ingrese su nombre')
    const direccion = prompt('Ingrese su direccion')
    const telefono = Number( prompt('Ingrese el telefono') )
    const salario = Number( prompt('Ingrese su salario') )

    const usuario = new Usuario(nombre, salario, direccion, telefono)

    return usuario
}



let persona1 = pedirDatos()

const calcularRiesgo = (user) => {
    console.log(user)
    alert("Hola " + user.nombre)
    alert("Según su salario, dispone de un crédito disponible de " + user.salario * 3)
}

calcularRiesgo(persona1)