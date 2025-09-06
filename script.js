const titulo = document.getElementById("titulo");
const paragrafo1 = document.getElementById("paragrafo1");
const paragrafo2 = document.getElementById("paragrafo2");
const botao = document.getElementById("buttonMensg");
const container = document.querySelector(".container"); // pega a div do fundo

let alterado = false;

function atualizarConteudo() {
  if (alterado === false) {
    titulo.textContent = "Uma nova jornada começa!";
    paragrafo1.textContent = "Prepare-se para explorar conteúdos incríveis.";
    paragrafo2.textContent = "Estamos aqui para guiar você nessa jornada!";
    botao.textContent = "Voltar à mensagem inicial";

    // muda o fundo
    container.style.backgroundImage = "url('./boasvindas_2.jpg')";


    alterado = true;
  } else {
    titulo.textContent = "Bem-vindo ao nosso site!";
    paragrafo1.textContent = "Estamos muito felizes em ter você aqui.";
    paragrafo2.textContent = "Clique no botão abaixo para receber uma nova mensagem";
    botao.textContent = "Mudar Mensagem";

    // volta ao fundo inicial
    container.style.backgroundImage = "url('./boasvindas_1.jpg')";

    alterado = false;
  }
}

botao.addEventListener("click", atualizarConteudo);
