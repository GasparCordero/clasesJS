let operador = "*"
let num1 = 52
let num2 = 32
switch (operador) {
    case "+":
    var resultado = (num1 + num2)
        console.log(resultado)
        break;
    case "-":
    var resultado = (num1 - num2)
        console.log(resultado)
        break;
    case "*":
    var resultado = (num1 * num2)
        console.log(resultado)
        break;
    case "/":
    var resultado = (num1 / num2)
        console.log(resultado)
            break;
    default:
        console.log("Las operaciones aceptadas son sumar-restar-multiplicar-dividir")
        break;
}