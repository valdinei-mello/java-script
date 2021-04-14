
//new object = object .prototype
const objA = {
    chaveA : 'A'
    //__proto__: Object.prototype
};

const objB = {
    chaveB : 'B'
    //__proto__: ObjA
};

Object.setPrototypeOf(objB,objA);
//console.log(objB.chaveA)

//////////////////////////////////////////////////////////////////////

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(des){
    this.preco = this.preco - des;
}

Produto.prototype.aumento = function(des){
    this.preco = this.preco + des;
}

const p1 = new Produto('camiseta' , 154)
p1.desconto(54)
console.log(p1)
p1.aumento(54)
console.log(p1)


const p2 = {
    nome: 'boné',
    preco: 14
}

Object.setPrototypeOf(p2, Produto.prototype)

console.log(p2)
p2.desconto(10)
console.log(p2)


/////////////////////

const p3 = Object.create(Produto.prototype);
p3.preco = 74;
p3.aumento(100);
console.log(p3)
