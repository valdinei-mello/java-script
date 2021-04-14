const num = Number(prompt("Digite um numero: "));
const numero_titulo = window.document.getElementById("numero-titulo");
const texto = window.document.getElementById("texto");
const texto1 = window.document.getElementById("texto1");
const texto2 = window.document.getElementById("texto2");
const texto3 = window.document.getElementById("texto3");
const texto4 = window.document.getElementById("texto4");
const texto5 = window.document.getElementById("texto5");

numero_titulo.innerHTML = num;

texto.innerHTML = `<p>Raiz quadrado : ${Math.sqrt(num)}</p>`;
texto1.innerHTML =` ${Number.isInteger(num)}`; // verifica se numero é inteiro e returno TRUE/FALSE
texto2.innerHTML = `${Number.isNaN(num)}`; //verifica seé numero é retorna TRUE/FALSE
texto3.innerHTML = `${Math.ceil(num)}`; //Arredonda o valor do numero para cima;
texto4.innerHTML = `${Math.round(num)}`; //Arredonda o valor da variavél para baixo;
texto5.innerHTML = `${num.toFixed(2)}`; //Arredonda o valor da varial com 2 casas depois da virgula;
