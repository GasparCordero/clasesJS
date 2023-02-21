function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
      let mes = unPeriodo[i];
          if(mes > 0)
              cantidad++;
        }
    return cantidad;
  }
  
  console.log(cantidadDeMesesConGanancia([1,2,-2]));

  function saldosDeMesesConGanancia(unPeriodo) {
    let nuevoArray = [];
    for (let i = 0; i < unPeriodo.length;i++) {
      let mes = unPeriodo[i]
      if(mes > 0){
      nuevoArray.push(unPeriodo[i])
      }}
    return (nuevoArray);
  }
  console.log(saldosDeMesesConGanancia([45, 13, -2, 12]))