//Usando Swith/Case

const data = new Date(1998, 4, 4);
const dia_semana = data.getDay(); // 0-domingo .....6-sabado
let dia_semana_texto;

switch (dia_semana) {
    case 0:
        dia_semana_texto = 'Domingo';
        break;
    case 1:
        dia_semana_texto = 'Segunda-feira';
        break;
    case 2:
        dia_semana_texto = 'Terça-feira';
        break;
    case 3:
        dia_semana_texto = 'Quarta-feira';
        break;
    case 4:
        dia_semana_texto = 'Quinta-feira';
        break;
    case 5:
        dia_semana_texto = 'Sexta-feira';
        break;
    case 6:
        dia_semana_texto = 'Sábado';
        break;
    default:
        dia_semana_texto = ':(';
}

console.log(dia_semana_texto);

