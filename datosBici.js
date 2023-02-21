let fs = require("fs");

let rutaArchivo = "./bicicletas.json";

let bicicletasJSON = fs.readFileSync(rutaArchivo, "utf-8");

let bicicletasArray = JSON.parse(bicicletasJSON);
let bicicletasAgain = JSON.stringify(bicicletasArray)

console.table(bicicletasArray);