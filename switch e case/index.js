//Usando o If/Else 

const data = new Date();
const dia_semana = data.getDay(); // 0-domingo .....6-sabado
let dia_semana_texto;

if (dia_semana === 0){
    dia_semana_texto = 'Domingo';
}else if(dia_semana === 1){
    dia_semana_texto = 'Segunda-Feira';
}else if(dia_semana === 2){
    dia_semana_texto = 'Terça-Feira';
}else if(dia_semana === 3){
    dia_semana_texto = 'Quarta-Feira'
}else if(dia_semana === 4){
    dia_semana_texto = 'Quinta-Feira'
}else if(dia_semana === 5){
    dia_semana_texto === 'Sexta-Feira'
}else if(dia_semana === 6){
    dia_semana_texto = 'Sábado'
}

console.log(dia_semana, dia_semana_texto);

