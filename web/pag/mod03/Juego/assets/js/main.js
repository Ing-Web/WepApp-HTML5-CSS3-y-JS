function mover() {
    var ancho = screen.width;
    // var alto = screen.height;
    var x = Math.round(Math.random() * (ancho*.8 - 120) + 1);
    var y = Math.round(Math.random() * (600 - 60) + 1);

    var cuadrado = document.getElementById("cuadrado");
    cuadrado.style.marginLeft = x + "px";
    cuadrado.style.marginTop = y + "px";

    // var otros = document.getElementById("otros");
    // otros.innerHTML = x + ", " + y + "Ancho y alto son: " + ancho + ", " + alto;
}
