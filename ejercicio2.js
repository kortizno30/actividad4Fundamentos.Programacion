const readline = require('readline');
                                      
const numeroSecreto = Math.floor(Math.random() * 100) + 1;    
let intento;
let intentos = 0;

console.log('¡Bienvenido al Juego de adivinanza!');


do {
    intento = parseInt(readline.question("Adivina el número (entre 1 y 100): "));

    if (intento < numeroSecreto) {
        console.log("El número es mayor");
    } else if (intento > numeroSecreto) {
        console.log("El número es menor");
    } else {
        console.log("¡Correcto! Adivinaste el número.");
    }

} while (intento !== numeroSecreto);