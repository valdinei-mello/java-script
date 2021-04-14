const pessoa = {
    nome: 'valdinei',
    sobrenome: 'mello',
    idade: 29
};

//console.log(pessoa.nome);
//console.log(pessoa['nome']);

for (let chave in pessoa){
    console.log(chave); //pega a chave do objeto
    console.log(pessoa[chave]); 
}

