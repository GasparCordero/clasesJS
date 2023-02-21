let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];
let masVendida = peliculas.pop();
function nuevaLista(masVendida){
   let taquillera = masVendida.toUpperCase()
   let listaDefinitiva = peliculas.unshift(taquillera)
    return(peliculas)
}
console.log(nuevaLista(masVendida));

let peliculasEstreno = ["Counter-Strike" , "NOP", "Vértigo",  "Nick", "Avatar"];
let videojuego = peliculasEstreno.shift()
function listaM(peliculasEstreno, peliculas){
    let nuevoArray = peliculasEstreno.concat(peliculas)
    return(nuevoArray)
}
console.log(listaM(peliculasEstreno, peliculas));