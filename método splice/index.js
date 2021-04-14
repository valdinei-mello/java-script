const nomes = ['valdinei', 'marcos', 'julia'];

//nomes.splice(indice, qtde elementos a remover, add elementos separos por virgulas );

//pop - remove no fim
const removidos_fim = nomes.splice(-1, 1);
console.log(nomes, removidos_fim);

//shift - remove no inicio
const removidos_inicio = nomes.splice(0, 1);
console.log(nomes, removidos_inicio);

//push - add no fim
nomes.splice(nomes.length, 0, 'karen');
console.log(nomes);

//unshift - add no começo
nomes.splice(0, 0, 'jorge', 'matheus');
console.log(nomes);