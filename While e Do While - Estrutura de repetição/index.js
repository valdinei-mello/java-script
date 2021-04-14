function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // retorna um numero inteiro;
}

let rand = random(1, 50);
let i = 0

while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand);
    i += 1;
};
console.log(`O sistema rodou ${i} vezes para achar o numero 10`)

do {
    rand = random(1, 50);
    console.log(rand);
    i += 1;
} while (rand !== 10);
console.log(`O sistema rodou ${i} vezes para achar o numero 10`)