const readline = require('readline');

const rl = readline.createInterface({   //interfaz para mostrar preguntas y leer respuestas
    input: process.stdin,
    output: process.stdout
});

let total = 0;    // cuantos numeros llevamos
let sumaPos = 0;   // suma de los positivos
let cantPos = 0;   //cuantos positivos hubo
let sumaNeg = 0;   //suma de negativos
let cantNeg = 0;   //cuantos negativos hubo
let ceros = 0;     // cuantos ceros hubo

function pedir() {     //esta funcion se repite hasta que se ingresen 10 numeros
    rl.question(`Escribe el numero ${total + 1}: `, function(respuesta) {
        let num = parseFloat(respuesta);

        if(num>0) {
            sumaPos+=num;
            cantPos++;
        } else if (num < 0) {
            sumaNeg+=num;
            cantNeg++;
        } else {
            ceros++;
        }

        total++;

        if(total<10) {
            pedir();    //volver a pedir otro numero
        } else {

            let promedioPos=cantPos > 0? (sumaPos/cantPos) : 0;  //calculo de promedios, pero solo si hubo numeros positivos o negativos
            let promedioNeg=cantNeg > 0? (sumaNeg/cantNeg) : 0;

            console.log("promedio de positivos:", promedioPos);
            console.log("promedio de negativos:", promedioNeg);
            console.log("cantidad de  ceros:", ceros);

            rl.close();  //cierra
        }
    });
}

pedir();   //inicio funcion