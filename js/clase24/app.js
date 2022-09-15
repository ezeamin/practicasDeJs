// let nombre = "Ezequiel";
// let apellido = "Amin";
// let email = "eze@gmail.com";
// let domicilio = "Pepe 200, Yerba Buena, Tucumán, Argentina";
// let esMonotributista = true;
// let estaActivo = true;

import { Usuario } from "./Usuario.js";

// // let usuarioEze = ["Ezequiel","Martin","eze@gmail.com",...]

// let usuarioEze = {
//   // clave: valor,
//   nombre: "Ezequiel",
//   apellido: "Amin",
//   email: "eze@gmail.com",
//   domicilio: "Pepe 200, Yerba Buena, Tucumán, Argentina",
//   esMonotributista: true,
//   estaActivo: true,
//   //metodos
//   comprar: (producto) => {
//     console.log(`Ha comprado ${producto}`);
//     return "hola";
//   },
//   vender: function () {},
//   loguear: () => {},
//   registrar: () => {},
//   desloguear: () => {},
// };

// let usuarioLuis = {
//     nombre: "Luis",
//     esMonotributista: "Falso"
// }

// // usuarioEze.nombre = "Pepe"
// // console.log(usuarioEze.nombre)
// // usuarioEze.comprar("pelota")
// // delete usuarioEze.domicilio
// // usuarioEze.estaLogueado = true;
// // usuarioEze

// const claves = Object.keys(usuarioEze);
// const valores = Object.values(usuarioEze);

// console.log(claves);

// for (let i = 0; i < claves.length; i++) {}

let usuarioEze = new Usuario("Ezequiel","Amin","eze@gmail.com");
// let usuarioPepe = new Usuario("Pepe","Lopez","pepe@gmail.com");
// let usuarioAnonimo = new Usuario();

// console.log();

usuarioEze.loguear()
