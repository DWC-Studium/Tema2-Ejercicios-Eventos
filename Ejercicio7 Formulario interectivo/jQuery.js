jQuery(function() {
    $('#contacto').on("submit", function(event) {
        alert("Validando los datos...");
        event.preventDefault();
    });
});