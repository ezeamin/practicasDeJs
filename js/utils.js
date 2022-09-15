// 8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320

// funcion para sacar factorial de un numero
export function factorial(numero) {
  let res = 1;

  for (let i = numero; i > 0; i--) {
    res = res * i;
  }

  return res;
}

// funcion para poner primera letra de un string en mayuscula
export const primeraLetraAMayuscula = (cadena) => {
  let primeraLetra = cadena.charAt(0);
  primeraLetra = primeraLetra.toUpperCase();

  let cadenaEnMinuscula;
  cadenaEnMinuscula = cadena.toLowerCase();

  cadenaEnMinuscula = cadenaEnMinuscula.slice(1);

  const cadenaResultante = primeraLetra + cadenaEnMinuscula;

  return cadenaResultante;
};

export const validarEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (regex.test(email)) {
    // console.log("Cumple el patron");
    return true;
  } else {
    // console.log("NO cumple el patron");
    return false;
  }
};

export const imprimirObjeto = (claves,valores) => {
  claves.forEach((clave, index) => {
    const valor = valores[index];
    document.write(`<p>${clave}: ${valor}<br></p>`);
  });
}

export const generarId = (n) => {
  let id = "";
  for (let i = 0; i < n; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}