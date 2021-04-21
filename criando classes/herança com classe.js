class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;

    }

    ligar() {
        if (this.ligado) {
            console.log(`O ${this.nome} já está ligado`)
            return;
        }

        this.ligado = true;

    }

    desligar() {
        if (!this.ligado) {
            console.log(`O ${this.nome} já está desligado`)
            return;
        }

        this.ligado = false;
    }
}

//herdando a classe "DispositivoEletronico" apara "Smartphone"
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
    
    ligar(){
        console.log('Olha, você alterou o método ligar')
    }
}

const s1 = new Smartphone('Motorola', 'Preto', 'Moto G100')
console.log(s1)
s1.ligar()