function alquiler(tipo, dias, silla){
    let totalA = 0
    let totalB = 0
    switch (tipo) {
        case "compacto":
            totalA = 14000 * dias
            break;
        case "mediano":
            totalA = 17000 * dias
            break;
        case "camioneta":
            totalA = 28000* dias
        default:
            "ingresar un tipo de vehiculo valido"
            break;
    }
    if (silla == true) {
        totalB = 1200 * dias
    } else {
        totalB = 0
    }
        return ("Estimado cliente: en base al tipo de vehículo alquilado: " + tipo + ", considerando los " + dias + " dias utilizados y si contó con servicio de silla para bebes, el monto total a pagar es de $" + (totalA + totalB));
    }
console.log(alquiler("mediano", 18, true));