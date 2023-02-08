// var socios = parseInt (prompt ("Ingresar cantidad de socios"));
// console.log ("La cantidad de socios es de " + socios)

// if (socios <= 3){
// alert("El monto mínimo de inversión por persona es de 500 usd");
// console.log ("El monto mínimo de inversión por persona es de 500 usd");
// }
// else if (socios <= 5){
//     alert("El monto mínimo de inversión por persona es de 400 usd");
//     console.log("El monto mínimo de inversión por persona es de 400 usd");
//     }
// else if (socios > 5){
//     alert ("El monto mínimo de inversión por persona es de 300 usd");
//     console.log("El monto mínimo de inversión por persona es de 300 usd");
// }

// class plan {
//     constructor(nombre, interes, plazo) {
//         this.nombre = (nombre);
//         this.interes = (interes);
//         this.plazo = (plazo);
//     }
// }
// const planA = new plan ("Plan A", "30%", "12 meses")
// const planB = new plan ("Plan B", "40%", "36 meses")
// const planC = new plan ("Plan C", "50%", "48 meses")

// const planes = [planA, planB, planC]
// planes.push(plan = new plan ("plan D", "55%", "54 meses"));
// console.log("Los planes disponibles son los siguientes:")
// planes.forEach((planes) => {
//     console.log(planes);
// })

// let montoTotal = 0 
// for (let i = 1; i<=socios; i++) {
//     let montoInvertido = parseInt (prompt ("Ingrese el monto a invertir del socio"+" " + i))
//     montoTotal = montoTotal + montoInvertido
// }
// console.log (`La inversión total de todos los socios es de ${montoTotal} usd`)
// alert (`La inversión total de todos los socios es de ${montoTotal} usd`)

// const mult = (x , y) => {return x * y}
// var elegirPlan = parseInt(prompt(`Elija su plan de inversión (Escriba el dígito incial de la opción elegida) :
//     1 - PlanA
//     2 - PlanB
//     3 - PlanC
//     4 - PlanD`))
// switch (elegirPlan){
//     case 1 :
//         let interesA = 1.3
//         let devA = mult(montoTotal,interesA)
//         console.log (`El monto a invertir es de ${montoTotal} usd, la devolución total con un 30% extra será de ${devA} usd en un plazo de 12 meses`)
//         alert (`El monto a invertir es de ${montoTotal} usd, la devolución total con un 30% extra será de ${devA} usd en un plazo de 12 meses`)
//         break
//     case 2 :
//         let interesB = 1.4
//         let devB = mult(montoTotal,interesB)
//         console.log (`El monto a invertir es de ${montoTotal} usd, la devolución total con un 40% extra será de ${devB} usd en un plazo de 36 meses`)
//         alert (`El monto a invertir es de ${montoTotal} usd, la devolución total con un 40% extra será de ${devB} usd en un plazo de 36 meses`)
//         break
//     case 3 :
//         let interesC = 1.5
//         let devC = mult(montoTotal,interesC)
//         console.log (`El monto a invertir es de ${montoTotal} usd, la devolución total con un 50% extra será de ${devC} usd en un plazo de 48 meses`)
//         alert (`El monto a invertir es de ${montoTotal} usd, la devolución total con un 50% extra será de ${devC} usd en un plazo de 48 meses`)
//         break
//     case 4 :  
//         let interesD = 1.55
//         let devD = mult(montoTotal,interesD)  
//         console.log (`El monto a invertir es de ${montoTotal} usd, la devolución total con un 55% extra será de ${devD} usd en un plazo de 54 meses`) 
//         alert (`El monto a invertir es de ${montoTotal} usd, la devolución total con un 55% extra será de ${devD} usd en un plazo de 54 meses`)
//         break
// }

//captura del DOM

//input del capital
let inversionPricipal = document.getElementById("inversion")
//boton siguiente para mostrar planes
let btnSiguiente = document.getElementById("sig")
let btnSimulador = document.createElement("button")
//boton simular para generar resultados
let btnCreado = document.getElementById("simular")
//boton atrás para ocultar planes
let btnAtras = document.getElementById("atras")

// outputs
let capital = document.getElementById("Cap")
let ganancia = document.getElementById("Gan")
let devolucion = document.getElementById("DevT")
let plazo = document.getElementById("PM")
let porcentajeInteres = document.getElementById("PI")

//FUNCIONES


function porcentaje (interes, inversionPricipal, cien){
    resultado = n * m / 100
}
function agregarBoton(){
    btnCreado.append(btnSimulador)
}
btnSimulador.innerText = `Simular`

function mostrarPlanes (){
    let planesDiv = document.getElementById("plan")
         for(let plan of listaPlanes){
             let nuevoPlanDiv = document.createElement("div")
             nuevoPlanDiv.classList.add("col-12", "col-md-6", "col-lg-3", "mb-3")
             nuevoPlanDiv.innerHTML = `
             <div id="${plan.id}" class="card" style="width: 18rem;">
             <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${plan.imagen}" alt="${plan.nombre} de ${plan.interes}">
             <h4 class="card-title">${plan.nombre}</h4>
             <p>Interés del ${plan.interes}</p>
             <p>Plazo: ${plan.plazo}</p>
             <button id="planSeleccionado${plan.id}" class="btn btn-outline-dark"> Seleccionar </button>
             </div>
             `
             planesDiv.appendChild(nuevoPlanDiv)
             let seleccionado = document.getElementById(`planSeleccionado${plan.id}`)
             function volver (){
                planesDiv.innerHTML = ""
            }
             seleccionado.addEventListener("click", volver)
             seleccionado.addEventListener("click", completar)
            }
}  

function completar (){
    plazo.innerText = `40%`
    porcentajeInteres.innerText = `planSeleccionado${plan.plazo}`
}


//EVENTOS
btnSiguiente.addEventListener("click", agregarBoton)
btnSiguiente.addEventListener("click", mostrarPlanes)





//OBJETOS Y ARRAYS
class plan {
    constructor(id, nombre, interes, plazo, imagen){
        this.id = id
        this.nombre = nombre,
        this.interes = interes,
        this.plazo = plazo,
        this.imagen = imagen
    }
}
const plan1 = new plan("1", "Plan A", "10%", "12 meses", "img.jpg")
const plan2 = new plan("2", "Plan B", "20%", "18 meses", "img.jpg")
const plan3 = new plan("3", "Plan C", "25%", "24 meses", "img.jpg")
const plan4 = new plan("4", "Plan D", "30%", "30 meses", "img.jpg")
const plan5 = new plan("5", "Plan E", "40%", "36 meses", "img.jpg")
const plan6 = new plan("6", "Plan F", "45%", "42 meses", "img.jpg")
const plan7 = new plan("7", "Plan G", "50%", "48 meses", "img.jpg")
const plan8 = new plan("8", "Plan H", "55%", "54 meses", "img.jpg")

const listaPlanes = [plan1, plan2, plan3, plan4, plan5, plan6, plan7, plan8]