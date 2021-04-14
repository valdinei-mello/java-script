const produto = { nome: 'boné', valor: 50 }
///////////////////////////////////////////////////////////////

const outraCoisa = {
    ...produto,
    material: 'algodão',
    cor: 'pink',


};

//ou
const outraCoisa_1 = Object.assign({}, produto, { material: 'couro' })

outraCoisa.nome = 'shorts'
outraCoisa.valor = 14

console.log(produto);
console.log(outraCoisa);
console.log(outraCoisa_1);

//////////////////////////////////////////////////////////////////////

