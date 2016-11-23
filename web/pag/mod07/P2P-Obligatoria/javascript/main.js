localStorage.str = localStorage.str || JSON.stringify(citas);
var galeria = JSON.parse(localStorage.str);
var t, actual;

function select(i) {
    actual = i;
    $("nav a")
        .removeClass("on off")
        .addClass(function (j) { return (j===i) ? "on" : "off";});

    $("#persona").html(galeria[i].persona);
    $("#frase").html(galeria[i].frase);
    $("#foto").attr("src", galeria[i].foto);

    clearTimeout(t);
    t = setTimeout(function() {select((i + 1) % galeria.length);}, 2000);
}

function generar_selector() {
    var selector = $("#selector");

    selector.html("");

    galeria.forEach(function (elem, i) {
        selector.append("<li><a onClick='select(" + i + ")'></a></li>");
    });
}

function setClass(){
    if ($("#datos").hasClass("active")) {
        t = setTimeout(function() {select((actual + 1) % galeria.length);}, 2000);
        $("#datos").removeClass("active");
        $("#datos").css("display", "none");
        $("#editar img").attr("src", "images/carat-d-white.svg");
    } else {
        clearTimeout(t);
        $("#datos").addClass("active");
        $("#datos").css("display", "block");
        $("#editar img").attr("src", "images/carat-u-white.svg");
    };
}
function Confirm() {
    var msj = confirm("¿Estas seguro de querer borrar la lista de citas?");
    if (msj) {
        localStorage.removeItem('str');
        localStorage.str = JSON.stringify(citas);
        galeria = JSON.parse(localStorage.str);
        generar_selector();
        select(0);
    }
    else {
        return false;
    }
}

$(function () {
    generar_selector();

    $("#editar").on("click", function(){
        setClass();
        $("#persona_d").html(galeria[actual].persona);
        $("#frase_d").html(galeria[actual].frase);
        $("#foto_d").html(galeria[actual].foto);
    })


    $("#nuevo").on("click", function(){
        setClass();
        galeria = JSON.parse(localStorage.str);
        actual = galeria.push({
                persona:$("#persona_d").html(),
                frase:$("#frase_d").html(),
                foto:$("#foto_d").html(),
            }) - 1;
        localStorage.str = JSON.stringify(galeria);
        generar_selector();
        select(actual);
    })

    $("#guardar").on("click", function(){
        setClass();
        galeria = JSON.parse(localStorage.str);
        galeria[actual].persona=$("#persona_d").html();
        galeria[actual].frase=$("#frase_d").html();
        galeria[actual].foto=$("#foto_d").html();
        localStorage.str = JSON.stringify(galeria);
        generar_selector();
        select(actual);
    })

    $("#borrar").on("click", function(){
        setClass();
        galeria = JSON.parse(localStorage.str);
        galeria.splice(actual, 1);
        localStorage.str = JSON.stringify(galeria);
        generar_selector();
        select(actual);
    })

    select(0);
});