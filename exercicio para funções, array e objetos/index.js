function meuEscopo(){
    const form = document.querySelector('.form'); // selecionando pelo ID: #form;
    const resp = document.getElementById("resp");
    
    form.addEventListener('submit', recebeEventoForm);

    const pessoas = [];

    function recebeEventoForm(evento){
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector(".sobrenome");
       const altura = form.querySelector('.altura');
       const peso = form.querySelector('.peso');
       console.log(`Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Altura: ${altura.value}, Peso: ${peso.value}`);
       evento.preventDefault();

       pessoas.push({
           nome: nome.nodevalue,
           sobrenome: sobrenome.value,
           altura: altura.value,
           peso: peso.value
       });
       resp.innerHTML += `<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>`;

    }

    


}
meuEscopo();