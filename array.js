let electrodomesticos = ["TV", "Microondas", "Licuadora", "Juguera", "Tostadora", "Cafetera"];
let elPrimero = electrodomesticos.shift();
let pasadoAlFinal = electrodomesticos.push(elPrimero);
//console.log(electrodomesticos);
let nuevaLista = electrodomesticos.push("Panquequera");
let listaDefinitiva = electrodomesticos.push("Lavaropas");
//console.table(electrodomesticos);
function encontrar(palabra){
    if (electrodomesticos.indexOf(palabra) >= 0)
    return ("Producto encontrado")
    else{
    return ("Producto buscado no existe")
}}
//console.log(encontrar("Limon"));
console.log(electrodomesticos.join(" "));

let reemplazante = (palabraA, palabraB) => electrodomesticos.replace(palabraA, palabraB);
console.log(reemplazante("Licuadora", "Heladera"));

