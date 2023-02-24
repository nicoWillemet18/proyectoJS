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
const plan3 = new plan("3", "Plan C", "25%", "24 meses", "img1.jpg")
const plan4 = new plan("4", "Plan D", "30%", "30 meses", "img1.jpg")
const plan5 = new plan("5", "Plan E", "40%", "36 meses", "img2.jpg")
const plan6 = new plan("6", "Plan F", "45%", "42 meses", "img2.jpg")
const plan7 = new plan("7", "Plan G", "50%", "48 meses", "img3.jpg")
const plan8 = new plan("8", "Plan H", "55%", "54 meses", "img3.jpg")

const listaPlanes = [plan1, plan2, plan3, plan4, plan5, plan6, plan7, plan8]

//captura del DOM

//input del capital
let inversionPrincipal = document.getElementById("inversion")
//boton siguiente para mostrar planes
let btnSiguiente = document.getElementById("sig")
// boton para reiniciar simulador
let reiniciar = document.getElementById("reset")
// input de monto
let form = document.getElementById("form")



// outputs
let capital = document.getElementById("Cap")
let ganancia = document.getElementById("Gan")
let devolucion = document.getElementById("DevT")
let plazo = document.getElementById("PM")
let porcentajeInteres = document.getElementById("PI")

//FUNCIONES
const cien = 100;
let resultado = 0;

function suma (n, m){
    resultado = n + m
    return resultado
}
function porcentaje (n, m){
    resultado = (n * m) / cien
    return resultado
}

function toggleButton()
            {
                let inversionPrincipal = document.getElementById("inversion").value
                if (inversionPrincipal) {
                    document.getElementById('sig').disabled = false;
                } else {
                    document.getElementById('sig').disabled = true;
                }
}

function mostrarPlanes (){
        let planesDiv = document.getElementById("plan")
        for(let plan of listaPlanes){
             let nuevoPlanDiv = document.createElement("div")
             nuevoPlanDiv.classList.add("g-col-12", "g-col-md-6", "col-lg-4", "g-mb-6")
             nuevoPlanDiv.innerHTML = `
             <div id="${plan.id}" class="card" style="width: 16rem;">
             <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${plan.imagen}" alt="${plan.nombre} de ${plan.interes}">
             <h4 class="card-title">${plan.nombre}</h4>
             <p>Interés del ${plan.interes}</p>
             <p>Plazo: ${plan.plazo}</p>
             <button id="${plan.id}" class="btn btn-outline-dark"> Simular </button>
             </div>
             `
             planesDiv.appendChild(nuevoPlanDiv)
             let seleccionado = document.getElementById(`${plan.id}`)
             function volver (){
                planesDiv.innerHTML = ""
            }
            
             seleccionado.addEventListener("click", volver)
             seleccionado.addEventListener("click", completar)
        }
}           

function completar (e){
    const id = e.target.id;
    const encontrado = listaPlanes.find (p => p.id == id)
    capital.innerText = (inversionPrincipal.value+ "usd")
    ganancia.innerText = (porcentaje(parseInt(encontrado.interes), inversionPrincipal.value)+ "usd")
    devolucion.innerText = (suma(parseInt(inversionPrincipal.value), parseInt(ganancia.value)) + " " + "usd")
    plazo.innerText = `${encontrado.plazo}`
    porcentajeInteres.innerText = `${encontrado.interes}`
        const info = {
            capital: (capital.value), 
            ganancia: (ganancia.value),
            devolucion: (devolucion.value),
            plazo: (plazo.value),
            porcentaje: (porcentajeInteres.value),
        }
        const infojson = JSON.stringify(info)         
        localStorage.setItem ("datos", infojson)
} 

const infoInicial = {
    capital: "--",
    ganancia: "--",
    devolucion: "--",
    plazo: "--",
    porcentaje: "--",
}

const datosStorage = JSON.parse(localStorage.getItem("datos")) || infoInicial 

function datosGuardados (datosStorage) {
    capital.innerText = (datosStorage.capital)
    ganancia.innerText = (datosStorage.ganancia)
    devolucion.innerText = (datosStorage.devolucion)
    plazo.innerText = (datosStorage.plazo)
    porcentajeInteres.innerText = (datosStorage.porcentaje)
}

datosGuardados(datosStorage)

function vaciar () {
    localStorage.clear("datos");
    form.reset();
    porcentajeInteres.innerText = "--"
    plazo.innerText = "--"
    capital.innerText = "--"
    ganancia.innerText = "--"
    devolucion.innerText = "--"
}
function consultar (){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Se eliminarán los resultados obtenidos',
        text: "¿Desea continuar?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Reiniciar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          addEventListener("click", vaciar)
          return;
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
        }
      })
}

//EVENTOS
btnSiguiente.addEventListener("click", mostrarPlanes)
reiniciar.addEventListener("click", consultar)
form.addEventListener("submit", function(event){
    event.preventDefault();
}) 

  
