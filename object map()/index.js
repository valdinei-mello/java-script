const pessoas = [
    { id: 1, nome: 'maria' },
    { id: 2, nome: 'jorge' },
    { id: 3, nome: 'ana' }
];

/*
const novapessoas = {};
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novapessoas[id] = {...pessoa };
};

console.log(novapessoas);
*/


const novapessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novapessoas.set(id, {...pessoa });
};

console.log(novapessoas);
console.log(novapessoas.get(2));
