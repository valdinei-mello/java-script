const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // pega o estilo do body e salva em uma variavel
const backGroundColorBody = estilosBody.backgroundColor; // pega a cor de background do body e salve em uma vairiavel

console.log(backGroundColorBody);

for (let p of ps) {
    
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = '#FFFFFF';
}

