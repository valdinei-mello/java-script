function mostrahora(){
    let data = new Date();

return( data.toLocaleTimeString('pt-br'));
}


const timer = setInterval(function(){console.log(mostrahora())}, 1000); // executa uma função de 1 em 1 segundos

setTimeout(function(){clearInterval(timer);},10000); // executa a função por 10 segundos
