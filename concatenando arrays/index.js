const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'ney'); // concatena arrays
console.log(a3);
const a4 = [...a1, 'valdinei', ...a2, ...[7, 8, 9]] // concatenação via spred
console.log(a4);