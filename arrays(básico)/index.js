//Assim como as strings a lis ta tambme é idexada;
//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos.length); //Retorno a qtde de itens na lista;
console.log(alunos); //exibir os valores da lista;
console.log(alunos[1]); //exibi a string do index[2] = 'João';
console.log(alunos.pop()); // remove o ultimo item da lista e exibe;
console.log(alunos.shift()); // remove o primeiro item da lista;

alunos.push('ney'); //insere um item na ultima posição da lista
console.log(alunos)

alunos.unshift('marcos'); // insere o item no inicio da lista;
console.log(alunos);

delete alunos[1]; // delete o valor do indice e matem a posição em branco;
console.log(alunos);

console.log(alunos[147]); // quando acesso um elemento pelo indice que não existe o javascript retorna UNDEFINED;

console.log(alunos.slice(0,3)); // fatir a lista;
console.log(alunos.slice(3,-1));// fatir a lista;

console.log(typeof alunos); // retorna object;

console.log(alunos instanceof Array); // alunos é um tipo de lista? TRUE/FALSE

