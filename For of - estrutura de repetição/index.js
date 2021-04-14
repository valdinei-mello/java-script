const nome = ['valdinei de mello', 'Jorge Matheus', 'Launa Prado'];

// for classico
for (let i=0; i < nome.length; i++ ){
    console.log(nome[i]);
};

// for in
for (let i in nome){
    console.log(nome[i]);
};

//for of - traz o valor e não o indice como o 'for in'
for (let i of nome){
    console.log(i);
};

//forEach - usa função para trazer os elementos do array
nome.forEach(function (elemento, indice, array){
    console.log(elemento, indice, array);
});

