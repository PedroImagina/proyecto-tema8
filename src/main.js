let form;

function init() {
console.log("Iniciando aplicación...");

form = document.getElementById("calc-form");
if (form) {
form.addEventListener("submit", handleFormSubmit);
}

console.log("Aplicación cargada correctamente");
}

function handleFormSubmit(event) {
event.preventDefault();

const formData = new FormData(form);

// TODO Ejercicio 1: obtener valores del formulario e imprimir si son null
const precioVivienda = formData.get('precio-vivienda');
const porcentajeFinanciacion = formData.get('porcentaje-financiacion');
const plazo = formData.get('plazo');
const interes = formData.get('interes');
const fechaInicio = formData.get('fecha-inicio');

// Verificar si cada valor es null
if (precioVivienda === null) {
console.log('precio-vivienda es null');
} else {
console.log('precio-vivienda tiene valor:', precioVivienda);
}

if (porcentajeFinanciacion === null) {
console.log('porcentaje-financiacion es null');
} else {
console.log('porcentaje-financiacion tiene valor:', porcentajeFinanciacion);
}

if (plazo === null) {
console.log('plazo es null');
} else {
console.log('plazo tiene valor:', plazo);
}

if (interes === null) {
console.log('interes es null');
} else {
console.log('interes tiene valor:', interes);
}

if (fechaInicio === null) {
console.log('fecha-inicio es null');
} else {
console.log('fecha-inicio tiene valor:', fechaInicio);
}

// TODO Ejercicio 2: crear array de errores y añadir mensajes de error
const errors = [];
errors.push('Precio requerido');
errors.push('Plazo requerido');
console.log('Array de errores:', errors);

// TODO Ejercicio 3: establecer valores por defecto usando operador OR
const fechaInicioDefault = fechaInicio || new Date().toISOString().slice(0, 7);
const porcentajeFinanciacionDefault = porcentajeFinanciacion || '80';

console.log('Fecha inicio (con valor por defecto):', fechaInicioDefault);
console.log('Porcentaje financiación (con valor por defecto):', porcentajeFinanciacionDefault);

// TODO Ejercicio 4: declarar valorIndefinido y valorNulo e imprimirlos
let valorIndefinido = undefined;
let valorNulo = null;

console.log('valorIndefinido:', valorIndefinido);
console.log('valorNulo:', valorNulo);
}

document.addEventListener("DOMContentLoaded", init);

