function menciona(texto, palabra){
    if (texto.indexOf(palabra) >= 0)
    return (true)
    else{
    return (false)
    }
}
console.log(menciona("Se dice de mi", "mi"));