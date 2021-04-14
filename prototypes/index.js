//construtura
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
}

Pessoa.prototype.estouAqui = 'hahahaha';
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

//instancia
const p1 = new Pessoa('valdinei', 'mello'); //função construtura
const data = new Date(); // Date = função construtora

console.log(p1.nomeCompleto());
console.log(data);
