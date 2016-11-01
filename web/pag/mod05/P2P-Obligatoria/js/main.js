$(function () {
    var autor = "Hernán Velásquez";
    var fecha = new Date();
    var saludo = $("#saludo");
    num = $("#n1");
    var acumulado = 0;
    var opcion;

    if (fecha.getHours() <= 7) {
        saludo.html("Buenas noches, " + "bienvenido a la calculadora de " + autor);
    } else if (fecha.getHours() <= 12) {
        saludo.html("Buenas días, " + "bienvenido a la calculadora de " + autor);
    } else if (fecha.getHours() <= 19) {
        saludo.html("Buenas tarde, " + "bienvenido a la calculadora de " + autor);
    } else {
        saludo.html("Buenas noches, " + "bienvenido a la calculadora de " + autor);
    }

    num.on("focus", function () {
        num.val("");
    });

    $("#cuadrado").on("click", function () {
        num.val(num.val() * num.val());
    });

    $("#inverso").on("click", function () {
        num.val(1 / num.val());
    });

    $("#raizCuadrada").on("click", function () {
        num.val(Math.sqrt(num.val()));
    });

    $("#dosALaEne").on("click", function () {
        num.val(Math.pow(2, num.val()));
    });


    $("#nFactorial").on("click", function () {
        var factorial = 1;
        var n = num.val();
        for (var i = 2; i <= n; i++) {
            factorial *= i;
        }
        num.val(factorial);
    });

    $("#parteEntera").on("click", function () {
        if (num.val() > 0) {
            num.val(Math.floor(num.val()))
        } else {
            num.val(Math.ceil(num.val()))
        }
    });

    $("#suma").on("click", function () {
        acumulado = +num.val();
        opcion = "+"
    });

    $("#resta").on("click", function () {
        acumulado = +num.val();
        opcion = "-"
    });

    $("#multiplicacion").on("click", function () {
        acumulado = +num.val();
        opcion = "*"
    });

    $("#division").on("click", function () {
        acumulado = +num.val();
        opcion = "/"
    });

    $("#potencia").on("click", function () {
        acumulado = +num.val();
        opcion = "potencia"
    });

    $("#sumaNNumeros").on("click", function () {
        var arreglo = num.val().split(",");
        var suma = 0;
        for (i = 0; i < arreglo.length; i++) {
            suma += +arreglo[i];
        }
        num.val(suma);
    });

    $("#productoNNumeros").on("click", function () {
        var arreglo = num.val().split(",");
        var producto = 1;
        for (i = 0; i < arreglo.length; i++) {
            producto *= arreglo[i];
        }
        num.val(producto);
    });

    $("#calcular").on("click", function () {
        if (opcion === "+") {
            num.val(+acumulado + +num.val());
        } else if (opcion === "-") {
            num.val(+acumulado - +num.val());
        } else if (opcion === "/") {
            num.val(+acumulado / +num.val());
        } else if (opcion === "*") {
            num.val(+acumulado * +num.val());
        } else if (opcion === "potencia") {
            num.val(Math.pow(+acumulado, +num.val()));
        }
    });
});
