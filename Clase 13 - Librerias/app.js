
const btn = document.querySelector('#btn')
const btnToast = document.querySelector('#btn-toast')


btn.addEventListener('click', () => {

    // Swal.fire({
    //     title: 'Bienvenidos!',
    //     text: 'Estamos en la clase 13',
    //     icon: 'success',
    //     position: 'bottom-right',
    //     timer: 2000,
    //     showConfirmButton: false,
    //     toast: true
    //   })

    Swal.fire({
        title: 'Está seguro?',
        text: 'Esta acción no es reversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'No, cancelar'
    }).then( (result) => {

        if (result.isConfirmed) {
            // código para borrar

            // Swal.fire({
            //     title: 'Producto borrado',
            //     icon: 'success',
            //     showConfirmButton: false,
            //     timer: 3500,
            //     toast: true,
            //     position: 'bottom-left'
            // })

            Toastify({
                text: 'Hola mundo!',
                duration: 3000,
                position: 'left',
                gravity: 'bottom',
                style: {
                    background: 'linear-gradient(to right, #00b09b, #96c92d)'
                }        
            }).showToast()
        }
    } )

})

btnToast.addEventListener('click', () => {


    Toastify({
        text: 'Hola mundo!',
        duration: 3000,
        position: 'left',
        gravity: 'bottom',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        },
        onClick: () => {

            Toastify({
                text: 'Clickeaste un Toast!',
                duration: 1500,
                position: 'left',
                gravity: 'top'
            }).showToast()
        }

    }).showToast()
})




// === LUXON ===

// const DateTime = luxon.DateTime
const { DateTime } = luxon


const dt = DateTime.local(2022, 12, 8, 15, 30)
const now = DateTime.now()

// console.log(dt)
// console.log(now)

// console.log( dt.toString() )
// console.log( now.toString() )

// console.log(now.year)
// console.log(now.day)
// console.log(now.month)
// console.log(now.weekday)

// console.log(dt.daysInMonth)

// console.log(now.toLocaleString(DateTime.DATE_FULL))
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE))
// console.log(now.toLocaleString(DateTime.DATETIME_HUGE))

const suma = now.plus({hours: 15, days: 5})
const resta = now.minus({hours: 20, days: 46})

// console.log( suma.toLocaleString(DateTime.DATETIME_HUGE) )
// console.log( resta.toLocaleString(DateTime.DATETIME_HUGE) )


const { Duration } = luxon
const { Interval } = luxon


const dur = Duration.fromObject({days: 20, hours: 23, minutes: 59})

console.log(dur)

const entregaFinal = now.plus(dur)

// console.log( entregaFinal.toLocaleString(DateTime.DATETIME_HUGE) )

const navidad = DateTime.local(2022, 12, 25)

const diferencia = navidad.diff(now, ['days', 'hours'])
const intervalo = Interval.fromDateTimes(now, navidad)

console.log( intervalo.length('days') )
console.log( intervalo.length('months') )
console.log( intervalo.length('hours') )

