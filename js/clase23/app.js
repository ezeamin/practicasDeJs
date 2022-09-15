while (true) {
  const numero1 = Number(prompt("Ingrese el primer numero"));
  const numero2 = Number(prompt("Ingrese el segundo numero"));

  const opcion = prompt(
    "Bienvenido, seleccione una opcion: \n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir \n 5. Salir"
  );

  let resultado;
  let salida = false;

  switch (opcion) {
    case "1": {
      //sumar
      resultado = numero1 + numero2;
      break;
    }
    case "2": {
      //restar
      resultado = numero1 - numero2;
      break;
    }
    case "3": {
      //multiplicar
      resultado = numero1 * numero2;
      break;
    }
    case "4": {
      //dividir
      if (numero2 === 0) {
        alert("El denominador es 0, y no se puede dividir");
        break;
      }

      resultado = numero1 / numero2;
      break;
    }
    case "5": {
      //salir
      salida = true;
      break;
    }
    default: {
      //cualquier otro valor
      alert("La opcion ingresada no es valida!");
      break;
    }
  }

  if (resultado === 0 || resultado) {
    alert(`El resultado es ${resultado}`);
  }

  if(salida){
    break;
  }
}
