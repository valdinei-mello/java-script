// ...rest = Pega o resto dos valores da array

//    indices =    0,    1,    2,    3,   4,    5,    6,    7,    8
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const [primeiro, segundo, ...resto] = numeros;
//console.log(primeiro, segundo, resto);




// Pega um valor e pular outro
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const [primeiro, ,terceiro, ,cinco]=numeros;
//console.log(primeiro, terceiro, cinco);





// pegar numero de uma lista dentro de outro lista
const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numeros[2][2]);