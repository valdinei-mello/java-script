function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.clickBtn();
            this.enter();

        },


        enter() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.calcular();
                    
                }
            });
        },


        calcular() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert("Conta Inválida !");
                    return;
                }
                return this.display.value = conta;


            } catch (e) {
                alert("Conta Inválida !");

            }
        },

        apagarCaracter() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
        },




        clickBtn() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagarCaracter();
                }

                if (el.classList.contains('btn-eq')) {
                    this.calcular();
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
