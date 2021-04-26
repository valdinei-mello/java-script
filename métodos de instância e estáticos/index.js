class ControleRemoto{
    constructor (tv){
        this.tv = tv;
        this.volume = 0;
    }
    //método de instância
    aumentar(){
        this.volume+=2;
    }
     dimeinuir(){
         this.volume-=2;
     }

    //método estático
    static trocapilha(){
        console.log('OK, vou trocar')
    }
}

const controle_1 = new ControleRemoto('LG')
controle_1.aumentar();
controle_1.aumentar();
controle_1.aumentar();
console.log(controle_1);

//acessando o método estatico
ControleRemoto.trocapilha();