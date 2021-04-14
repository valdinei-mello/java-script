// defineProperty - defineproperties

function Produto(nome, preco, estique) {
    
    Object.defineProperty(this, 'estique', {
        enumerable: true, // mostra a chave
        value: estique, // insere o valor no estoque
        writable: false, //controla se pode ou não ser alterado
        configurable: false // posso alterar a chave ?

    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // insere o valor no estoque
            writable: false, //controla se pode ou não ser alterado
            configurable: false // posso alterar a chave ?
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // insere o valor no estoque
            writable: false, //controla se pode ou não ser alterado
            configurable: false // posso alterar a chave ?
        }
    })
}

const p1 = new Produto('camiseta', 25, 147);
console.log(p1);
console.log(Object.keys(p1))

