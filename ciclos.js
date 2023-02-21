let operacionesBancarias = [1300, 4000, -490, 7000, -3200];
function calcularMovimientos (movimientos) {
    let saldoDepositos = 0; 
    let saldoRetiros = 0; 
    let saldoFinal = 0; 

    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i] > 0) {
            saldoDepositos += movimientos[i]
        } else {
            saldoRetiros += movimientos[i]
        }
    }

    saldoFinal = saldoDepositos + saldoRetiros;

    return [saldoDepositos, saldoRetiros, saldoFinal]
}
//console.log(calcularMovimientos([1300, 4000, -490, 7000, -3200]));

function mensajeCliente(nombre, apellido, movimientos){
    let arrayDatos = calcularMovimientos(movimientos);
    console.log("Estimado " + nombre + " " + apellido + ":");
    console.log("El monto total de los depósitos es de: " + arrayDatos[0]);
    console.log("El monto total de los retiros es de: " + arrayDatos[1]);
    console.log("Por lo tanto, su saldo actual en la cuenta es de: " + arrayDatos[2]);
}
console.log(mensajeCliente("Gaspar", "Cordero", operacionesBancarias))