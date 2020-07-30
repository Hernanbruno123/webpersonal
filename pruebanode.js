const fs = require('fs');

const nombres = [
    'Hernan', 'Pepe'
 ]
 
 nombres.map((nombre) => {
 // Escribir en un archivo (La cadena \n se utiliza para escribir un salto de línea)
 fs.appendFile('nombres.txt', nombre + '\n', (err) => {
    // Si hay error, devolverlo
    if (err) throw err;
    // Sino, mostrar mensaje en consola
    console.log('Guardado!');
 })
 })
 