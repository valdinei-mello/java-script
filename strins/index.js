// string são indexadas
//             01234567..............
let palavra = "Um texto de javascript";
console.log(palavra.indexOf('texto')); // palavra texto começa no indice 3;
console.log(palavra.indexOf('Um', 0)); // busca a posição da palvra "Um" depois do indice 3, que no caso não existe;
console.log(palavra.lastIndexOf('t', 5)); // busca a posição da letra de traz pra fente apartir da posição apontada;
console.log(palavra.replace("Um", "Outro")); // Substitui a plabra "Um", por "Outro";
console.log(palavra.length); // Retorno a qtde de caracteres da string;
console.log(palavra.slice(3,8)); // Retorno apenas a palavra dando o seu inicio e fim atravez do indice;
console.log(palavra.slice(-5,-2)); // Retorno "tex"
console.log(palavra.split(" ")); // Separa o texto pelo 'espaço';
console.log(palavra.split(' ', 3)); // Separa o texto pelo 'espaço'no maximo 2 vezes;
console.log(palavra.toUpperCase()); // DEixa a string em MAIUSCULA;
console.log(palavra.toLowerCase()); // Deixa a string em minuscula;
