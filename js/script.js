const botao = document.getElementById("botao");
const conselho = document.getElementById("conselho");
const numero = document.getElementById("id");

async function pegarConselho() {
  const resposta = await fetch("https://api.adviceslip.com/advice");
  const dados = await resposta.json();

  numero.innerText = dados.slip.id;
  conselho.innerText = dados.slip.advice;
}

botao.addEventListener("click", pegarConselho);

pegarConselho();