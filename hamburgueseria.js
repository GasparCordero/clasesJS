let armaTuHamburguesa = (tipo, jamon, queso, ketchup, mayonesa, mostaza, tomate, lechuga, cebolla) =>{
   let totalAPagar = 0  
       switch (tipo) {
        case "Carne a la parrilla":
            totalAPagar += 1800
            break;
        case "Pollo":
            totalAPagar += 1500
            break;
        case "Veggie":
            totalAPagar += 1200
            break; 
        default:
            "No poseemos el tipo de hamburguesa requerida, por favor seleccione una de las detalladas a continuacion: Carne a la parrilla, Pollo o Veggie"
            break;
    }
    if (jamon == true){
        totalAPagar += 30;
    } if (queso == true){
        totalAPagar += 25;
    } if (ketchup == true){
        totalAPagar += 5;
    } if (mayonesa == true){
        totalAPagar += 5;
    } if (mostaza == true){
        totalAPagar += 5;
    } if (tomate == true){
        totalAPagar += 15;
    } if (lechuga == true){
        totalAPagar += 10;
    } if (cebolla == true){
        totalAPagar += 10;
    }
    return (totalAPagar);
}
//console.log(armaTuHamburguesa("Pollo", true, true, true, true, true, true, true, true));

let mensaje = (nombre, apellido, armaTuHamburguesa) => "Estimado " + nombre + " " + apellido + ", el monto total a pagar es de: $" + armaTuHamburguesa;

console.log(mensaje("Gaspar", "Cordero", armaTuHamburguesa("Carne a la parri", true, true, true, true, true, true, true, true)));