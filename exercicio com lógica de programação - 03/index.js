function divisivel(n) {
    if (!isNaN(n)) {
        if (n % 3 === 0 && n % 5 === 0)
            return `FizzBuzz`;
        else if (n % 5 === 0)
            return `Buzz`
        else if (n % 3 === 0)
            return `Fizz`
        return `O numero ${n} não é divisivel por 3 e nem por 5`
    }
    return `O n° digitado não é um numero...`
}


for (let i=0; i<= 100; i++){
    console.log(`${i}.....${divisivel(i)}`);
    
}
