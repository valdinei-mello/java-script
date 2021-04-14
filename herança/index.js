
//produto(aumento, desconto)
// camiseta(cor), caneca(material)

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (valor) {
    this.preco += valor
};

Produto.prototype.desconto = function (valor) {
    this.preco -= valor
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor

}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (porcento) {
    this.preco += porcento
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    this.estoque

    Object.defineProperty(this, 'estoque', {
        enumerable : true,
        configurable : false,
        get: function () {
            return estoque;
        },
        
        set: function (qtde) {
            if (typeof qtde !== 'number') return;
            estoque = qtde;
        }
    });
}

    Caneca.prototype = Object.create(Produto.prototype);
    Caneca.prototype.constructor = Caneca;






    const p1 = new Produto('generico', 111)
    const camiseta = new Camiseta('blusa', 100, 'azul');

    //console.log(p1)
    //camiseta.aumento(50)
    //console.log(camiseta)



    const caneca = new Caneca('leite', 14.98, 'cerâmica', 87);
    console.log(caneca)

    
