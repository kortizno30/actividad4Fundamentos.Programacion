const readline = require('readline'); //lectura de lo que el usuaria va a escribir

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalFacturado=0; //variables para acumlar resultados
let litrosArticulo1=0;
let facturaMayores600=0;
let cantidadFacturas=0;

function pedirFactura() {  //esta funcion pide datos de una factura
    console.log(`\nFactura #${cantidadFacturas+1}`);

    rl.question('Codigo del articulo: ', function(CodArticulo) {
        rl.question('cantidad vendidad (litros): ', function(cantidadLitros) {
            rl.question('precio por litro: ', function(precioPorLitro) {

                let codigoNum=parseInt(CodArticulo);
                let litros=parseFloat(cantidadLitros);
                let precio= parseFloat(precioPorLitro);

                let totalFactura = litros*precio;  // calculo del total de esta factura
                totalFacturado += litros;
            

            if (codigoNum ===1) {  // si es articulo 1, suma los 100 litros
                litrosArticulo1 += litros;
            }

            if (totalFactura>600) {    // si la factura supera 600, la contamos
                facturaMayores600++;
            }

            cantidadFacturas++;

            if (cantidadFacturas <5) {  //si faltan facturas se piden las demas
                pedirFactura();
            } else {

                console.log("\n Resumen final:");
                console.log("total facturado: $" + totalFacturado.toFixed(2));
                console.log("litros vendidos del articulo 1:", litrosArticulo1);
                console.log("facturas mayores 600", facturaMayores600);
                rl.close();
            }
        });
    });
});
}

pedirFactura()