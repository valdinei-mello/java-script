/*Escreva uma função chamada ePaisagem que recebe dois argumentos, 
largura e altura de uma imagem (Number).
Retorne true se a imagem estiver no modo paisagem. */

function ePaisagem(largura, altura){
    return largura >= altura
};

const ePaisagem2 = (largura, altura) => largura > altura; //usando arrow fuction

console.log(ePaisagem2(12, 40))