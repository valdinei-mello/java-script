// 705.484.450-52           070.987.720-03

class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpflimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g,'')
        });
    }


    gerarNovoCpf(){
        const cpfSemDigito = this.cpflimpo().slice(0,-2);
        const d1 = this.geraDigito(cpfSemDigito)
    }

    geraDigito(cpfSemDigito){

    }

    sequencia(){
        return this.cpflimpo.charAt(0).replace(this.cpflimpo.length) ===this.cpflimpo
    }

    valida(){
        if(!this.cpflimpo) return false;
        if( typeof this.cpflimpo !== "string") return false;
        if(this.cpflimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        if(this.gerarNovoCpf()) return false;
        return 'CHEGUEI AQUI'
    }
}

const validacpf = new ValidaCPF('070.987.720-03')
console.log(validacpf.valida())