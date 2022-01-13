window.addEventListener("load", function() {
    var tabla = document.querySelector("table")
    var filas = document.querySelectorAll("tr")
    var celdas = document.querySelectorAll("td,th")

    tabla.style.borderCollapse = "collapse"

    let index = 1
    for (let fila of filas) {
        if (index == 1) {
            colorFondo = "darkkhaki"
            fila.style.backgroundColor = colorFondo
        } else {
            let colorFondo = ""
            if (index % 2 == 0) {
                colorFondo = "lemonchiffon"
                fila.style.backgroundColor = colorFondo
            }
            fila.addEventListener("mouseenter", function() {
                fila.style.backgroundColor = "khaki"
            })
            fila.addEventListener("mouseleave", function() {
                fila.style.backgroundColor = colorFondo
            })
        }
        index++
    }

    for (let celda of celdas) {
        celda.style.border = "1px solid grey"
        celda.style.padding = "10px"
    }
    var inputBuscar = document.querySelector("#alumnos input")
    var botonCambiar = document.querySelector("#alumnos button")

    var nombreApellidos = 1

    botonCambiar.addEventListener("click", function() {
            if (nombreApellidos == 1) {
                document.querySelector("#alumnos label").innerHTML = "Buscar por apellidos: "
                nombreApellidos = 2
            } else {
                document.querySelector("#alumnos label").innerHTML = "Buscar por nombre: "
                nombreApellidos = 1
            }
        })
        //Buscar
    var filas = document.querySelectorAll("tr")

    inputBuscar.addEventListener("keyup", function() {
            let textoABuscar = inputBuscar.value.toUpperCase()
            for (let i = 1; i < filas.length; i++) {
                celda = filas[i].getElementsByTagName("td")[nombreApellidos]
                if (celda.textContent.toUpperCase().indexOf(textoABuscar) == -1) {
                    filas[i].style.display = "none"
                } else {
                    filas[i].style.display = ""
                }
            }
        })
        //Añadir Filas
    var boton = document.getElementById("addButton")
    boton.addEventListener("click", function() {
        var nombre = prompt("Escribe el nombre")
        var apellido = prompt("Escribe el apellido")
        var nota = prompt("Escribe la nota")
        var filas = document.getElementsByTagName("tr")
        var ultimaFila = filas[filas.length - 1]
        var num = ultimaFila.querySelectorAll("td")[0].innerText * 1 + 1 * 1

        var nuevaFila = document.createElement("tr")
        nuevaFila.innerHTML = "<tr><td>" + num + "</td><td>" + nombre + "</td><td>" + apellido + "</td><td>" + nota + "</td></tr>"
        ultimaFila.parentElement.appendChild(nuevaFila)
    })
})