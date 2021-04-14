
var hora = new Date(); // pega a hora/data do sistema;

if(hora>=0 && hora<=11){
    console.log("Bom dia");
}
else if (hora<=18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}
