var autor = "Hernán Velásquez";
var fecha = new Date();
var saludo = document.getElementById("saludo");
var num = document.getElementById("n1");
var acumulado = 0;
var opcion;


if (fecha.getHours() <= 7){
    saludo.textContent= "Buenas noches, " + "bienvenido a la calculadora de " +autor;
}else if (fecha.getHours() <= 12){
    saludo.textContent= "Buenas días, " + "bienvenido a la calculadora de " +autor;
}else if (fecha.getHours() <= 19) {
    saludo.textContent = "Buenas tarde, " + "bienvenido a la calculadora de " + autor;
}else{
        saludo.textContent= "Buenas noches, " + "bienvenido a la calculadora de " +autor;
}

function vaciar () {
    num.value = "";
}

function cuadrado() {
    num.value = num.value * num.value;
}

function inverso() {
    num.value = 1/num.value;
}

function raizCuadrada() {
    num.value = Math.sqrt(+num.value);
}

function parteEntera() {
    if (+num.value > 1 ){
        num.value = Math.floor(+num.value);
    }else{
        num.value = Math.ceil(+num.value);
    }
}

function suma() {
    acumulado = +num.value;
    opcion = "+";
}

function resta() {
    acumulado = +num.value;
    opcion = "-";
}

function division() {
    acumulado = +num.value;
    opcion = "/";
}

function multiplicacion() {
    acumulado = +num.value;
    opcion = "*";
}

function potencia() {
    acumulado = +num.value;
    opcion = "potencia";
}

function calcular() {
    if (opcion==="+"){
        num.value = +acumulado + +num.value;
    }else if(opcion==="-"){
        num.value = +acumulado - +num.value;
    } else if(opcion==="/"){
        num.value = +acumulado / +num.value;
    }else if(opcion==="*"){
        num.value = +acumulado * +num.value;
    }else if(opcion==="potencia"){
        num.value = Math.pow(+acumulado, +num.value);
    }
}