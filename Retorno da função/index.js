//return
//Retorna um valor e termina a função

function soma(a, b) {
    return a + b;
}
console.log(soma(7, 5))

//=============================================================

function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    }
}

const p1 = criaPessoa('valdinei', 'mello')
console.log(p1);
console.log(typeof p1);

//===========================================================

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

const olamundo = falaFrase('olá');
console.log(olamundo('mundo'));

//=====================================================

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function (n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

