const nome = prompt("Digite seu nome completo: ");
document.body.innerHTML = `Seu nome é:${nome} <br />`; 
document.body.innerHTML += `Seu nome tem ${nome.length} <br />`; 
document.body.innerHTML += `A 2° letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual é o primeiro indice da letra 'a' de seu nome: ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Qual o ultimo indice da letra de seu nome: ${nome.length-1}<br />`;
document.body.innerHTML += `As ultima tres letras do nome: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palvras do seu nome são: ${nome.split(" ")}</br>`;
document.body.innerHTML += `Seu nome em MAISCULO:   ${nome.toUpperCase()}</br>`;
document.body.innerHTML += `Seu nome em minusculo:   ${nome.toLowerCase()}</br>`

