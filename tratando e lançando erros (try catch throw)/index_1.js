function retornahora(data){
    if(data && !( data instanceof Date)){
        throw new TypeError("Esperando uma instancia de Date")
    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br');
}

try{
    const data = new Date('1-1-1970 12:58:12');
    const hr = retornahora(data);
    console.log(hr); 
}catch(err){

}finally{
    console.log('Bom trabalho....')
}
