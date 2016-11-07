(function () {
    var fecha = document.getElementById("fecha"),
        hora = document.getElementById("hora"),
        segundos = document.getElementById("segundos"),
        indicador = document.getElementById("indicador");

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    setInterval(actualizarReloj, 1000);

    function actualizarReloj() {
        var ahora = new Date();
        var anoActual = ahora.getFullYear(),
            mesActual = ahora.getMonth(),
            diaSemanaActual = ahora.getDay(),
            diaMesActual = ahora.getDate(),
            horaActual = ahora.getHours(),
            minutoActual = ahora.getMinutes(),
            segundoActual = ahora.getSeconds();

        indicador.innerHTML = "AM";

        if (diaMesActual < 10) {
            diaMesActual = rellenar(diaMesActual);
        }
        if (segundoActual < 10) {
            segundoActual = rellenar(segundoActual);
        }
        if (minutoActual < 10) {
            minutoActual = rellenar(minutoActual);
        }
        if (horaActual > 12) {
            horaActual = horaActual - 12;
            indicador.innerHTML = "PM";
        }
        if (horaActual < 10) {
            horaActual = rellenar(horaActual);
        }

        fecha.textContent = dias[diaSemanaActual] + " " + diaMesActual + " de " + meses[mesActual] + " de " + anoActual;
        hora.innerHTML = horaActual + ":" + minutoActual + ":";
        segundos.innerHTML = segundoActual;
    };
    function rellenar(valor) {
        return "0" + valor;
    }
}());
