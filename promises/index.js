//numero aleatorio
function aleatorio(min, max){
    min*=1000;
    max*=1000;
    return Number( Math.floor(Math.random() * (min - max) + min));
}

//promisses
function esperaAI(msg, time){
    return new Promise((resolve, reject) =>{
        if(typeof msg!== 'string') reject ('BAD VALUE')

        setTimeout(() => {
            resolve(msg)
        }, time)
    } );
   
}

esperaAI('Conexão com o BD', aleatorio(1,3))
.then(resp => {
    console.log(resp);
    return esperaAI('Buscando os dados da BASE', aleatorio(1,3));
})
.then(resp => {
    console.log(resp)
    return esperaAI (7744, aleatorio(1,3));
})
.then(resp => {
    console.log('Exibindo os dados da base')
})
.then(()=>{
    console.log('Eu serei o ultimoa a ser exibo')
})
.catch(e => {
    console.log('Erro:', e);
});

