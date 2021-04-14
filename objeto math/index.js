let num1 = 9.875214;
let resp1 = Math.floor(num1); // arredonda o numero pra inteiro ( no caso 9)
let resp2 = Math.ceil(num1); //arredonda o numero para cima, ou seja, para o mais proximo ( no caso 10)
let resp3 = Math.round(num1); // arredonda p numero para o mais proximo, pra cima ou pra baixo;
console.log(resp1);
console.log(resp2);
console.log(resp3);

console.log(Math.max(1,2,3,4,5,170)); // retorno o mair valor do intervalo
console.log(Math.min(1,2,3,4,5,170)); // retorno o menor valor do intervalo

const aleatorio = Math.round(Math.random() * (10-5) + 5); // gera um numero aleatório no intervalo inserido
console.log(aleatorio);

console.log(Math.PI); // retorno o valor de PI;

console.log(Math.pow(10,2)); // retorna a pptencia de 10²;

console.log(100 / 0); // em outra linguagens de programação não é permitido, mas no java script sim e gera um tipo numerico (Infinity)

