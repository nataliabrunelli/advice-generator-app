const botao = document.getElementById("botao");
const conselho = document.getElementById("conselho");
const numero = document.getElementById("id");

async function pegarConselho() {
  try {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    
    if (!resposta.ok) {
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
      
    } else {
      const dados = await resposta.json();

      numero.innerText = dados.slip.id;
      conselho.innerText = dados.slip.advice;
    }

  } catch (error) {
    console.log(error);
  }
}

botao.addEventListener("click", pegarConselho);

pegarConselho();
