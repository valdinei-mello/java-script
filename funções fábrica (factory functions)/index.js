//Factory Function (Funções Fábricas)
// constructor Function (Funções constrututoras)
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,

        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(" "); // divide a variável em uma array apartir dos espaços
            this.nome = valor.shift();// pega o primeiro item da lista
            this.sobrenome = valor.join(' '); // pega o restante dos itens da lista

        },

        fala(assunto) {
            return `${this.nome} esta falando de ${assunto} e tem ${this.peso} Kg`
        },

        //getter 
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },

        mora(cidade){
            return `${this.nome} mora na região de ${cidade}`;

        }
    };
}

const p1 = criaPessoa()
p1.nomeCompleto = "franciele de lima"
p1.peso = 57;
console.log(p1.nomeCompleto)
console.log(p1.fala("trabalho"))
console.log(p1.mora('Campinas-SP'))




