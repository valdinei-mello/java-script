//IEEE 754-2008
let num1 = 1500;
let num2 = 2.587521;

console.log(num1.toString() + num2); //toString converte um numero em uma string
console.log(typeof(num1));
console.log(num1.toString(2)); // retorna o binario do numero
console.log(num2.toFixed(2)); // arredonda 2 ou mais casas depois da virgula
console.log(Number.isInteger(num2)); // Verifica se o numero é inteiro ou não (TRUE  / FALSE)

let temp = num2 * "oi";
console.log(Number.isNaN(temp)); // Verifica se realmente não é um numero e retorna verdadeiro ou falso;

//------------------------------------------------------------------

let a = 0.1;
let b = 0.7;

console.log(a+b);
a+=b; // a = a + b;
console.log(a);
