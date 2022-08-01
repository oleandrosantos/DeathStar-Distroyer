let dadosApi = [];
let vida = 3;
let moviments = 0;
let urlApi = 'http://distroyer.oleandrosantos.me/Api/';
cenario = document.getElementById('cenario');
iniciarJogo();

function gerar() {
  if (dadosApi.length == 0)
    axios.get(urlApi)
      .then(response => {
        (response.data).forEach(function (element) {
          dadosApi.push(element);
          definirCenario();
        });
      });
  else {
    axios.get(`${urlApi}1`)
      .then(response => {
        (response.data).forEach(function (element) {
          dadosApi.push(element);
        });
      });
  }
}

function iniciarJogo() {
  document.querySelector('#ResultadoGame').style.display = 'none';
  descricaoTurno("Bem vindo Capitão!");
  descricaoTurno("Vamos começar um novo jogo!");
  gerar();
  showLife();
}

function resetar() {
  vida = 3;
  moviments = 0;
  dadosApi.splice(0, dadosApi.length);
  descricaoTurno("");
  exibirMoviments();
  iniciarJogo();
}

function remover() {
  dadosApi.shift();
  definirCenario();
}

function desviar() {
  descricaoTurno("Desviando....");
  if (dadosApi[0].codigoCenarioXwing !== 0) {
    showLife(true);
    descricaoTurno("voce perdeu uma vida!");
  } else {

    descricaoTurno("Conseguimos Desviar Capitão!");
  }
  novoCenario();
}
function acelerar() {
  if (dadosApi[0].codigoCenarioXwing !== 2) {
    showLife(true);
    descricaoTurno("fomos atingidos e perdemos uma vida!!");
  } else {
    descricaoTurno("Conseguimos acelerar e reduzir os espaços Capitão!");
  }
  novoCenario();
  descricaoTurno("Acelerando....");
}
function atirar() {
  descricaoTurno("Atirando...");
  if (dadosApi[0].codigoCenarioXwing !== 1 && dadosApi[0].codigoCenarioXwing !== 3) {
    showLife(true);
    descricaoTurno("atirar não surtiu efeito e fomos atingidos!!");
  } else {
    if (dadosApi[0].codigoCenarioXwing == 3) {
      endGame(true);
    }
    descricaoTurno("Conseguimos Atigir o alvo Capitão!");
  }
  novoCenario();
}

function definirCenario() {
  cenario.innerHTML = `${dadosApi[0].valorCenario}`;
}

function showLife(loser = false) {
  if (loser) {
    vida--;
  }
  contentLife = document.getElementById("life");
  if (vida <= 0) {
    endGame();
  }
  contentLife.innerHTML = `Life: ${vida}`;
}

//finaliza o jogo criando um poup-up
function endGame(winGame = false) {
  if (winGame) {
    document.getElementById('resultGame').innerHTML = "Parabéns!! Você venceu!";
    document.getElementById('mensagemFimdeJogo').innerHTML = `Voce conseguiu realizar</br> Deseja Iniciar um novo jogo? `;

  } else {
    document.getElementById('resultGame').innerHTML = "GAME OVER!";
    document.getElementById('mensagemFimdeJogo').innerHTML = ` Voce conseguiu realizar ${moviments} - Movimentos </br> Deseja Reiniciar o jogo? `;
  }
  descricaoTurno("");
  document.querySelector('#ResultadoGame').style.display = 'block';

}

//Gera um novo cenario e imprime na tela
function novoCenario() {
  moviments++;
  exibirMoviments();
  remover();
  showLife();
  gerar();
}

//imprime a descrição do que esta ocorrendo na 
function descricaoTurno(texto) {
  if (texto === "") {
    document.getElementById('Descricao').innerHTML = "";
  } else {
    document.getElementById('Descricao').insertAdjacentHTML('beforeend', `${texto}</br>`);
  }
}

function exibirMoviments() {
  document.getElementById('moviments').innerHTML = `${moviments} - Movimentos`;
}
