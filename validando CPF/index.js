function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}




ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if(this.issequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2) //todo o numero do cpf menos os ultimos dois numeros
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    //console.log(typeof(cpfParcial));
    //console.log(digito2);

    const novoCpf = cpfParcial + digito1 + digito2;
    if ( novoCpf === this.cpfLimpo){
        return novoCpf
    }
};






ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1;

   // console.log(cpfArray)
    //console.log(regressivo)

    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); //expressão ternaria

};





ValidaCpf.prototype.issequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo

};





/////////////////////////////////////////////////

const cpf = new ValidaCpf('705.484.450-52');

if(cpf.valida()){
    console.log(`CPF VÁLIDO, ${cpf.valida()}`)

}
else{
    console.log(`CPF INVÁLIDO, ${cpf.valida()}`)
}
