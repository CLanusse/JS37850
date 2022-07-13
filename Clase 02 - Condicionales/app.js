// CONDICIONALES

// const condicion = true

// if (condicion) {
//     // código a ejecutar
//     console.log("Hola mundo!")
// }



// let usuario = prompt('Ingrese su nombre')

//  console.log( profesor == "Conrado Lanusse" )

// if (usuario == "Conrado") {
//     alert("Bienvenido profesor!")
// } else if (usuario == "Luna") {
//     alert("Bienvenida tutora!")
// } else if (usuario == "Ferran")  {
//     alert("Bienvenido Coordinador!")
// } else {
//     alert("Bienvenido estudiante " + usuario)
// }

let temperatura = 40

// console.log( temperatura >= 30 )

// if (temperatura >= 30) {
//     alert("Uf! QUé calor!")
// } else if (temperatura >= 15) {
//     alert("Está lindo!")
// } else {
//     alert("Ufff! Qué frio")
// }

// console.log(20 == "20")
// console.log(20 === "20")

let myVar = NaN
// console.log(myVar)

// console.log(typeof 20.3)
// console.log(typeof "20")
// console.log(typeof true)
// console.log(typeof NaN)


// let usuario = prompt('Ingrese su nombre')

// if (usuario !== 'Conrado') {
//     alert("Acceso denegado")
// } else {
//     alert("Bienvenido!")
// }

// let user = prompt('Ingrese el usuario')
// let pass = Number( prompt('Ingrese la contraseña') )
// let palabraMagica = prompt('Ingrese la palabra mágica')

// if ((user === 'Conrado' && pass === 1234) || palabraMagica === "Coder") {
//     alert("Bienvenido usuario")
// }

// if (user === "Conrado" && pass === 1234) {
//     alert("Bienvenido usuario")
// } else {
//     alert("Acceso denegado")
// }


// if (pass === 1234 || palabraMagica === "Coder") {
//     alert("Bienvenido usuario")
// }

// if (user === 'Conrado') {
//     let pass = Number( prompt('Ingrese la contraseña') )

//     if (pass === 1234) {
//         alert("Bienvenido usuario!")
//     } else {
//         alert("Password incorrecto")
//     }

// } else {
//     alert("Usuario incorrecto")
// }


// let nombre = prompt('Ingrese su nombre')

// if (nombre.toLowerCase() === "ferran") {
//     alert("Bienvenido tutor!")
// }

// let nombre = prompt('Ingrese su nombre').toLowerCase()

// if (nombre === "ferran") {
//     alert("Bienvenido tutor!")
// }

// console.log( nombre )
// console.log( nombre.length )
// console.log( nombre.toUpperCase() )
// console.log( nombre.toLowerCase() )


// console.log("Hola Muindo QUe Lindo es EstaR VIVO!!!".toLowerCase())

// if (nombre === 'Ferran' || nombre === 'ferran' || nombre === 'FERRAN' || nombre === 'feRRaN') {
//     alert("Bienvenido tutor!")
// }



// ejercicio práctico

let estudiante = prompt('Ingrese el nombre del estudiante')

let nota1 = Number( prompt('Ingrese la nota 1') )
let nota2 = Number( prompt('Ingrese la nota 2') )
let nota3 = Number( prompt('Ingrese la nota 3') )

if (estudiante.length > 3 
    && nota1 >= 0 
    && nota1 <= 10 
    && nota2 >= 0 
    && nota2 <= 10 
    && nota3 >= 0 
    && nota3 <= 10) {

    let promedio = (nota1 + nota2 + nota3) / 3

    if (promedio >= 7) {
        alert("El estudiante " + estudiante + " aprobó con un promeido de : " + promedio)
    } else {
        alert("El estudiante " + estudiante + " no alcanzó la nota mínima. Promedio: " + promedio)
    }

} else {
    alert("Los datos ingresados no son correctos")
}


console.log("Fin del programa")