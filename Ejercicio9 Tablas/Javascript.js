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
})