const imagem = document.querySelector('img');
const botao = document.querySelector('#button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie=document.querySelector('#especie');
const condicao=documento.querySelector('#status');

gerarValorAleatorio = () => {
    return Math.florr(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}` , {
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.especies;
        condicao.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagem;