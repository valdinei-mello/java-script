
// super class
function Conta(ag, conta, saldo) {
    this.ag = ag;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente:R$${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
    this.versaldo();
};



Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.versaldo();
};



Conta.prototype.versaldo = function () {
    console.log(`Ag/c ${this.ag}, ${this.conta}, R$${this.saldo.toFixed(2)}`);

};

function ContaCorrente(ag, conta, saldo, limite) {
    Conta.call(this, ag, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente:R$${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
    this.versaldo();
};



function ContaPoupaca(ag, conta, saldo) {
    Conta.call(this, ag, conta, saldo);

};

ContaPoupaca.prototype = Object.create(Conta.prototype);
ContaPoupaca.prototype.constructor = ContaPoupaca;


const cc = new ContaCorrente(55,244,0,100);
cc.depositar(10)
cc.sacar(111)


const cp = new ContaPoupaca(12, 33, 0);
cp.depositar(10)
cp.sacar(110);
