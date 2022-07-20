
let usuario = 'Ferran'

function saludar() {
    let usuario = 'Delfina'
    console.log(usuario)

    saludarDeNuevo(usuario)
}

function saludarDeNuevo(usuario) {
    console.log(usuario)
}

// console.log(usuario)

// saludar()


// const sumar = function (num1, num2) {
//     return num1 + num2
// }

const sumar = (num1, num2) => {
    let resultado = num1 + num2
    return resultado
}
// const restar = (num1, num2) => {
//     return num1 - num2
// }

//                     { return num1 - num2 }
const restar = (num1, num2) => num1 - num2

const iva = (x) => x * 1.21

const calcularTotal = () => {
    const monto = Number( prompt('Ingrese el monto a calcular') )
    const descuento = Number( prompt('Ingrese el descuento') )

    const resultado = restar( iva(monto) , descuento )

    return resultado
}

console.log( calcularTotal() )
console.log( calcularTotal() )
// console.log( sumar(4, 5) )
// console.log( restar(10, 5) )