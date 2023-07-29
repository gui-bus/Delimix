// TODO Script de controle dos botões do cardápio
// !Obtém todos os botões
const buttons = document.querySelectorAll("[data-target]");

// !Obtém todos os painéis
const panels = document.querySelectorAll(".panel");

// !Oculta todos os painéis, exceto o painel 1
for (let i = 1; i < panels.length; i++) {
  panels[i].style.display = "none";
}

// !Armazena o botão do burger em uma variável
const burgerButton = document.querySelector("[data-target='panel-1']");

// !Percorre todos os botões e adiciona o evento de clique
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // !Remove a classe "bg-mainYellow" de todos os botões
    buttons.forEach((btn) => {
      btn.classList.remove("bg-mainYellow");
      btn.classList.add("bg-gray-200");
    });

    // !Adiciona a classe "bg-mainYellow" ao botão clicado
    button.classList.add("bg-mainYellow");
    button.classList.remove("bg-gray-200");

    // !Obtém o valor do atributo data-target do botão
    const target = button.getAttribute("data-target");

    // !Percorre todos os painéis e verifica se o painel atual é o alvo
    panels.forEach((panel) => {
      // !Verifica se o painel atual é o alvo
      if (panel.getAttribute("id") === target) {
        // !Exibe o painel atual
        panel.style.display = "block";
      } else {
        // !Oculta os outros painéis
        panel.style.display = "none";
      }
    });
  });
});

