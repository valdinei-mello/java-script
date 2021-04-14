const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let num of numeros) {
    if (num === 2) {
        console.log(`Encontrei o numero ${num}, vou pular ele`);
        continue;  // pula parar a proxima interação do laço;
    }

    if (num === 7) {
        console.log(`Encontrei o numero ${num}, saindo do loop`);
        break;  // sai do loop ao encontrar o numero 7, evitando assim de ter que executar todo o restante do codigo
    }
    console.log(num);
}