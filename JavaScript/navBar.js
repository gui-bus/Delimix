document.getElementById("menu-toggle").addEventListener("click", function () {
  // ! Obtém o elemento do menu móvel com o ID "mobile-menu"
  const mobileMenu = document.getElementById("mobile-menu");
  // ! Obtém o elemento do cabeçalho usando a seleção de consulta "header"
  const header = document.querySelector("header");

  mobileMenu.classList.toggle("hidden");

  if (!mobileMenu.classList.contains("hidden")) {
    // ! Obtém a altura do cabeçalho usando a propriedade "offsetHeight"
    const headerHeight = header.offsetHeight;
    mobileMenu.style.top = headerHeight + "px";
    mobileMenu.classList.add("fixed-menu");
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.top = "0";
    mobileMenu.classList.remove("fixed-menu");
    mobileMenu.style.display = 'none';
  }
});

// !Função para fechar o menu mobile
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.style.display = 'none';
}