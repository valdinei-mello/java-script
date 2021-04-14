//filter = sempre retorna um array com a mesma qtde de elementos ou menos.

//retona os numeros maiores que 10 (FILTER)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//metodo filter recebe uma função de callback
const numerosfiltrados = numeros.filter(valor => valor > 10);
console.log(numerosfiltrados);


//////////////////////////////////////////////////////////////////////////////////////


const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduarda', idade: 55 },
    { nome: 'leticia', idade: 19 },
    { nome: 'rosana', idade: 32 },
    { nome: 'jorge', idade: 47 }
];


//Retorne as pessoas que tem o nome com 5 letras ou mais.
const pessoascomnomeGrande = pessoas.filter(obj => obj.nome.length >= 7); //usando arrown function
console.log(pessoascomnomeGrande);

//Rtorne as pessoas com mais de 50 anos.
const pessoascommaisdeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoascommaisdeCinquentaAnos);

//Retorne as pessoas cujo nome termina com 'a'.
const pessoasterminacom_a = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasterminacom_a);

