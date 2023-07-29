// !Array com os depoimentos a serem exibidas
const testimonials = [
  {
    message:
      "Comida extremamente fresca e autêntica. <br />Os sabores são incríveis! <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Luana de Oliveira</span>`,
  },
  {
    message:
      "Entrega rápida e funcionários simpáticos. <br />A comida chegou quente e muito saborosa. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Thiago Lopes</span>`,
  },
  {
    message:
      "Excelente atendimento e pratos deliciosos. <br />Recomendo a todos! <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Carolina Mendes</span>`,
  },
  {
    message:
      "Cardápio variado e opções incríveis. <br />Sempre encontro algo que me agrada. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Ramon Sousa</span>`,
  },
  {
    message:
      "Sabor e qualidade em cada prato. <br />Uma experiência gastronômica incrível. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Fernando Castro</span>`,
  },
  {
    message:
      "Atendimento rápido e eficiente. <br />Sempre saio satisfeito do restaurante. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Gabriela Mendonça</span>`,
  },
  {
    message:
      "Pratos deliciosos e bem apresentados. <br />Um verdadeiro deleite para o paladar. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >André Santos</span>`,
  },
  {
    message:
      "Ambiente agradável e acolhedor. <br />Uma ótima opção para encontros. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Isabella Lima</span>`,
  },
  {
    message:
      "Opções vegetarianas saborosas. <br />O restaurante valoriza todos os paladares. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Ricardo Fernandes</span>`,
  },
  {
    message:
      "Comida deliciosa e atendimento impecável. <br />Sempre uma experiência incrível. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Mariana Silva</span>`,
  },
  {
    message:
      "Preços justos e porções generosas. <br />Uma excelente relação custo-benefício. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Pedro Rocha</span>`,
  },
  {
    message:
      "Variedade de sobremesas deliciosas. <br />Não resisto a um doce após a refeição. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Camila Oliveira</span>`,
  },
  {
    message:
      "Comida fresca e ingredientes de qualidade. <br />Uma garantia de sabor e saúde. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Gustavo Santos</span>`,
  },
  {
    message:
      "Ambiente familiar e acolhedor. <br />O lugar perfeito para reunir a família. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Ana Oliveira</span>`,
  },
  {
    message:
      "Opções de bebidas refrescantes. <br />Perfeitas para acompanhar as refeições. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Lucas Souza</span>`,
  },
  {
    message:
      "Atendimento atencioso e personalizado. <br />Sempre me sinto bem-vinda. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Juliana Costa</span>`,
  },
  {
    message:
      "Pratos bem temperados e com ingredientes frescos. Uma explosão de sabores. <br>" +
      `<span
        class="flex justify-end text-mainYellow font-semibold mt-1 mr-4"
      >Henrique Almeida</span>`,
  },

  
];

// !Índice atual do depoimento exibido
let currentIndex = 0;

// !Função para atualizar os depoimentos
function updateTestimonial() {
  const desktopTestimonial = document.getElementById("testimonial-desktop");
  const mobileTestimonial = document.getElementById("testimonial-mobile");

  // !Obtém o depoimento atual com base no índice atual
  const testimonial = testimonials[currentIndex];

  desktopTestimonial.innerHTML = testimonial.message;
  mobileTestimonial.innerHTML = testimonial.message;

  // !Atualiza o índice para exibir o próximo depoimento na próxima iteração
  currentIndex = (currentIndex + 1) % testimonials.length;
}

// !Atualiza a mensagem a cada 2000ms
setInterval(updateTestimonial, 2000);
