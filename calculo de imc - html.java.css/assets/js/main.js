//Capturar evento submit do formulario
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputpeso = e.target.querySelector("#peso");
    const inputaltura = e.target.querySelector("#altura");

    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);

    if(!peso){
        setResultado("Peso Invalido", false);
        return;
    }

    if(!altura){
        setResultado("Altura invalida", false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);
    const msg = `Seu IMC é ${imc}(${nivelIMC})`;

    setResultado(msg, true);

    console.log(imc, nivelIMC);

});

function getNivelIMC(getIMC){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso',
    'Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

    if (getIMC >= 39.9){
        return nivel[5];
    }
    if(getIMC >=34.9){
        return nivel[4];
    }
    if(getIMC >=29.9 ){
        return nivel[3];
    }
    if(getIMC >= 24.9){
        return nivel[2];
    }
    if(getIMC >= 18.5){
        return nivel[1]
    }
    if(getIMC < 18.5){
        return nivel[0];
    }


}
function getIMC(peso, altura){
    return (peso / altura**2).toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;

}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resp');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg
    resultado.appendChild(p);
 

}