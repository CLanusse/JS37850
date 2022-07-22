// ========== OBJETOS ==========


const usuario1 = {
    nombre: "Ferran Martinez",
    edad: 13,
    rol: "tutor",
    curso: "javascript"
}

const usuario2 = {
    nombre: "Delfina Fernandez",
    edad: 31,
    rol: "estudiante",
    curso: "javascript",
    tel: {
        cod: {
            id: 54,
            ref: "ARG"
        },
        area: 11,
        num: 466777,
        company: "Movistar"
    }
}

const producto = {
    id: 13,
    nombre: "Producto 1",
    stock: 100,
    precio: 12000
}

usuario1.nombre = "Rocco Parella"
// usuario1.tel = 123456
// usuario1.edad = 25
// usuario1["edad"] = 18

// console.log(usuario1)
// console.log(usuario2.tel.company)
// console.log(usuario2.tel.num)
// console.log(usuario2.tel.cod.ref)
// console.log(usuario1.tel)
// console.log( usuario1["curso"] )
// console.log( usuario1["edad"] )
// console.log(usuario2)

// console.log( usuario2.rol )
// console.log( usuario2.curso )

// console.log("Nombre: " + usuario1.nombre)
// console.log("Rol: " + usuario1.rol)


