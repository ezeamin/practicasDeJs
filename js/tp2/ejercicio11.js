/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.*/

let nombre1, edad1, nombre2, edad2, nombre3, edad3;

function isANumber(number){
    return !isNaN(number) //isInteger(number)
}

while (true) {
  nombre1 = prompt("Ingrese el primer nombre");
  edad1 = prompt("Ingrese la primera edad");

  if (edad1 !== null && isANumber(edad1) && edad1 >= 0 ) {
    edad1 = Number(edad1);
    //......
    break;
  }
}

while (true) {
  nombre2 = prompt("Ingrese el segundo nombre");
  edad2 = prompt("Ingrese la segunda edad");

  if (edad2 !== null && isANumber(edad2) && edad2 >= 0 ) {
    edad2 = Number(edad2);
    break;
  }
}

while (true) {
  nombre3 = prompt("Ingrese el tercer nombre");
  edad3 = prompt("Ingrese la tercera edad");

  if (edad3 !== null && isANumber(edad3) && edad3 >= 0 ) {
    edad3 = Number(edad3);
    break;
  }
}

const mayor = Math.max(edad1, edad2, edad3);
console.log(mayor);

// switch
if (mayor === edad1) {
  document.write("El de mayor edad es " + nombre1);
} else if (mayor === edad2) {
  document.write("El de mayor edad es " + nombre2);
} else {
  document.write("El de mayor edad es " + nombre3);
}
