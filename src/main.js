dadosApi = [];
console.log("Estou Funcionando!!");



function turn() {

}

function action() {

}

function gerar() {
  if (dadosApi.length == 0)
    axios.get('http://localhost:8080/DeathStar-Distroyer/Api/')
      .then(response => {
        (response.data).forEach(function (element) {
          dadosApi.push(element);
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

  console.log(dadosApi);
}

function remove() {
  dadosApi.shift()
  console.log(dadosApi);
}


function desviar() {
  remove();
  gerar();
  console.log("Desviando....");
}
function acelerar() {
  remove();
  gerar();
  console.log("Acelerando....");
}
function atirar() {
  var xwing = document.querySelector(".xwing");
  xwing.style.animation = "";
  setTimeout(() => xwing.style.animation = "atirar 1s infinite", 2)
  xwing.style.animation = "";
  //setTimeout(() => xwing.style.animation = "animacaonav 5s infinite", 5)
  remove();
  gerar();
  console.log("Atirando....");
}


function randomValues() {
  anime({
    targets: 'nav-space xwing',
    translateX: 270,
    easing: 'easeInOutQuad',
    duration: 750,
    complete: randomValues
  });
}

randomValues();