/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

export class Cuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(cantidad) {
    this.saldo += cantidad;
    console.log(`Se agregó saldo a la cuenta, quedando en ${this.saldo}`);
  }

  extraer(cantidad) {
    this.saldo -= cantidad;
    console.log(`Se quitó saldo de la cuenta, quedando en ${this.saldo}`);
  }

  informar() {
    console.log(
      `Informacion de la cuenta: Titular: ${this.titular}, Saldo: ${this.saldo}`
    );
  }
}
