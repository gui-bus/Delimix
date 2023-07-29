const tel = 12981847553

// !Função para enviar uma mensagem personalizada para o WhatsApp
function whatsappMessage() {
    var text = '*Seja bem vindo ao WhatsApp da Delimix! Será um prazer atendê-lo.*\n'; // !Mensagem de boas-vindas e apresentação
    text += 'Para fazer seu pedido complete o formulário abaixo, e caso tenha qualquer dúvida não hesite em perguntar!\n\n'; // !Instruções para fazer o pedido
    text += '*Oi meu nome é:*\n\n'; // !Nome do cliente

    text += 'Aqui está a minha lista de pedidos:\n'; // !Indicação de que será fornecida uma lista de pedidos
    text += '*1.*\n'; // !Espaço reservado para o primeiro item do pedido
    text += '*2.*\n'; // !Espaço reservado para o segundo item do pedido
    text += '*3.*\n\n'; // !Espaço reservado para o terceiro item do pedido
    
    text += 'Entregue essas maravilhas no endereço abaixo:\n'; // !Instruções para fornecer o endereço de entrega
    text += '*Rua:* \n'; // !Espaço reservado para o endereço de entrega
    text += '*Número:* \n';
    text += '*Bairro:* \n';
    text += '*CEP:* \n';
    text += '*Ponto de referência:* \n\n';
    
    text += 'Insira abaixo qual será o meio de pagamento. (Dinheiro, PIX, Crédito, Débito, VA/VR)\n'; // !Instruções para escolher o meio de pagamento
    text += '*Pagamento:* \n\n'; // !Espaço reservado para o meio de pagamento escolhido
    
    text += '*Deixe o resto conosco, faremos o nosso melhor para tornar o seu pedido uma experiência deliciosa e memorável!* \n\n'; // !Garantia de que o pedido será tratado com cuidado e qualidade
    text += '*Obrigado por escolher a Delimix!*'; // !Agradecimento final ao cliente por escolher a empresa Delimix
  
    // !Converte a mensagem em texto para o formato de URL
    let encode = encodeURIComponent(text);
    let URL = `https://wa.me/${tel}?text=${encode}`; // !Cria a URL para abrir o WhatsApp com a mensagem pronta
  
    // !Abrir o link do WhatsApp quando o botão for clicado
    document.getElementById('btnWhats').addEventListener('click', function() {
      window.open(URL, '_blank');
    });

    document.getElementById('btnWhatsMobile').addEventListener('click', function() {
      window.open(URL, '_blank');
    });
}
  
// !Chame a função para configurar o botão do WhatsApp
whatsappMessage();


// !Função para enviar uma mensagem personalizada para o WhatsApp
function whatsappReservation() {
  var text = '*Seja bem vindo ao WhatsApp da Delimix! Será um prazer atendê-lo.*\n'; // !Mensagem de boas-vindas e apresentação
  text += 'Para fazer sua reserva basta completar o formulário abaixo, e caso tenha qualquer dúvida não hesite em perguntar!\n\n'; // !Instruções para fazer a reserva

  text += '*Nome:*\n'; // !Nome do cliente
  text += '*Data desejada:*\n'; // !Instruções para fazer a reserva
  text += '*Horário desejado*\n\n'; // !Instruções para fazer a reserva
  

  text += '*Deixe o resto conosco, faremos o nosso melhor para tornar o seu pedido uma experiência deliciosa e memorável!* \n\n'; // !Garantia de que o pedido será tratado com cuidado e qualidade
  text += '*Obrigado por escolher a Delimix!*'; // !Agradecimento final ao cliente por escolher a empresa Delimix

  // !Converte a mensagem em texto para o formato de URL
  let encode = encodeURIComponent(text);
  let URL = `https://wa.me/${tel}?text=${encode}`; // !Cria a URL para abrir o WhatsApp com a mensagem pronta

  // !Abrir o link do WhatsApp quando o botão for clicado
  document.getElementById('btnReservation').addEventListener('click', function() {
    window.open(URL, '_blank');
  });
}

// !Chame a função para configurar o botão do WhatsApp
whatsappReservation();


// !Função para enviar uma mensagem personalizada para o WhatsApp
function whatsappNews() {
  var text = '*Seja bem vindo ao WhatsApp da Delimix! Será um prazer atendê-lo.*\n'; // !Mensagem de boas-vindas e apresentação
  text += 'Para se inscrever no VIP basta completar o formulário abaixo, e caso tenha qualquer dúvida não hesite em perguntar!\n\n';

  text += '*Nome:*\n'; 
  text += '*Email:*\n'; 
  text += '*Celular para informaçoes:*\n'; 

  text += '*Obrigado por escolher a Delimix!*'; // !Agradecimento final ao cliente por escolher a empresa Delimix

  // !Converte a mensagem em texto para o formato de URL
  let encode = encodeURIComponent(text);
  let URL = `https://wa.me/${tel}?text=${encode}`; // !Cria a URL para abrir o WhatsApp com a mensagem pronta

  // !Abrir o link do WhatsApp quando o botão for clicado
  document.getElementById('btnNews').addEventListener('click', function() {
    window.open(URL, '_blank');
  });
}

// !Chame a função para configurar o botão do WhatsApp
whatsappNews();
