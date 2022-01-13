jQuery(function() {
    //Añadir Filas
    $("#addButton").on("click", function() {
            var nombre = prompt("Escribe el nombre")
            var apellido = prompt("Escribe el apellido")
            var nota = prompt("Escribe la nota")
            var num = $("tr:last td:first").text() * 1 + 1 * 1
            $("tbody:last-child")
                .append("<tr><td>" + num + "</td><td>" + nombre + "</td><td>" + apellido + "</td><td>" + nota + "</td></tr>")
        })
        //Buscar
    var nombreApellidos = 1
    $("#alumnos button").on("click", function() {
        let texto = nombreApellidos == 1 ? "Buscar por apellido: " : "Buscar por nombre: "
        $("#alumnos label").html(texto)
        nombreApellidos = nombreApellidos == 1 ? nombreApellidos = 2 : nombreApellidos = 1
    })
    $("input").on("keyup", function() {
        $("tr").not(":first").each(function() {
            var textoABuscar = $("input").val().toUpperCase()
            $(this).find("td:eq(" + nombreApellidos + ")").text()
                .toUpperCase().indexOf(textoABuscar) == -1 ?
                $(this).hide() : $(this).show()
        })
    })
})