const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirNumero() {
rl.question('introduce un número (negativo para salir): ', (input) => {
    const numero = parseFloat(input);

    if (numero<0) {
        console.log('Número negativo ingresado. Fin del programa.');
        rl.close();
    } else {
        const cuadrado = numero * numero;
        console.log(`el cuadrado de ${numero} es ${cuadrado}`);
        pedirNumero(); 
    }
});
}

pedirNumero();