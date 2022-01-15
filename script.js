const imagem = document.body.querySelectorAll('img');
const botao = document.querySelector('button');
const listaDeNumeros = [0,1,2]

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    listaDeNumeros.forEach(elemento =>{
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers:{
            Accept: 'application/json',
            "Content-type":'application/json'
        }
    }).then((response) => response.json()).then((data) => {
            var nomeDoPersonagem = document.querySelector('#nome' + elemento.toString());
            var especie= document.querySelector('#especie' + elemento.toString());
            var condicao = document.querySelector('#status' + elemento.toString());
            imagem[elemento].src = data.image;
            imagem[elemento].alt = data.name;
            nomeDoPersonagem.innerHTML = data.name;
            especie.innerHTML = data.species;
            condicao.innerHTML = data.status;})
    });
}

botao.onclick = pegarPersonagem;