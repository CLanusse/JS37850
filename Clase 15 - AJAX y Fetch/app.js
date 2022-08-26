


// GET - busqueda = string | limit = number

// query params
//          |        dominio        | endpoints | params
// const url = "https://www.coderhouse.com/search?busqueda=ferran&limit=10"


// url params
//                                      /alumnos/{id} 
// const url2 = "https://www.coderhouse.com/alumnos/16"


// FETCH


// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
// })

const listaPosts = document.querySelector('#posts')

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((data) => {
//         // sincronizar las acciones
//         console.log(data)

//         const li = document.createElement('li')
//         li.innerHTML = `
//             <h4>${data.title}</h4>
//             <p>${data.body}</p>
//         `

//         listaPosts.append(li)
//     })

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        // sincronizar las acciones
        // console.log(data)

        data.forEach((post) => {

            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
                <hr>
            `
    
            listaPosts.append(li)
        })
    })


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
        title: 'Hola Mundo',
        body: 'Un mensaje genérico',
        userId: 10
    })
})
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    })


fetch('./data.json')
    .then((resp) => resp.json())
    .then((data) => {
        // renderizar etc.
        console.log(data)
    })