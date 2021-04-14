const nome = 'Valdinei';
const sobrenome = 'Mello';
const idade = 29;
const peso = 75;
const altura = 1.87;

let imc; // peso/(altura*altura)
let ano_nascimento;

imc = peso / (altura * altura);
ano_nascimento = 2020 - idade;

// templetes strings
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg`);
console.log(`tem ${altura} de altura e seu IMC é ${imc}`); 
console.log(`${nome} ${sobrenome} nasceu em  ${ano_nascimento}`);
