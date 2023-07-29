// TODO Função para mostrar depoimento e ativar botão correspondente

function mostrarDepoimento(depoimentoId) {
  // !Esconder todos os depoimentos
  const depoimentos = document.querySelectorAll(".depo");
  depoimentos.forEach((depoimento) => {
    depoimento.classList.add("hidden");
  });

  // !Mostrar o depoimento correspondente
  const depoimento = document.querySelector(`#depo-${depoimentoId}`);
  depoimento.classList.remove("hidden");

  // !Desativar todos os botões
  const botoes = document.querySelectorAll('a[id^="btn-"]');
  botoes.forEach((botao) => {
    botao.classList.remove("bg-mainYellow");
    botao.classList.add("bg-white");
  });

  // !Ativar o botão correspondente
  const botao = document.querySelector(`#btn-${depoimentoId}`);
  botao.classList.remove("bg-white");
  botao.classList.add("bg-mainYellow");
}

// !Event listeners para os botões
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

// !Adiciona um listener de evento de clique ao botão 1 para mostrar o depoimento 1
btn1.addEventListener("click", function () {
  mostrarDepoimento(1);
});

// !Adiciona um listener de evento de clique ao botão 2 para mostrar o depoimento 2
btn2.addEventListener("click", function () {
  mostrarDepoimento(2);
});

// !Adiciona um listener de evento de clique ao botão 3 para mostrar o depoimento 3
btn3.addEventListener("click", function () {
  mostrarDepoimento(3);
});

// !Mostrar o depoimento 1 por padrão
mostrarDepoimento(1);
