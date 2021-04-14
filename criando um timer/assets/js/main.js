

function criarHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'UTC' })
}

const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;

//pega os eventos dos botões pela class
document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('iniciar')) {
        iniciarelogio();
        relogio.classList.remove('pausado');
        relogio.classList.add('iniciado');
    }

    if (elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.remove('iniciado');
        relogio.classList.add('pausado');
    }

    if (elemento.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0
    }
});


function iniciarelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000);
}


