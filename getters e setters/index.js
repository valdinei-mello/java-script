function Produto(nome, preco, estoque, cor) {
    this.nome = nome;
    this.preco = preco;
  

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // posso alterar a chave ?
        get: function () {
            return estoquePrivado
        },
        set: function (valor) {
            if (typeof valor !== Number) {
                console.log('Valor incorreto!')
            }
            estoquePrivado = valor
        }
    });
}

const p1 = new Produto('camiseta', 20, 3);
console.log(p1);
p1.estoque = 748;
console.log(p1.estoque);




/////////////////////////////////////////////////////

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

const p4 = criaProduto('camiseta')
console.log(p4.nome);
p4.nome = 'meia';
console.log(p4.nome)

