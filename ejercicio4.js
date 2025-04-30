const readline = require('readline');   //libreria readline que ya viene en node.js

const rl = readline.createInterface({    //interfaz para leer lo que el usuario escriba
    input: process.stdin,
    output: process.stdout
});

rl.question('introduce un numero para calcular su factorial: ', function(respuesta) {    //pregunta al usuario

    let numero = parseInt(respuesta);

    let factorial = 1;    //declaroamos la variable factorial y empezamos desde1

    for (let i = 1; i <= numero; i++) {    //bucle para calcular factorial
        factorial = factorial * i;       // multiplica y guarda el resultado
    }

        console.log(`el factorial de ${numero} es: ${factorial}`);    //resultado final

        rl.close();    // cierre
    });