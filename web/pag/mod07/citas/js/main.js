(function () {
    var vista = $("#vista");
    var fraseNueva = $("#nuevaCita");
    var frases = [
        "Todo tiene belleza pero no todo el mundo la puede ver. Confucio.",
        "Si dudas de ti mismo, estás vencido de antemano. Henrik Ibsen.",
        "El silencio del envidioso está lleno de ruidos. Khalil Gibran.",
        "La crítica es la fuerza del impotente. Alphonse de Lamartine."];
    actualizarVista();

    $("#btn").on("click", function () {
        frases.push(fraseNueva.val());
        actualizarVista();
        limpiarInput();
    });

    function limpiarInput() {
        fraseNueva.val("");
    };


    function actualizarVista() {
        vista.html("");
        for (var i = 0; i < frases.length; i++) {
            // vista.append("<p>" + frases[i] + "<button onclick='eliminarCita(" + i + ")'>" + "Eliminar</button></p>");
            vista.append("<p>" + frases[i]
                + "<button onclick='borrar(" + i + ")'>"
                + "Borrar</button></p>");
        }
    };

    function borrar(i) {
        console.log("dddd");
        frases.splice(i, 1);
        actualizarVista();
    }

}());