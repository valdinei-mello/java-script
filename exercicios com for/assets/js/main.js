const elemenstos = [
    { tag: 'p', texto: 'oi' },
    { tag: 'div', texto: 'tudo' },
    { tag: 'footer', texto: 'bem' },
    { tag: 'section', texto: 'com você' },

];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i in elemenstos) {
    let { tag, texto } = elemenstos[i];
    let tagriada = document.createElement(tag);
    tagriada.innerHTML = texto;
    div.appendChild(tagriada);

}
container.appendChild(div);

