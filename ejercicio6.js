const readline = require ('readline');    //libreria para leer el texto

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('escribe un numero entre 0 y 10: ', function(respuesta) {    //pedir el numero al usuario
    let numero = parseInt(respuesta);

    if(numero >=0 && numero <= 10) {
        console.log (`tabla del ${numero}:`);
    
        for (let i = 0; i <= 10; i++) {    //mostramos la tabla del numero
            console.log(`${numero} * ${i} = ${numero * i}`);
        }

    } else{
        console.log("Ese numero no esta entre 0 y 10.");
    }

    rl.close();    //finaliza el programa
});