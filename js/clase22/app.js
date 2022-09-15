import { factorial, primeraLetraAMayuscula, validarEmail } from "./utils.js";

const resultadoFactorial = factorial(8);
console.log(resultadoFactorial);

// const str = prompt("ingrese un texto");//"hola soy eze Y DOY CLASES"
// const cadena = primeraLetraAMayuscula(str);
// console.log(cadena);

const texto = "Eze";
const texto2 = 32;

const resultado = texto + texto2;
//const datos = "Su nombre es " + nombre + " y tiene " + edad + " y vive en " + domicilio ...
const datos = `Su nombre es ${texto} y tiene ${texto2} años`;
console.log(datos);

const email = "ezequiel@outlook.com";
const emailValidado = validarEmail(email);

if (emailValidado) console.log("Email valido");
else console.log("Email NO valido");
