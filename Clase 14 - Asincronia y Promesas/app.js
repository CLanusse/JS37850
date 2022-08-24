

// 1 op - 5 segs
// 2 op - 10 segs

// sincronico: 1op --> 2op ---> 15segs

// asincronico: 1op --> 5seg    ]
// asincronico: 2op --> 10segs  ] 10gs


// console.log("Inicio del programa")


// alert("Soy un setTimeout")
// setTimeout(() => {
//     // alert("Soy un setTimeout")
//     console.log("Soy un setTimeout")
// }, 0)

// setInterval(() => {
//     console.log("HOla mundo")
// }, 1000)




// console.log("Fin del programa")

const counterContainer = document.querySelector('#counter')

let counter = 10

counterContainer.innerText = counter

const intervalo = setInterval(() => {
    counter--
    counterContainer.innerText = counter

    if (counter === 0) {
        clearInterval(intervalo)
    }
}, 1000)



// let slider = 1

// const intervalSlider = setInterval(() => {
//     // codigo para el slider segun el contador
// }, 10000)


// const pedirDatos = (check) => {
//     return new Promise( (resolve, reject) => {
//         // cuerpo de la promesa
//         setTimeout(() => {
//             if (check) {
//                 resolve("Promesa resuelta")
//             } else {
//                 reject("Promesa rechazada")
//             }
//         }, 2000)

//     })
// }


// pedirDatos(true)
//     .then( (resp) => {
//         // código cuando cambie de estado a fulfilled
//         console.log(resp)
//     } )
//     .catch( (error) => {
//         // código cuando cambie de estado a rejected
//         console.log(error)
//     } )
//     .finally(() => {
//         console.log("Fin del proceso")
//     })



// ========= EJEMPLO APLICADO PROMESAS ============
// ========= EJEMPLO APLICADO PROMESAS ============
// ========= EJEMPLO APLICADO PROMESAS ============

const lista = document.querySelector('#productosList')
const loader = document.querySelector('#loader')

const stock = [
    {
        nombre: 'Producto 1',
        precio: 1000
    },
    {
        nombre: 'Producto 2',
        precio: 2000
    },
    {
        nombre: 'Producto 3',
        precio: 3000
    },
    {
        nombre: 'Producto 4',
        precio: 4000
    },
    {
        nombre: 'Producto 5',
        precio: 5000
    },
]


const pedirProductos = (logged) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (logged) {
                resolve(stock)
            } else {
                reject("Error de autenticación")
            }
        }, 3000)
    })
}

let productos = []


loader.classList.add('loader-active')

pedirProductos(false)
    .then( (data) => {
        console.log(data)
        productos = data
        lista.innerHTML = ""

        productos.forEach((prod) => {
            const li = document.createElement('li')
            li.innerHTML = `
                    <h3>${prod.nombre}</h3>
                    <h5>Precio: $${prod.precio}</h5>
            `
        
            lista.append(li)
        })
    } )
    .catch( (error) => {
        console.log(error)

        lista.innerHTML = `<p>Hubo un problema: ${error}</p>`
    })
    .finally(() => {
        loader.classList.remove('loader-active')
    })
