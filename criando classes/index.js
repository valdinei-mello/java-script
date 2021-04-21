class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    beber() {
        console.log(`${this.nome} está bebendo !`)
    }
}


//comparativo com claas X function

function Pessoa1(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa1.prototype.beber = function () {
    console.log(`${this.nome} está bebendo !`)
}



// saidas

const p1 = new Pessoa('valdinei', 'mello');
console.log(p1)
console.log(p1.beber())

const p2 = new Pessoa1('malu', 'dias');
console.log(p2)
console.log(p2.beber())

