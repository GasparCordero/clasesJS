let perfil = "nada";
if (perfil == "administrador") {
    console.log("Usted tiene todos los privilegios de uso del sistema")
}
else if(perfil == "asistente") {
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos")
}
else if(perfil == "invitado") {
    console.log("Usted solo tiene permiso de consultar datos")
}
 else{
    console.log("Debe especificar un perfil valido")
}