// Concatena en un string todos los elementos de un array.
// console.log(elements.join(''));

// function concatenarNumeros(numeros) {

// }
let numero1 = " ";
let numero2 = " ";
let operacion;

function mostrar_en_pantalla(x) {
  numero1 += x;
  document.getElementById("pantalla").innerHTML = document.getElementById("pantalla").innerHTML + x;
  // alert(numero1);
}

function delete_display() {
  document.getElementById("pantalla").innerHTML = " ";
}

function seleccionarOperacion(x) {
  operacion = x;
  alert(operacion);
}

function calcularOperacion() {
  switch (operacion){
    case '+':
      return numero1 + numero2;
    
    case '-':
      return numero1 - numero2;
    
    case '*':
      return numero1 * numero2;
    
      case '/':
        if (numero2 == 0) {
          return "ERROR: Invalid Expression"
        } else {
          return numero1 / numero2;
        }
  }
}