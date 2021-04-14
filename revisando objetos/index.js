const pessoa = {
    nome: 'luiz',
    sobrenome: 'otavio'
};

//acessando por anotação de ponto
console.log(pessoa.nome)

//acessando por anotação de colchetes, muito usado quando o valor é dinâmico
const chave = 'sobrenome'
console.log(pessoa[chave])


//outra maneira de criar um construtor de objeto

const pessoa1 = new Object();
pessoa1.nome = 'valdinei';
pessoa1.sobrenome = 'mello';
pessoa1.idade = 30;
pessoa1.falarnome = function(){
    return (`${this.nome} está falando seu nome`)
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return (dataAtual.getFullYear() - this.idade);
}


//apagando chave do objeto
delete pessoa1.sobrenome

console.log(pessoa1)
console.log(pessoa1.falarnome())
console.log(pessoa1.getDataNascimento())


// factory function 
function criapessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criapessoa('carlos', 'alberto')
console.log(p1.nomecompleto);


// constructor functions 
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('maria', 'gabriela');
Object.freeze(p2) //trava o objeto 



// classes



