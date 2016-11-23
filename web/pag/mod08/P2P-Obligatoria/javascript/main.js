var t, actual;

function select(i){
    actual = i;

    $("nav a")
        .removeClass("on off")
        .addClass(function(j){return(j===i)?"on":"off";});

    $("#persona").html(localStorage.galeria[i].persona);
    $("#frase").html(localStorage.galeria[i].frase);
    $("#foto").attr("src", localStorage.galeria[i].foto);

    clearTimeout(t);
    t = setTimeout( function(){select((i + 1) % localStorage.galeria.length);}, 2000);
}

function generar_selector(){ // regenera la botonera
    var selector = $("#selector");

    selector.html("");
    localStorage.galeria.forEach(function(elem,i) {
        selector.append("<li><a onClick='select("+i+")'></a></li>");
    });
}

$(function (){
    generar_selector();

    $("#editar").on("click", function(){
        clearTimeout(t);
        $("#persona_d").html(localStorage.galeria[actual].persona);
        $("#frase_d").html(localStorage.galeria[actual].frase);
        $("#foto_d").html(localStorage.galeria[actual].foto);

        $("#datos").css("display", "block");
    })

    $("#guardar").on("click", function(){
        clearTimeout(t);
        localStorage.galeria[actual].persona = $("#persona_d").html(),
            localStorage.galeria[actual].frase = $("#frase_d").html(),
            localStorage.galeria[actual].foto = $("#foto_d").html(),

        //oculta cajetines
        $("#datos").css("display", "none")

        generar_selector();
        select(0);
    })

    $("#borrar").on("click", function(){
        $("#datos").css("display", "none");

        actual = localStorage.galeria.splice(actual,1);
        generar_selector();
        select(0);
    });

    $("#nuevo").on("click", function(){
        $("#datos").css("display", "none");

        actual = localStorage.galeria.push({
            persona:$("#persona_d").html(),
            frase:$("#frase_d").html(),
            foto:$("#foto_d").html()
        }) - 1;

        generar_selector();

        select(actual);
    })

    select(0);
});