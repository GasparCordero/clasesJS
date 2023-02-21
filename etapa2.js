let autosImportados = require("./autos")

const concesionaria = {
   autos : autosImportados,
   buscarAuto : function(patente){
      let autoBuscado = this.autos.find(function(auto){
         return patente == auto.patente
      });
      if (autoBuscado!= undefined){
         return autoBuscado
      }else{
         return null 
      }
   }
}