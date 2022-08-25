/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/

const num1 = prompt("Ingrese el primer numero"); //3
const num2 = prompt("Ingrese el segundo numero"); //5

// const result = Number(num1) + Number(num2); // 3 + 5 = 8
// != const result = Number(num1 + num2); // 35 -> Number(35) = 35 (int)

console.log("El resultado es " + (Number(num1) + Number(num2)))

