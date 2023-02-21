let peliculasFavoritas = require("./peliculas");

//console.log(peliculasFavoritas);
let fs = require("fs");
let lectura = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8");

console.log(lectura);