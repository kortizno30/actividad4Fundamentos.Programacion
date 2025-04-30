let producto = 1;
let contador = 0;
let numero = 1;

while (contador < 10) {
    producto = producto * numero;
    contador = contador + 1;
    numero = numero + 2;
}

console.log("El producto de los 10 primeros numeros impares es:", producto);