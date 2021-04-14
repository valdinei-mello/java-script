//Reduce


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Some todos os numeros(Reduce)
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total)

//Retorne uma array com os pares (Filter)
const pares = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(pares);

//Retorne um array com o dobre dos valores(Map)
const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, [])
console.log(dobro);

//////////////////////////////////////////////////////////////////////////////////////


//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduarda', idade: 55 },
    { nome: 'leticia', idade: 19 },
    { nome: 'rosana', idade: 32 },
    { nome: 'jorge', idade: 47 }
];

const pessoaVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador
    return valor;
}, 0);

console.log(pessoaVelha);

