const html = document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const curtoBotao = document.querySelector('.app__card-button--curto');
const longoBotao = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const iniciarBotao = document.querySelector('#start-pause span');
const iconeBotao = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3'); //cria um objeto de audio em js
musica.loop = true; //deixa o áudio em loop
const inicioTimer = new Audio('/sons/play.wav');
const pausarTimer = new Audio('/sons/pause.mp3');
const fimDoTimer = new Audio('/sons/beep.mp3');

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    } else{
        musica.pause();
    }
})

focoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBotao.classList.add('active');
})

curtoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBotao.classList.add('active');
})

longoBotao.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBotao.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto){
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <=0){
        fimDoTimer.play();
        alert('Tempo finalizado!');
        zerar();
        return
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

iniciarBotao.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        pausarTimer.play();
        zerar();
        return
    }
    inicioTimer.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iconeBotao.setAttribute('src', '/imagens/pause.png');
    iniciarBotao.textContent = "Pausar";
}

function zerar() {
    clearInterval(intervaloId);
    iconeBotao.setAttribute('src', '/imagens/play_arrow.png');
    iniciarBotao.textContent = "Começar";
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();