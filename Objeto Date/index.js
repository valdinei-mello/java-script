const data = new Date(1609680290435);
console.log(data.toString());
console.log('Dia', data.getUTCDate());
console.log('Mês', data.getMonth()+1); //mês começa em ZERO
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getUTCDay()); // 0-Domingo.....6-Sábado
console.log(Date.now());
