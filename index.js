// Ejercicio 1: Configuración básica
// console.log('¡Hola desde Node.js!');

// Ejercicio 2: Manejo de argumentos básico
// process.argv contiene: [ruta de node, ruta del script, ...argumentos]
// Los argumentos del usuario empiezan desde el índice 2
const argumentos = process.argv.slice(2);

if (argumentos.length > 0) {
  console.log(`Hola ${argumentos[0]}`);
} else {
  console.log('Hola mundo');
}

