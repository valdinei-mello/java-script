const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(km) {
        if (typeof km !== 'number') return;
        if (km >= 100 || km <= 0) return;
        this[_velocidade] = km;

    }

    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] < 0) return;
        this[_velocidade]--;
    }

}

const c1 = new Carro('fusca');
/*
for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}
*/

c1.velocidade = 47
console.log(c1.velocidade)
