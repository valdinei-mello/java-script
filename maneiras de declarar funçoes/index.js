// Declaração de função (Fuction hoisting)
falaoi();
function falaoi(){
    console.log('oie');
};

// First-Class objects (Objeto de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado');
};

souUmDado();

// Arrow function
const funcaoArrow = () =>{
    console.log("Sou uma arrow function");
};
funcaoArrow();

// Dentro de um objeto 
const obj = {
    falar(){
        console.log('falando');
    }
}
obj.falar();
