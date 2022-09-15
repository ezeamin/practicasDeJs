/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

import { AgendaDeContactos } from "./clases/AgendaDeContactos.js";
import { Contacto } from "./clases/Contacto.js";

const agenda = new AgendaDeContactos(10);

const juan = new Contacto("Juan", 381123456);
const pepe = new Contacto("Pepe", 123654);
agenda.añadirContacto(juan);
agenda.añadirContacto(pepe);
// console.log(agenda)
agenda.existeContacto("Juan");
agenda.existeContacto("Juana");
agenda.listarContactos();
agenda.buscarContacto("JUAN");
agenda.eliminarContacto("Juan");
agenda.listarContactos();
agenda.agendaLlena();
agenda.huecosLibres();
