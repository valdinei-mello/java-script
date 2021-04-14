function cria(nome, sobrenome, idade){
    return{nome,sobrenome,idade}
};

const pessoa1 = cria('valdinei', 'mello', 29);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);


// criando um objeto do jeito normal
const pessoa2 = {
    nome: 'valdinei',
    sobrenome: 'oliveira',
    idade: 54,

    //método
    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    },
    //método
    incrementaidade(){
        this.idade+=1;
        return 'agora eu tenho '+ this.idade + ' anos';
    }
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
pessoa2.fala();
console.log(pessoa2.incrementaidade());