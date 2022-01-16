let dadosApi = [];
var vida = 3;
var moviments = 0;
cenario = document.getElementById('cenario');

function gerar() {
  if (dadosApi.length == 0)
    axios.get('http://localhost:8080/DeathStar-Distroyer/Api/')
      .then(response => {
        (response.data).forEach(function (element) {
          dadosApi.push(element);
          definirCenario();
        });
      });
  else {
    axios.get(`http://localhost:8080/DeathStar-Distroyer/Api/1`)
      .then(response => {
        (response.data).forEach(function (element) {
          dadosApi.push(element);
        });
      });
  }
}

function iniciarJogo(reset = false) {
  if (reset) {
    document.getElementById('Descricao').innerHTML = "";
    life = 3;
    moviments = 0;
    dadosApi.splice(0, dadosApi.length);
  } else {
    descricaoTurno("Bem vindo Capitão!");
    descricaoTurno("Vamos começar um novo jogo!");
    gerar();
  }
  showLife();

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
      alert("Ganhamos!!!");
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
    vida--
  }
  contentLife = document.getElementById("life");
  if (vida <= 0) {
    newgame = window.confirm("GAME OVER!");
    if (newgame === true) {
      life = 3;
    }
  }
  contentLife.innerHTML = `Life: ${vida}`;
}

function novoCenario() {
  moviments++;
  document.getElementById('moviments').innerHTML = `${moviments} - Movimentos`;
  remover();
  showLife();
  gerar();
}

function descricaoTurno(texto) {
  document.getElementById('Descricao').insertAdjacentHTML('beforeend', `${texto}</br>`);
}