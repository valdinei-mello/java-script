function retornaFuncao(){
    const nome='valdinei';
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao);