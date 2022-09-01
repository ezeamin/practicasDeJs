/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

// for (let i = 0; i < 30; i++) {
//   for (let j = 0; j < i; j++) {
//     document.write(i + 1);
//   }
//   if (i === 0) {
//     document.write(i + 1);
//   }
//   document.write(`<br/>`);
// }

for (let i = 0; i < 30; i++) {
  let j = 0;
  do {
    document.write(i + 1);
    j++;
  } while (j < i);
  document.write(`<br/>`);
}
