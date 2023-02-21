function asientosDisponibles(asientosLibres, asientoRequerido){
    let mensaje
     if(asientosLibres.indexOf(asientoRequerido) != -1){
     mensaje =  "Felicitaciones, el asiento número " + asientoRequerido + " está disponible";
     } else{
     mensaje = "Lo sentimos, el asiento número " + asientoRequerido + " está ocupado, pero aún quedan " + asientosLibres.length + " asientos disponibles";
     }
     return(mensaje)
     }
console.log(asientosDisponibles([12, 32, 18, 54], 24));

