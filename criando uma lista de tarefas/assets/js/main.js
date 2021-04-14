const inputTarefa = document.querySelector('.input_tarafa');
const Btn_Tarefa = document.querySelector('.btn_add_tarefa');
const tarefas = document.querySelector('.tarefas');

//cria os itens dentro da lista
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// cria a tarefa após o click no btn ou na tecla enter
function criaTarefa(tarefa) {
    const lista = criaLi();
    lista.innerText = tarefa;
    tarefas.appendChild(lista);
    criaBotaoApagar(lista);
    salvarTarefa();
}

// limpa o campo e mantem o focus no lugar 
function limpaTarefa() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// cria o botão Apagar dos itens inseridos na lista
function criaBotaoApagar(lista) {
    lista.innerText += " ";
    const btn_apagar = document.createElement('button');
    btn_apagar.innerText = 'Apagar';
    btn_apagar.setAttribute("class", "apagar");
    lista.appendChild(btn_apagar);
}


// Pegando o valor com btoão enter acionado
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaTarefa();
    }
});

// Pegando valor clicando no btn adicionar tarefa
Btn_Tarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaTarefa();
});


// captura o evento de click em qualquer lugar da tela, no caso pegando o clckdo btn apagar
document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    }
})

//salva a lista no localStore do navegar
function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listadetarefas = [];

    for (let tarefas of liTarefas) {
        let tarefatexto = tarefas.innerText;
        tarefatexto = tarefatexto.replace('Apagar', "").trim();
        listadetarefas.push(tarefatexto);
    }
    const tarefasJSON = JSON.stringify(listadetarefas);
    localStorage.setItem("tarefas", tarefasJSON);
    console.log(tarefasJSON)
}

// Recupera a lista slava no localStore do navegar e exibe novamente 
function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listarecuperada = JSON.parse(tarefas);
    
    for (let tarefas of listarecuperada){
        criaTarefa(tarefas);
    }
}

addTarefasSalvas();




