




// function saludar() {
//     // código de la función
//     console.log("Hola mundo!")

// }


// saludar()
// saludar()
// saludar()

function pedirNombre() {
    let nombre = prompt('Ingrese su nombre')
    alert('Bienvenido/a ' + nombre + "!!!!!! alegría")
}

// pedirNombre()
// pedirNombre()

// for (let i = 0; i < 5; i++) {
//     pedirNombre()
// }

// === parámetros ===


// function saludar(usuario) {
//     console.log("Bienvenido " + usuario)
// }

// saludar("Vero")
// saludar("Stefano")
// saludar("Ezequiel")

function duplicar(numero) {
    return numero * 2
}

// duplicar(100)
// duplicar(50)
// duplicar(1234)

// function nombreCompleto(nombre, apellido, edad) {
//     console.log('Nombre: ' + nombre)
//     console.log('Apellido: ' + apellido)
//     console.log('Edad: ' + edad)
// }

// let nombreUsuario = prompt('Ingrese su nombre')
// let apellidoUsuario = prompt('Ingrese su apellido')
// let edadUsuario = prompt('Ingrese su edad')

// nombreCompleto(nombreUsuario, apellidoUsuario, edadUsuario)
// nombreCompleto('Delfina', 'Fernandez', 19)



function sumar(num1, num2) {
    return (num1 + num2)
}

// sumar(10560, 3400)
// sumar(2, 6)

let resultado1 = sumar(500, 600)
let resultado2 = duplicar(resultado1)

let resultadoFinal = sumar(resultado1, resultado2)

// console.log( resultado1 )
// console.log( resultado2 )
// console.log( resultadoFinal )

function nombreCompleto() {
    let nombre = prompt('Ingrese su nombre')
    let apellido = prompt('Ingrese su apellido')
    let edad = prompt('Ingrese su edad')

    let datosCompletos = 'Nombre: ' + nombre + '. Apellido: ' + apellido + '. Edad: ' + edad
    return datosCompletos
}

// const datosTutor = nombreCompleto()

// console.log(datosTutor)


