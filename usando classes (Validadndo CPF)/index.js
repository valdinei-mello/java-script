// 705.484.450-52           070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpflimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }


    gerarNovoCpf() {
        const cpfSemDigito = this.cpflimpo.slice(0, -2);
        const d1 = ValidaCPF.geraDigito(cpfSemDigito)
        const d2 = ValidaCPF.geraDigito(cpfSemDigito + d1)
        this.novoCPF = cpfSemDigito + d1 + d2
    }

    static geraDigito(cpfSemDigito) {
        let total = 0;
        let reverso = cpfSemDigito.length + 1;

        for (let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica)
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : 0;

    }

    sequencia() {
        return this.cpflimpo.charAt(0).replace(this.cpflimpo.length) === this.cpflimpo
    }

    valida() {
        if (!this.cpflimpo) return false;
        if (typeof this.cpflimpo !== "string") return false;
        if (this.cpflimpo.length !== 11) return false;
        if (this.sequencia()) return false;
        if (this.gerarNovoCpf()) return false;
       
        return this.novoCPF === this.cpflimpo
    }
}

const validacpf = new ValidaCPF('070.987.720-03')
if(validacpf.valida()) {
    console.log("CPF válido", validacpf.novoCPF)
}else{
    console.log("CPF inválido")
}