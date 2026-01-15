function init() {
console.log("Iniciando aplicación...");

// TODO Ejercicio 1: declarar variables primitivas
let precioVivienda = 0;
let porcentajeFinanciacion = 80;
let isFavorite = false;

let nombre = "Mi escenario";
let esFavorito = false;
let precio = 200000;

// Imprimir cada variable por separado en la consola
console.log(precioVivienda);
console.log(porcentajeFinanciacion);
console.log(isFavorite);
console.log(nombre);
console.log(esFavorito);
console.log(precio);

// Convertir precio a string usando toString() e imprimirlo
let precioString = precio.toString();
console.log(precioString);

// TODO Ejercicio 2: seleccionar formulario y añadir event listener
const form = document.getElementById('calc-form');
if (form) {
form.addEventListener('submit', handleFormSubmit);
}

console.log("Aplicación cargada correctamente");
}

function handleFormSubmit(event) {
event.preventDefault();

// TODO Ejercicio 2: obtener valores del formulario con FormData
const formData = new FormData(event.target);
const precioVivienda = formData.get('precio-vivienda');
const porcentajeFinanciacion = formData.get('porcentaje-financiacion');
const plazo = formData.get('plazo');
const interes = formData.get('interes');
const fechaInicio = formData.get('fecha-inicio');

// TODO Ejercicio 2: convertir valores numéricos e imprimir en consola
const precioViviendaNum = parseFloat(precioVivienda);
const porcentajeFinanciacionNum = parseFloat(porcentajeFinanciacion);
const plazoNum = parseFloat(plazo);
const interesNum = parseFloat(interes);

console.log('Precio vivienda:', precioViviendaNum);
console.log('Porcentaje financiación:', porcentajeFinanciacionNum);
console.log('Plazo:', plazoNum);
console.log('Interés:', interesNum);
console.log('Fecha inicio:', fechaInicio);
}

document.addEventListener("DOMContentLoaded", init);

