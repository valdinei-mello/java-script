// função sem retorno
function saudacao(nome){
    console.log(`Olá ${nome}, tenha um bom dia`)
}
saudacao('Ney');


// função com retorno
function saudacao1(nome){
    return nome;
}
const variavel = saudacao1('Valdinei');
console.log(variavel);


// função que soma dois valores
function soma(x, y){
    return x+y;
}
console.log(soma(2, 5));


// função que possui valores padrão para seus atributos, caso não seja informado
function soma(x=1, y=1){
    return x+y;
}
console.log(soma());


// outra maneira de declarar função
const raiz = function(x){
    return x ** 0.5;
};
console.log(raiz(25));


// outra maneira de declarar função
const raizquadrada = (x) =>  x ** 0.5;

console.log(raizquadrada(20));