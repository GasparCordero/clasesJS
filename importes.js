function sumatoriaBajoImporte(array) {
    let sumatoria = 0;
    for ( i = 0; i <= array.length; i++){
        let mes = array[i]
        if ( mes <= 1000 && mes > 0){
            sumatoria += mes;
    }
}
    return(sumatoria)
}
console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));