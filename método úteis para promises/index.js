//numero aleatorio
function aleatorio(min, max){
    min*=1000;
    max*=1000;
    return Number( Math.floor(Math.random() * (min - max) + min));
}

//promisses
function esperaAI(msg, time){
    return new Promise((resolve, reject) =>{
        //verifica o tipo de dados da variavel 'msg'
        if(typeof msg!== 'string') {
            reject ('BAD VALUE')
            return;
        } 

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' proximo')
        }, time)
    } );
   
}

//Promise.all / Promise.race / Promise.resolve / Promise.reject




const promises = [
    esperaAI('Promise 1', rand),
    esperaAI('Promise 2', 200),
    esperaAI('Promise 3', 1000),
];

//Promise.all = executa todos
Promise.all(promises)
.then(function(x){
    console.log(x)
})
.catch(x => {
    console.log(x)
});



//Promise.race = traz o primeiro que executar
Promise.race(promises)
.then(function(x){
    console.log(x)
})
.catch(x => {
    console.log(x)
});