jQuery(function() {
    $(document).on("keypress", function(event) {
        let tecla = event.key || event.keyIdentifier;
        let elem = $('#pruebas');
        switch (tecla) {
            case 'r':
                elem.removeClass().addClass('rojo');
                break;
            case 'a':
                elem.removeClass().addClass('amarillo');
                break;
            case 'b':
                elem.removeClass().addClass('blanco');
                break;
        }
    });
});