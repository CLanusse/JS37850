



// contador = contador + 1
// contador++


//          0             1              3
// for (let contador = 1; contador <= 5; contador++) {
//     // código a ejecutar
//     // 2
//     console.log(contador)
//     console.log("Hola mundo!")
// }


// i = i + 2
// i += 2
// for (let i = 0; i < 10; i += 2) {
//     console.log(i)
// }

// for (let i = 20; i > 0; i--) {
//     console.log(i * 5)
// }


// let tabla = Number( prompt('Ingrese el número deseado') )

// for (let i = 1; i <= 10; i++) {
//     console.log(i * tabla)
// }

let numeroProhibido = 66

// for (let i = 0; i <= 100; i++) {
    
//     if (i === numeroProhibido) {
//         console.log("EL NUMERO PROHIBIDOO!!!")
//         break
//     }

//     console.log(i)
// }

// for (let i = 0; i <= 100; i++) {
    
//     if (i === numeroProhibido) {
//         continue
//     }

//     console.log(i)
// }

// for (let i = 1; i <= 100; i++) {

//     if (i % 6 === 0) {
//         continue
//     }

//     console.log(i)
// }

// let conteo = 0

// let num = Number( prompt('Ingrese el número a contar') )
// let limite = Number( prompt('Ingrese el límite a saber') )

// for (let i = 1; i <= limite; i++) {

//     if (i % num === 0) {
//         conteo++
//     }
// }

// console.log(conteo)

// WHILE

// let pass = prompt('Ingrese la contraseña')

// while (pass !== "Coder") {
//     alert("Acceso denegado, pruebe nuevamente")
//     pass = prompt('Ingrese la contraseña')
// }

// alert('Bienvenido!')

// let pass = prompt('Ingrese la contraseña')
// let contador = 1

// while (pass !== "Coder" && contador < 3) {
//     alert("Acceso denegado, pruebe nuevamente")
//     contador++
//     pass = prompt('Ingrese la contraseña')
// }

// if (contador === 3) {
    // alert('Límite de ingresos fallidos, vuelva mañana')
// } else {
//     alert('Bienvenido!')
// }

// for (let i = 1; i <= 3; i++) {
//     let pass = prompt('Ingrese la contraseña')

//     if (pass === 'Coder') {
//         alert('Bienvenido!')
//         break
//     } else if (i === 3) {
//         alert('Límite de ingresos fallidos, vuelva mañana')
//     } else {
//         alert('Ingreso incorrecto, pruebe nuevamente')
//     }
// }

// let pass = prompt('Ingrese la contraseña')

// for (pass; pass !== 'Coder'; pass = prompt('Ingrese la contraseña')) {
//     alert('Ingreso incorrecto, pruebe nuevamente')
// }


// for (;true;) {
//     let num = Number( prompt('Ingrese el número prohibido'))

//     if (num === numeroProhibido) {
//         alert('Felicitaciones')
//         break
//     } else {
//         alert('Incorrecto!')
//     }
// }

// alert('Bienvenido!')



// DO WHILE

// let pass

// do {
//     pass = prompt('Ingrese la contraseña')
// } while (pass !== 'Coder')

// alert('Bienvenido!')


// SWITCH

let banco = prompt('Ingrese su banco')
let monto = 100000
let interes
// if (banco === 'Santander') {
//     console.log("Tasa de interés: 75%")
// } else if (banco === 'Macro') {
//     console.log("Tasa de interés: 55%")
// } else if (banco === 'Provincia') {
//     console.log("Tasa de interés: 65%")
// } else if (banco === 'Galicia') {
//     console.log("Tasa de interés: 115%")
// }

switch(banco) {
    case 'Santander':
        interes = 1.75
        console.log('Interés 75%')
        break
    case 'Macro':
        interes = 1.55
        console.log('Interés 55%')
        break
    case 'Provincia':
        interes = 1.65
        console.log('Interés 65%')
        break
    case 'Galicia':
        interes = 2.15
        console.log('Interé 115%')
        break
    default:
        alert("No encontramos ese banco")
        break
}

// alert("Tiene que devolver: " + monto * interes)


console.log("Fin del programa")