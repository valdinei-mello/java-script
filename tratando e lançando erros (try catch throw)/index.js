function soma(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error('A e B precisam ser numeros')
    }
    return a + b;
}

try{
    console.log(soma(1, 3))
    console.log(soma('12', 21))
}catch(err){
    console.log(err)
    console.log("DIGITE ALGUMA COISA QUE DE PRA FAZER CONTA");
}


