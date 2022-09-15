import { Comic } from "./Comic.js";
import { Libro } from "./Libro.js";

const libro = new Libro("Pepe", "Juegos del hambre", 1500, 30);
libro.verInfo();
// console.log(libro)

const comic = new Comic("Juan", "It", 2000, 15, "Juan Perez", "Volumen 1");
// console.log(comic)
comic.verInfo();
console.log(comic.titulo);