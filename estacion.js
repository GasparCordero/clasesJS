function reporteDePasajeros(cantEstacionesAvanzo){
    let cantPasajeros = 200
    let reporte = [];
    for(let estacion = 0; estacion <= cantEstacionesAvanzo; estacion++){
        if (estacion == 5){
            cantPasajeros += 40;
        }else if(estacion != 0){
            cantPasajeros = cantPasajeros += 20
        }
        reporte.push("En la estacion " + estacion + " hay " + cantPasajeros + " pasajeros arriba del tren")
        }
    return reporte;
    }; 

    console.log(reporteDePasajeros(10));