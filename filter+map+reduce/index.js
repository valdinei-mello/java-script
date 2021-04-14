// retorna a soma do dobro de todos os pares
// -> filtrar pares
// [ 50, 80, 2, 8, 22 ]

// -> dobrar os valores
//[ 100, 160, 4, 16, 44 ]

// -> reduzir (somar tudo)
    //324


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(function (valor) {
    return valor % 2 === 0;
}).map(function (valor) {
    return valor * 2
}).reduce(function (acumlador, valor) {
    return acumlador += valor
})

console.log(numerosPares)


