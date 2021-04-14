//Dobre os valores dos numeros...
// Map  - Altera o valor do array, usando os valores do original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobro = numeros.map(valor => valor * 2);

console.log(numerosDobro);








//////////////////////////////////////////////////////////////////////////////////////

//Para cada elemento:
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduarda', idade: 55 },
    { nome: 'leticia', idade: 19 },
    { nome: 'rosana', idade: 32 },
    { nome: 'jorge', idade: 47 }
];


//Retorne apenas uma string com o nome da pessoa.
const retornNome = pessoas.map(obj => obj.nome);
console.log(retornNome);

//Remova apenas a chave  "nome" do objeto.
const removeNome = pessoas.map(obj => ({ idade: obj.idade }));
console.log(removeNome);

//Add uma chave id em cada objeto.
const comIds = pessoas.map(function (obj, indice) {
    obj.id = indice + 1;
    return obj;
});
console.log(comIds);