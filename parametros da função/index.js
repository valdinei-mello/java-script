
// argumentos que sustenta todos os arumentos enviados
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);



// usando o RestOperator
function conta(operador, acumulador, ...numeros) {

    for(let num of numeros){
        console.log(num)
    }
    
}
conta("+", 0, 23, 32, 443, 4);

