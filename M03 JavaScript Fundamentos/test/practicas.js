
function operadoresLogicos(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
      return "Hay negativos";
    } 
    if (num1 === 0 && num2 === 0 && num3 === 0) {
      return "Error";
    }
    if (num1 > num2 && num1 > num3 && num1 > 0) {
      return "Numero 1 es mayor y positivo";
    } 
    if (num3 > num1 && num3 > num2) {
      return num3 + 1;
    }
    return false;
  }
  