function zeroesquerda(num){
    return num>=10 ? num: `0${num}`;
}

function dataformatada(data) {

    const dia =  zeroesquerda(data.getUTCDate());
    const mes =  zeroesquerda(data.getMonth()+1); //mês começa em ZERO
    const ano =  zeroesquerda(data.getFullYear());
    const hora =  zeroesquerda(data.getHours());
    const minutos =  zeroesquerda(data.getMinutes());
    const segundos =  zeroesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}   ${hora}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = dataformatada(data);
console.log(dataBrasil);