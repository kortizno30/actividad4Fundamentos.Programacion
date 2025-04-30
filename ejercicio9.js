const readline = require('readline'); //Esto sirve para leer lo que escribe usuario

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sueldos=[]; //datos sueldos
let cantidad=0; // numero de sueldos que el usuario va usar
let contador=0; // se cuenta cuantos sueldos escribio el usuario

rl.question ('¿cuantos sueldos vas a ingresar?', function(respuesta) { //esto para preguntar cuantos sueldos va ingresar
    cantidad=parseInt(respuesta);

    pedirSueldo();  //llamo a una funcion que empieza a pedir los sueldos
});

function pedirSueldo() { //esta funcion se repite hasta que el usuario escriba todos los sueldos
    if (contador<cantidad){
        rl.question(`escribe el sueldo #${contador+1}: `, function(sueldoTexto) {
            let sueldo = parseFloat(sueldoTexto); //convierte a numeros decimales
            sueldos.push(sueldo); //guarda ese sueldo en la lista
            contador++; //sumamos 1 al contador
            pedirSueldo(); //volver a pedir otro sueldo(asta completar datos)
        });
    }else {

        let sueldoMaximo = Math.max(...sueldos); // busca el mas alto con mat.max
        console.log("\n el sueldo mas alto es: $" + sueldoMaximo.toFixed(2)); //muestra los resultados
        rl.close();
    }
}
    
