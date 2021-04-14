const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco:{
        rua:'av. brasil',
        numero: 320,
    }
};

//Atribuição via desestruturação 
const {nome: teste, sobrenome} = pessoa; // adicionando um nome para 'nome' de pessoa como 'teste'
console.log(teste, sobrenome);

//Atribuição via desestruturação
const{nome, endereco:{rua, numero}} = pessoa // Usando o mesmo nome do objeto pessoa com o objeto endereco
console.log(nome, rua);
