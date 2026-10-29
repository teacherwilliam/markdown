// Template literals
`la suma de 2 enteros ${2 + 3} y la mulltiplicación ${2*2}`;

//split
let nombre = "William Andres Aguilar";
let array_nombre = nombre.split(" ");
// console.log(array_nombre[0])


let numeros = "1,2,3";
let array_numeros = numeros.split(",");
array_numeros.push(4)


//toUpperCase
let mayusculas = nombre.toUpperCase();
console.log(mayusculas)

//startwith -endsWith
let nombre2 = "William";
console.log(nombre2.startsWith("W"));
console.log(nombre2.endsWith("M"));

//trim
let nombre3 = "   William   ";
console.log(nombre3.trim());

