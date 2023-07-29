// !Array com os dados de cada item do menu
const menuData = [
  {
    type: "burger",
    imageSrc:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
    name: "Double Blaze",
    price: "R$ 19,90",
    description:
      "Um hambúrguer perfeito para os amantes de sabores intensos e suculentos. Com o delicioso molho especial da casa.",
    isPromo: true,
  },
  {
    type: "burger",
    imageSrc:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80",
    name: "BBQ Blitz",
    price: "R$ 27,90",
    description:
      "Delicie-se com o nosso clássico cheeseburger com queijo derretido e um toque especial de molho barbecue.",
  },
  {
    type: "burger",
    imageSrc:
      "https://images.unsplash.com/photo-1601348637967-140ce3f53fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    name: "Supreme Stack",
    price: "R$ 39,90",
    description:
      "Uma opção sem igual de hambúrguer repleto de sabor, com uma combinação de ingredientes de outro mundo.",
    isBestSeller: true,
  },
  {
    type: "burger",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/sanduiche-com-hamburguer-de-frango-tomate-queijo-e-alface_2829-16293.jpg?w=740&t=st=1690584896~exp=1690585496~hmac=393ec013219d48c83c95195a72006f25d93b04ea21fa26fb4681396286d0d73d",
    name: "Chicken Express",
    price: "R$ 27,90",
    description:
      "Experimente um hambúrguer de frango sensacional, com uma combinação perfeita de sabores e suculência.",
  },
  {
    type: "burger",
    imageSrc:
      "https://images.unsplash.com/photo-1614891669421-964261109bb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    name: "Mega Fusion",
    price: "R$ 24,90",
    description:
      "Uma explosão de sabores neste hambúrguer mega saboroso, com queijo derretido e hambúrguer duplo especial.",
  },
  {
    type: "burger",
    imageSrc:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
    name: "Fiery Dragon",
    price: "R$ 39,90",
    description:
      "Para os mais corajosos, um hambúrguer sensacional com um toque picante, que vai te levar a um mundo de sabor.",
    isSpicy: true,
  },
  {
    type: "burger",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/hamburguer-vegetariano-de-frente-para-o-balcao-com-tomates_23-2148784525.jpg?w=740&t=st=1690594094~exp=1690594694~hmac=58d2c650400a5439f21c9f8b3b1b745e76dc268b41b90d84e90b239c749f41bb",
    name: "Green Paradise",
    price: "R$ 22,90",
    description:
      "Uma experiência deliciosa e 100% vegana, com ingredientes frescos e selecionados que te levam ao real paraíso verde.",
    isVegan: true,
  },
  {
    type: "burger",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/um-hamburguer-com-um-ovo-nele_24640-82013.jpg?w=900&t=st=1690585200~exp=1690585800~hmac=0cd3639fb1be7d58299a50da69e498d2e88c7ea32400eab8c0ef651568f618fd",
    name: "Eggstasy",
    price: "R$ 26,90",
    description:
      "Um hambúrguer delicioso acompanhado de um ovo perfeitamente preparado para trazer ainda mais sabor.",
  },
  {
    type: "burger",
    imageSrc:
      "https://images.unsplash.com/photo-1551360021-0ff7982d13dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=610&q=80",
    name: "Donut Twist",
    price: "R$ 24,90",
    description:
      "Uma combinação inusitada e especial, um hambúrguer suculento servido em um incrível donut salgado.",
    isLimited: true,
  },
  {
    type: "pizza",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/pizza-com-salame-tomate-azeitona-e-queijo-em-uma-massa-com-farinha-de-trigo-integral-comida-italiana_2829-6855.jpg?w=740&t=st=1690587794~exp=1690588394~hmac=a82f2d9a7bbda03db147c9bd5af3a9af286e18ebe78414a8abc4313b4d3857f6",
    name: "Moon Fantasy",
    price: "R$ 54,90",
    description:
      "Uma deliciosa pizza de salame repleta de sabores intensos, feita com ingredientes frescos e de altíssima qualidade.",
  },
  {
    type: "pizza",
    imageSrc:
      "https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=842&q=80",
    name: "Catupiry Supreme",
    price: "R$ 54,90",
    description:
      "Uma pizza deliciosa e irresistível, coberta com um magnífico frango desfiado e o tão famoso catupiry cremoso.",
  },
  {
    type: "pizza",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/pizza-de-vista-lateral-em-um-carrinho-de-madeira-com-uma-toalha-de-mesa-horizontal_176474-2508.jpg?w=740&t=st=1690587942~exp=1690588542~hmac=836c434a5c93e4e2d58e9fdc474cb9bd66fa8a32e3285ae542e5a0c4bec0fddf",
    name: "Cheese Way",
    price: "R$ 49,90",
    description:
      "Uma deliciosa combinação de quatro queijos derretidos em cada pedaço, uma verdadeira delícia de outro mundo.",
    isPromo: true,
  },
  {
    type: "pizza",
    imageSrc:
      "https://panfleteria.sfo2.digitaloceanspaces.com/uploads/ofertas/img/01-Desconto-em-Pizza-no-Panela-Velha-Restaurante-em-Fortaleza.jpg",
    name: "Buffalo Eleganza",
    price: "R$ 69,90",
    description:
      "O que há de melhor, uma incrível e autêntica pizza de muçarela de búfala, tomate-cereja e folhas de manjericão.",
  },
  {
    type: "pizza",
    imageSrc:
      "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    name: "Pepperoni Heaven",
    price: "R$ 69,90",
    description:
      " Uma deliciosa pizza coberta com generosas fatias de pepperoni e queijo mozarela derretido de primeira.",
    isBestSeller: true,
  },
  {
    type: "pizza",
    imageSrc:
      "https://img.freepik.com/fotos-premium/pizza-italiana-fresca-com-salame-salsicha-queijo-e-cebola-na-mesa-de-madeira-decorada-com-ingredientes-foto-do-menu_201836-509.jpg",
    name: "Calabresa Classic",
    price: "R$ 54,90",
    description:
      "A deliciosa pizza de calabresa, com ingredientes que realçam o sabor da calabresa defumada e do queijo derretido.",
  },
  {
    type: "pizza",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/comida-de-pizza_144627-38484.jpg?t=st=1690590069~exp=1690590669~hmac=423ea80c8b1874fe6b8de2be482c47b42c22276a7c1cfe8b21bbe03b68d9aece",
    name: "Veggie Harmony",
    price: "R$ 54,90",
    description:
      "Uma pizza vegana repleta de harmonia de sabores. Cada pedaço é uma explosão incrível de sabores e texturas.",
    isVegan: true,
  },
  {
    type: "pizza",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/pizza-mista-com-cogumelos-e-azeitonas-extras_140725-3468.jpg?t=st=1690590185~exp=1690590785~hmac=52e4627ac2336cfb7c1c2551363c45c0bb2c148f4ba014e0be6a90528d5a3fd7",
    name: "Mushroom Mania",
    price: "R$ 69,90",
    description:
      "Coberta com uma variedade de cogumelos frescos e um toque de ervas aromáticas. Para amantes de cogumelos.",
    isVegan: true,
  },
  {
    type: "pizza",
    imageSrc:
      "https://img.freepik.com/fotos-premium/pizza-de-chocolate-com-morango-tradicional-da-culinaria-brasileira_317111-312.jpg?w=740",
    name: "Chocolicious",
    price: "R$ 69,90",
    description:
      "Uma combinação que é extraordinária e especial, uma pizza doce coberta chocolate belga e morangos frescos.",
    isSweet: true,
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/cachorro-quente-gostoso-de-angulo-alto-com-cebola_23-2149235979.jpg?w=740&t=st=1690594969~exp=1690595569~hmac=c172431101a54cd6de77f8761ade0215d1aa20189456a04a19d51bca5fe82435",
    name: "Hot Bacon",
    price: "R$ 19,90",
    description:
      "Um irresistível e delicioso hotdog recheado com saborosa cebola caramelizada e pedaços suculentos de bacon crocante.",
    isPromo: true,
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/delicioso-cachorro-quente-de-angulo-alto-e-batatas-fritas_23-2149235977.jpg?w=740&t=st=1690595020~exp=1690595620~hmac=faa6935e6f83a64a1df6474d817b537a517e014b263ae0b3e6a5812570f28e29",
    name: "Picles Fury",
    price: "R$ 24,90",
    description:
      "Um suculento hotdog que combina a suavidade do salsichão com o sabor marcante dos picles.",
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/cachorro-quente-com-ketchup-mostarda-e-alface-na-mesa-de-madeira_2829-19844.jpg?w=740&t=st=1690595037~exp=1690595637~hmac=702bb8dab927f157afdc7120314855280982d80f73567598ffd216b096750738",
    name: "Hot Veg",
    price: "R$ 24,90",
    description:
      "Delicie-se com a combinação perfeita de salsicha vegana saborosa e uma sensacional salada fresca de primeira.",
    isVegan: true,
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/gourmet-grelhados-todo-cachorro-quente-de-carne-com-acompanhamentos-e-batatas-fritas-deliciosos-e-simples-cachorros-quentes-com-mostarda-pimenta-cebola-e-nachos-cachorro-quente-totalmente-carregado-com-coberturas-variadas-em-uma-prancha-de-remo_1150-44649.jpg?w=740&t=st=1690595146~exp=1690595746~hmac=c6da971ab60ee60fb50f41efd524daa380a47362cb720f8dcc93f2f66a7ffb2d",
    name: "Timeless Wonder",
    price: "R$ 24,90",
    description:
      "Um irresistível hotdog que traz o melhor dos sabores clássicos acompanhado de deliciosas fritas crocantes.",
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/arranjo-de-cachorro-quente-delicioso-de-angulo-alto_23-2148768190.jpg?w=740&t=st=1690595178~exp=1690595778~hmac=501ff9894298c3be2eb615f3844c7d8eb6f4e62fb926eeef280982c3a3c7d136",
    name: "Hot Supreme",
    price: "R$ 24,90",
    description:
      "Um hotdog excepcional com uma nova salsicha especial e temperada que eleva o sabor a um novo patamar.",
    isSpicy: true,
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/sanduiche-de-salsichas-com-molho-picante-e-alface_140725-5914.jpg?w=740&t=st=1690595233~exp=1690595833~hmac=fa3568a05e4f403b0d386d0ed2f1d1607fa3875c06104edca82d6f123bcc4797",
    name: "Mega Dog",
    price: "R$ 24,90",
    description:
      "Uma experiência irresistível que vai além de um simples hotdog. A combinação perfeita entre salsicha e molho especial.",
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/delicioso-cachorros-quentes-com-aneis-de-cebola-fritos_23-2147684581.jpg?w=740&t=st=1690595280~exp=1690595880~hmac=68b4f91ca3257534cb33be8b18fada4cab06edfb9f454d7f0938fbd2c7d505b7",
    name: "Hot Combo Chicken",
    price: "R$ 39,90",
    description:
      "Delicioso combo com dois hotdogs de frango desfiado, acompanha os magníficos molhos especiais da casa.",
    isBestSeller: true,
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/arranjo-de-cachorros-quentes-e-molhos-de-angulo-alto_23-2148768167.jpg?w=740&t=st=1690595510~exp=1690596110~hmac=42a8a6385686be5ea2c4d5fff43d247062423f35cd6f04d9e4ecfaf4ec278458",
    name: "Hot Combo Prime",
    price: "R$ 59,90",
    description:
      "Uma explosão de sabor em três deliciosos hotdogs. Desfrute dessa combinação perfeita de sensações com toda a família",
  },
  {
    type: "hotdog",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/captura-aproximada-de-deliciosos-cachorros-quentes-com-molhos-saborosos_181624-58972.jpg?w=740&t=st=1690595327~exp=1690595927~hmac=73f9d512dee6e21ff11f8cefe76af57a21d5746b9b4d2938891f4452bb4e8b2b",
    name: "Hot Combo Gourmet",
    price: "R$ 69,90",
    description:
      "Saboreie essas três deliciosas combinações preparadas com ingredientes premium e molhos refinados sem igual.",
    isLimited: true,
  },
  {
    type: "tacos",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/tacos-mexicanos-com-frango-pimentao-feijao-preto-e-legumes-frescos_2829-20049.jpg?w=740&t=st=1690656995~exp=1690657595~hmac=14ce625804a5ac849803c2f4aeb57e15f045483a24f2363d42bcda43eb2c79b4",
    name: "Chicken Taco",
    price: "R$ 23,90",
    description:
      "Desfrute dos sabores deste delicioso taco de frango, feijão e legumes. Essa combinação é simplesmente irresistível.",
    isPromo: true,
  },
  {
    type: "tacos",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/tacos-mexicanos-com-carne-em-molho-de-tomate-e-salsa_2829-14218.jpg?w=740&t=st=1690657132~exp=1690657732~hmac=7d23b4933cc1958ed707b70ed2622e1903fa8b501d23d0926ea04d0f3f00cad2",
    name: "Beef Taco",
    price: "R$ 27,90",
    description:
      "Uma verdadeira festa para os amantes de carne, com uma combinação que vai te conquistar de primeira.",
  },
  {
    type: "tacos",
    imageSrc:
      " https://img.freepik.com/fotos-gratis/angulo-alto-do-conceito-de-comida-mexicana_23-2148629376.jpg?w=740&t=st=1690657182~exp=1690657782~hmac=6c91fed76dd951b24def123330892d8597d132abec2580a53fcb61ecf6879787",
    name: "Crispy Fiesta Taco",
    price: "R$ 27,90",
    description:
      "Um taco irresistível com frango crispy crocante e um toque especial do nosso molho picante de outro mundo.",
    isBestSeller: true,
  },

  {
    type: "tacos",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/vista-superior-do-arranjo-de-tacos-deliciosos_23-2148629322.jpg?w=740&t=st=1690657148~exp=1690657748~hmac=ccbeae751f3bbbc83bd25aca29b958a3ce16c14c50a35452238316c7a2758705",
    name: "Veggie Taco Bliss",
    price: "R$ 27,90",
    description:
      "Um taco vegetariano repleto de sabores e texturas incríveis. Desfrute de uma combinação de ingredientes frescos.",
    isVegan: true,
  },
  {
    type: "tacos",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/taco-fresco_144627-38300.jpg?w=740&t=st=1690657221~exp=1690657821~hmac=da49ed8710d44158ca9248e36d43c787cc4e8aedb7ec47f3812cbbaf997b19e4",
    name: "Chilli Taco Supreme",
    price: "R$ 27,90",
    description:
      "Um taco delicioso e picante com chilli de carne moída, feijão, pimentões e temperos especiais.",
    isSpicy: true,
  },
  {
    type: "tacos",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/tacos-mexicanos-tradicionais-com-carnes-e-vegetais-na-mesa-de-madeira_123827-19990.jpg?w=740&t=st=1690657462~exp=1690658062~hmac=ff6298bdd33ff95a15e5a7e522d95eddd1b5031c220e2c628a975c51962a5ce9",
    name: "Mega Taco",
    price: "R$ 27,90",
    description:
      "Um taco super recheado com uma combinação generosa de ingredientes saborosos, simplismente delicioso.",
  },
  {
    type: "tacos",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/taco-de-carne-grelhada-na-hora-com-guacamole-e-coentro-gerado-por-ia_188544-39278.jpg?w=900&t=st=1690657677~exp=1690658277~hmac=ebd184af8fb73c4b62b3ac7f44e6d21c0d91e67ad74df4f2e511c8f5f1734c8b",
    name: "The Classic",
    price: "R$ 27,90",
    description:
      "Um clássico taco mexicano com deliciosa carne moída temperada, envolvido em uma autêntica tortilha de milho. ",
  },
  {
    type: "tacos",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/quesadilla-mexicana-com-frango-milho-pimentao-e-salsa_2829-19734.jpg?w=740&t=st=1690657583~exp=1690658183~hmac=d37dc79a414aa211d2b88375bacc63fe5a610419a49ea6be222684123fe0cb2e",
    name: "Quesadilla",
    price: "R$ 22,90",
    description:
      "Uma irresistível quesadilla mexicana recheada com suculento frango, milho, pimentão e salsa picante.",
    isPromo: true,
  },

  {
    type: "tacos",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/nacho-mexicano-chips-e-molho-de-salsa-na-tigela_2829-14457.jpg?w=740&t=st=1690657390~exp=1690657990~hmac=38c10d60f0652de4098d4b7f728726162a169721e78ab2db4d3bc10366760af1",
    name: "Nacho Mania",
    price: "R$ 27,90",
    description:
      "Aproveite essa opção saborosa e autêntica da culinária mexicana, que é ideal para compartilhar com os amigos.",
  },
  {
    type: "fries",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/batatas-fritas-e-ketchup_144627-32466.jpg?w=740&t=st=1690659815~exp=1690660415~hmac=3ef5c5aeda29a3ceddd43981ee931378795ac2d3df1c50eee17888226c3681f7",
    name: "Classic Fries",
    price: "R$ 9,90",
    description:
      "Nossa clássica porção de batatas fritas especiais é irresistivelmente crocante por fora e macia por dentro.",
    isPromo: true,
  },
  {
    type: "fries",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/vista-lateral-de-batatas-fritas-com-tempero_141793-4899.jpg?w=740&t=st=1690659933~exp=1690660533~hmac=373b383cb16f61df3d5d96cefa002e2187d84a8b0d5eedb4a63dd3639723ffb9",
    name: "Rustic Fries",
    price: "R$ 12,90",
    description:
      "As batatas rústicas são cortadas em pedaços mais grossos, proporcionando uma textura mais robusta e saborosa.",
  },
  {
    type: "fries",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/batatas-fritas-caseiras-assadas-com-maionese-molho-de-tomate-e-alecrim-na-placa-de-madeira-saborosas-batatas-fritas-na-tabua-em-saco-de-papel-pardo-no-fundo-da-mesa-de-pedra-preta-alimentos-pouco-saudaveis_1150-41840.jpg?w=740&t=st=1690660178~exp=1690660778~hmac=35ea7d5478961687bbfeadc4db8a9478e240a2943ae9bbf76af3879719778fcb",
    name: "Prime Fries",
    price: "R$ 12,90",
    description:
      "Essa porção é perfeita para quem busca um toque de diversão ao saborear uma clássica batata frita.",
  },
  {
    type: "fries",
    imageSrc:
      "https://cdn.casaeculinaria.com/wp-content/uploads/2023/01/18141914/onion-rings-1-860x484.jpg",
    name: "Onion Rings",
    price: "R$ 15,90",
    description:
      "Delicie-se com nossa porção de onion rings crocantes e douradas. Uma escolha simplismente deliciosa.",
  },
  {
    type: "fries",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/caixa-de-frango-frito-com-ketchup_23-2148273043.jpg?w=740&t=st=1690660441~exp=1690661041~hmac=a83e747b2d5bdd5c438ef15812c04edd40a3d3478a0f9a35b4584ef7de045cc6",
    name: "Nugget Delight",
    price: "R$ 18,90",
    description:
      "Nuggets crocantes e irresistíveis, feitos com pedaços suculentos e saborosos de frango empanado.",
    isPromo: true,
  },
  {
    type: "fries",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/asas-de-frango-assadas-no-estilo-asiatico_2829-10162.jpg?w=740&t=st=1690660482~exp=1690661082~hmac=e4b00646c0008de8823b1730cbd9dcfe45caf76e1503acb3652ce331a15321e2",
    name: "Chicken Wings",
    price: "R$ 21,90",
    description:
      "Delicie-se com nossas asas de frango suculentas e temperadas, preparadas com carinho para seu paladar.",
    isBestSeller: true,
  },
  {
    type: "fries",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/nuggets-de-frango-tomate-cereja-alface-vista-inferior-numa-tabua-na-mesa-escura-com-espaco-de-copia_140725-112077.jpg?w=740&t=st=1690660539~exp=1690661139~hmac=20cef82af1e4d56fda182ea6ea9612bb5842bf3320a0e831f99f037de8fe18cb",
    name: "Cheese Crispy",
    price: "R$ 18,90",
    description:
      "Bolinhas de queijo premium irresistíveis, uma combinação perfeita de queijo derretido e uma camada crocante por fora.",
  },
  {
    type: "fries",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/salada-de-tomate-pepino-cebola-roxa-e-folhas-de-alface-menu-de-vitamina-verao-saudavel-comida-vegetal-vegana-mesa-de-jantar-vegetariana_2829-6473.jpg?w=740&t=st=1690660613~exp=1690661213~hmac=068a1791980de47db9846ba5f9b607b4d5e95b7786e38101ae1761ff0a497094",
    name: "Fresh Garden",
    price: "R$ 12,90",
    description:
      "Uma opção saudável e deliciosa para acompanhar seus pratos favoritos ou como uma refeição leve e nutritiva por si só.",
    isVegan: true,
  },
  {
    type: "fries",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/prato-com-um-alimento-de-dieta-ceto-tomate-cereja-peito-de-frango-ovos-cenoura-salada-com-rucula-e-espinafre-keto-almoco_2829-16953.jpg?w=740&t=st=1690660675~exp=1690661275~hmac=1d23f2235b604a5a9ebe51b2deaca33bcc09c95a8dfc39b0ac8023a592360c83",
    name: "Spring Salad",
    price: "R$ 15,90",
    description:
      "Delicie-se com a nossa apetitosa Salada Primavera, uma combinação sensacional de folhas frescas e ovos cozidos.",
    isLimited: true,
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/bebida-fresca-de-cola-com-limao-verde_144627-12393.jpg?w=740&t=st=1690663491~exp=1690664091~hmac=53f3089e1db3172b5b15e79200bf82f6656b006e91eb433b30e4cc934d4624e4",
    name: "Coca Cola",
    price: "R$ 15,90",
    description:
      "Uma bebida refrescante e deliciosa para acompanhar qualquer refeição ou para se refrescar em um dia quente.",
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/alimentos-que-estimulam-a-imunidade-para-um-estilo-de-vida-saudavel-com-frutas-citricas_23-2149211498.jpg?w=740&t=st=1690664499~exp=1690665099~hmac=9c9573f2a843d6b8566d4bafe5f97b68f655df2ccc459bfe90266b8e78e66dc0",
    name: "Suco Natural",
    price: "R$ 15,90",
    description:
      "Uma opção saudável e repleta de vitaminas, perfeita para quem aprecia o sabor autêntico das frutas frescas.",
      isBestSeller: true,
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/variedade-de-canecas-de-cerveja-de-natal_23-2149757159.jpg?w=740&t=st=1690664543~exp=1690665143~hmac=621c7a48ddb4ed85d9fa69b37b58b53cd951b3eeb739d166b681f71a81dbf362",
    name: "Cerveja",
    price: "R$ 8,90",
    description:
      "Uma cerveja gelada e saborosa, perfeita para relaxar e curtir bons momentos com amigos. Temos varias opções.",
      isPromo: true,
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/bebida-deliciosa-com-folhas-de-hortela_23-2148751852.jpg?w=740&t=st=1690664169~exp=1690664769~hmac=19e10aa9da6d1c245a40140576bb302b1a5a6bc0a4784f8994847a7f613e7ddd",
    name: "Caipirinha",
    price: "R$ 18,90",
    description:
      "Uma mistura tropical de limão, açúcar, gelo e cachaça, perfeita para quem busca um drink com sabor único e refrescante.",
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/fatias-de-frutas-perto-de-copo-de-bebida-com-gelo-e-ervas-a-bordo_23-2148107705.jpg?w=740&t=st=1690663656~exp=1690664256~hmac=3775679bccf749a25784130368864a0898b4c1f5b78d25288592b399a97e1267",
    name: "Mojito",
    price: "R$ 20,90",
    description:
      "Um clássico refrescante e saboroso feito com rum, hortelã, limão e açúcar, perfeito para curtir todos os momentos.",
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/delicioso-coquetel-pina-colada-com-folhas_23-2150143195.jpg?w=740&t=st=1690663874~exp=1690664474~hmac=89f619cd3b6c062a0adc9922834d308380fec41d13b7467bf6a906eee6b2ae3a",
    name: "Piña Colada",
    price: "R$ 22,90",
    description:
      "Uma deliciosa mistura tropical de coco, abacaxi e rum, ideal para quem busca uma experiência exótica e saborosa.",
      isLimited: true,
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/um-copo-de-coquetel-com-cubos-de-gelo-decorado-com-frutas-e-limao-secos_141793-1983.jpg?w=740&t=st=1690663242~exp=1690663842~hmac=b8ed631ddf77a7626d3ee3fa4b46acb853837f7ae2de041a244a63dde2104712",
    name: "Negroni",
    price: "R$ 21,90",
    description:
      "Um drink clássico e sofisticado feito com gin, vermute e campari, perfeito para paladares sofisticados.",
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/cocktail-cosmopolita-de-vista-lateral-com-licor-e-fatia-de-limao_141793-3623.jpg?w=740&t=st=1690663910~exp=1690664510~hmac=89fb6ef817c0ecb2b56cabd77c2f76b3c08f7023172f4beb42a7e3562bbb4a4b",
    name: "Cosmopolitan",
    price: "R$ 19,90",
    description:
      "Um coquetel elegante e requintado, perfeito para quem aprecia drinks leves e extremamente refrescantes.",
  },
  {
    type: "drink",
    imageSrc:
      "https://img.freepik.com/fotos-gratis/copo-de-copos-congelados_1203-9533.jpg?w=740&t=st=1690663332~exp=1690663932~hmac=c5af30eb59859d290c1922fe0a2917dd0e3003d970fe417d8ba6e0cb73de64de",
    name: "Tropical Gin",
    price: "R$ 23,90",
    description:
      "Um drink exótico e saboroso feito com gin e suco de frutas tropicais, perfeito para uma experiência especial.",
  },
];

// !Função auxiliar para adicionar o span indicador com a tag correspondente
function addIndicatorSpan(text, bgColor, iconClass) {
  const indicatorSpan = document.createElement("span");
  indicatorSpan.className =
    "absolute top-0 left-0 bg-" +
    bgColor +
    " text-white text-xs font-semibold px-2 py-1 rounded-br-xl rounded-tl-xl";
  indicatorSpan.innerHTML = '<i class="' + iconClass + '"></i> ' + text;
  return indicatorSpan;
}

// !Função para criar e preencher um item do menu de burgers
function createMenuItem(itemData) {
  const menuItem = document.createElement("div");
  menuItem.className =
    "flex flex-col justify-center items-center rounded-xl shadow-xl bg-white hover:bg-gray-200 p-4 mb-4 font-montserrat cursor-pointer";

  const imageContainer = document.createElement("div");
  imageContainer.className = "relative";
  menuItem.appendChild(imageContainer);

  const image = document.createElement("img");
  image.src = itemData.imageSrc;
  image.alt = "Burger";
  image.className = "w-56 h-44 rounded-xl";
  imageContainer.appendChild(image);

  // TODO Tags de indicação de característica
  // !Verificar se o item é vegano e adicionar o span correspondente
  if (itemData.isVegan) {
    const veganElement = addIndicatorSpan("Vegano", "green-700", "fas fa-leaf");
    imageContainer.appendChild(veganElement);
  }

  // !Verificar se o item é promocional e adicionar o span correspondente
  if (itemData.isPromo) {
    const promoElement = addIndicatorSpan(
      "Promoção",
      "green-500",
      "fas fa-tags"
    );
    imageContainer.appendChild(promoElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isBestSeller) {
    const bestSellerElement = addIndicatorSpan(
      "Mais vendido",
      "red-500",
      "fas fa-star"
    );
    imageContainer.appendChild(bestSellerElement);
  }

  // !Verificar se o item é picante e adicionar o span correspondente
  if (itemData.isSpicy) {
    const spicyElement = addIndicatorSpan(
      "Picante",
      "red-700",
      "fas fa-pepper-hot"
    );
    imageContainer.appendChild(spicyElement);
  }

  // !Verificar se o item é limitado e adicionar o span correspondente
  if (itemData.isLimited) {
    const limitedElement = addIndicatorSpan(
      "Limitado",
      "purple-700",
      "fas fa-certificate"
    );
    imageContainer.appendChild(limitedElement);
  }

  const spaceElement = document.createElement("div");
  spaceElement.style.height = "16px";
  menuItem.appendChild(spaceElement);

  const nameElement = document.createElement("h3");
  nameElement.className = "text-xl font-semibold";
  nameElement.textContent = itemData.name;
  menuItem.appendChild(nameElement);

  const priceElement = document.createElement("p");
  priceElement.className = "text-gray-600 mt-2";
  priceElement.innerHTML = `<span class="price">${itemData.price}</span>`;
  menuItem.appendChild(priceElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "w-56 text-sm text-gray-500 mt-2 text-center";
  descriptionElement.textContent = itemData.description;
  menuItem.appendChild(descriptionElement);

  return menuItem;
}

// !Função para criar e preencher um item do menu de pizzas
function createPizzaItem(itemData) {
  const pizzaItem = document.createElement("div");
  pizzaItem.className =
    "flex flex-col justify-center items-center rounded-xl shadow-xl bg-white hover:bg-gray-200 p-4 mb-4 font-montserrat cursor-pointer";

  const imageContainer = document.createElement("div");
  imageContainer.className = "relative";
  pizzaItem.appendChild(imageContainer);

  const image = document.createElement("img");
  image.src = itemData.imageSrc;
  image.alt = "Pizza";
  image.className = "w-56 h-44 rounded-xl";
  imageContainer.appendChild(image);

  // TODO Tags de indicação de característica
  // !Verificar se o item é vegano e adicionar o span correspondente
  if (itemData.isVegan) {
    const veganElement = addIndicatorSpan("Vegano", "green-700", "fas fa-leaf");
    imageContainer.appendChild(veganElement);
  }

  // !Verificar se o item é promocional e adicionar o span correspondente
  if (itemData.isPromo) {
    const promoElement = addIndicatorSpan(
      "Promoção",
      "green-500",
      "fas fa-tags"
    );
    imageContainer.appendChild(promoElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isBestSeller) {
    const bestSellerElement = addIndicatorSpan(
      "Mais vendido",
      "red-500",
      "fas fa-star"
    );
    imageContainer.appendChild(bestSellerElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isSweet) {
    const sweetElement = addIndicatorSpan(
      "Doce",
      "pink-500",
      "fas fa-candy-cane"
    );
    imageContainer.appendChild(sweetElement);
  }

  const spaceElement = document.createElement("div");
  spaceElement.style.height = "16px";
  pizzaItem.appendChild(spaceElement);

  const nameElement = document.createElement("h3");
  nameElement.className = "text-xl font-semibold";
  nameElement.textContent = itemData.name;
  pizzaItem.appendChild(nameElement);

  const priceElement = document.createElement("p");
  priceElement.className = "text-gray-600 mt-2";
  priceElement.innerHTML = `<span class="price">${itemData.price}</span>`;
  pizzaItem.appendChild(priceElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "w-56 text-sm text-gray-500 mt-2 text-center";
  descriptionElement.textContent = itemData.description;
  pizzaItem.appendChild(descriptionElement);

  return pizzaItem;
}

// !Função para criar e preencher um item do menu de hotdogs
function createHotDogItem(itemData) {
  const hotDogItem = document.createElement("div");
  hotDogItem.className =
    "flex flex-col justify-center items-center rounded-xl shadow-xl bg-white hover:bg-gray-200 p-4 mb-4 font-montserrat cursor-pointer";

  const imageContainer = document.createElement("div");
  imageContainer.className = "relative";
  hotDogItem.appendChild(imageContainer);

  const image = document.createElement("img");
  image.src = itemData.imageSrc;
  image.alt = "HotDog";
  image.className = "w-56 h-44 rounded-xl";
  imageContainer.appendChild(image);

  // TODO Tags de indicação de característica
  // !Verificar se o item é vegano e adicionar o span correspondente
  if (itemData.isVegan) {
    const veganElement = addIndicatorSpan("Vegano", "green-700", "fas fa-leaf");
    imageContainer.appendChild(veganElement);
  }

  // !Verificar se o item é promocional e adicionar o span correspondente
  if (itemData.isPromo) {
    const promoElement = addIndicatorSpan(
      "Promoção",
      "green-500",
      "fas fa-tags"
    );
    imageContainer.appendChild(promoElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isBestSeller) {
    const bestSellerElement = addIndicatorSpan(
      "Mais vendido",
      "red-500",
      "fas fa-star"
    );
    imageContainer.appendChild(bestSellerElement);
  }

  // !Verificar se o item é picante e adicionar o span correspondente
  if (itemData.isSpicy) {
    const spicyElement = addIndicatorSpan(
      "Picante",
      "red-700",
      "fas fa-pepper-hot"
    );
    imageContainer.appendChild(spicyElement);
  }

  // !Verificar se o item é limitado e adicionar o span correspondente
  if (itemData.isLimited) {
    const limitedElement = addIndicatorSpan(
      "Limitado",
      "purple-700",
      "fas fa-certificate"
    );
    imageContainer.appendChild(limitedElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isSweet) {
    const sweetElement = addIndicatorSpan(
      "Doce",
      "pink-500",
      "fas fa-candy-cane"
    );
    imageContainer.appendChild(sweetElement);
  }

  const spaceElement = document.createElement("div");
  spaceElement.style.height = "16px";
  hotDogItem.appendChild(spaceElement);

  const nameElement = document.createElement("h3");
  nameElement.className = "text-xl font-semibold";
  nameElement.textContent = itemData.name;
  hotDogItem.appendChild(nameElement);

  const priceElement = document.createElement("p");
  priceElement.className = "text-gray-600 mt-2";
  priceElement.innerHTML = `<span class="price">${itemData.price}</span>`;
  hotDogItem.appendChild(priceElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "w-56 text-sm text-gray-500 mt-2 text-center";
  descriptionElement.textContent = itemData.description;
  hotDogItem.appendChild(descriptionElement);

  return hotDogItem;
}

// !Função para criar e preencher um item do menu de tacos
function createTacoItem(itemData) {
  const tacoItem = document.createElement("div");
  tacoItem.className =
    "flex flex-col justify-center items-center rounded-xl shadow-xl bg-white hover:bg-gray-200 p-4 mb-4 font-montserrat cursor-pointer";

  const imageContainer = document.createElement("div");
  imageContainer.className = "relative";
  tacoItem.appendChild(imageContainer);

  const image = document.createElement("img");
  image.src = itemData.imageSrc;
  image.alt = "Taco";
  image.className = "w-56 h-44 rounded-xl";
  imageContainer.appendChild(image);

  // TODO Tags de indicação de característica
  // !Verificar se o item é vegano e adicionar o span correspondente
  if (itemData.isVegan) {
    const veganElement = addIndicatorSpan("Vegano", "green-700", "fas fa-leaf");
    imageContainer.appendChild(veganElement);
  }

  // !Verificar se o item é promocional e adicionar o span correspondente
  if (itemData.isPromo) {
    const promoElement = addIndicatorSpan(
      "Promoção",
      "green-500",
      "fas fa-tags"
    );
    imageContainer.appendChild(promoElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isBestSeller) {
    const bestSellerElement = addIndicatorSpan(
      "Mais vendido",
      "red-500",
      "fas fa-star"
    );
    imageContainer.appendChild(bestSellerElement);
  }

  // !Verificar se o item é picante e adicionar o span correspondente
  if (itemData.isSpicy) {
    const spicyElement = addIndicatorSpan(
      "Picante",
      "red-700",
      "fas fa-pepper-hot"
    );
    imageContainer.appendChild(spicyElement);
  }

  // !Verificar se o item é limitado e adicionar o span correspondente
  if (itemData.isLimited) {
    const limitedElement = addIndicatorSpan(
      "Limitado",
      "purple-700",
      "fas fa-certificate"
    );
    imageContainer.appendChild(limitedElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isSweet) {
    const sweetElement = addIndicatorSpan(
      "Doce",
      "pink-500",
      "fas fa-candy-cane"
    );
    imageContainer.appendChild(sweetElement);
  }

  const spaceElement = document.createElement("div");
  spaceElement.style.height = "16px";
  tacoItem.appendChild(spaceElement);

  const nameElement = document.createElement("h3");
  nameElement.className = "text-xl font-semibold";
  nameElement.textContent = itemData.name;
  tacoItem.appendChild(nameElement);

  const priceElement = document.createElement("p");
  priceElement.className = "text-gray-600 mt-2";
  priceElement.innerHTML = `<span class="price">${itemData.price}</span>`;
  tacoItem.appendChild(priceElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "w-56 text-sm text-gray-500 mt-2 text-center";
  descriptionElement.textContent = itemData.description;
  tacoItem.appendChild(descriptionElement);

  return tacoItem;
}

// !Função para criar e preencher um item do menu de tacos
function createFriesItem(itemData) {
  const friesItem = document.createElement("div");
  friesItem.className =
    "flex flex-col justify-center items-center rounded-xl shadow-xl bg-white hover:bg-gray-200 p-4 mb-4 font-montserrat cursor-pointer";

  const imageContainer = document.createElement("div");
  imageContainer.className = "relative";
  friesItem.appendChild(imageContainer);

  const image = document.createElement("img");
  image.src = itemData.imageSrc;
  image.alt = "Taco";
  image.className = "w-56 h-44 rounded-xl";
  imageContainer.appendChild(image);

  // TODO Tags de indicação de característica
  // !Verificar se o item é vegano e adicionar o span correspondente
  if (itemData.isVegan) {
    const veganElement = addIndicatorSpan("Vegano", "green-700", "fas fa-leaf");
    imageContainer.appendChild(veganElement);
  }

  // !Verificar se o item é promocional e adicionar o span correspondente
  if (itemData.isPromo) {
    const promoElement = addIndicatorSpan(
      "Promoção",
      "green-500",
      "fas fa-tags"
    );
    imageContainer.appendChild(promoElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isBestSeller) {
    const bestSellerElement = addIndicatorSpan(
      "Mais vendido",
      "red-500",
      "fas fa-star"
    );
    imageContainer.appendChild(bestSellerElement);
  }

  // !Verificar se o item é picante e adicionar o span correspondente
  if (itemData.isSpicy) {
    const spicyElement = addIndicatorSpan(
      "Picante",
      "red-700",
      "fas fa-pepper-hot"
    );
    imageContainer.appendChild(spicyElement);
  }

  // !Verificar se o item é limitado e adicionar o span correspondente
  if (itemData.isLimited) {
    const limitedElement = addIndicatorSpan(
      "Limitado",
      "purple-700",
      "fas fa-certificate"
    );
    imageContainer.appendChild(limitedElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isSweet) {
    const sweetElement = addIndicatorSpan(
      "Doce",
      "pink-500",
      "fas fa-candy-cane"
    );
    imageContainer.appendChild(sweetElement);
  }

  const spaceElement = document.createElement("div");
  spaceElement.style.height = "16px";
  friesItem.appendChild(spaceElement);

  const nameElement = document.createElement("h3");
  nameElement.className = "text-xl font-semibold";
  nameElement.textContent = itemData.name;
  friesItem.appendChild(nameElement);

  const priceElement = document.createElement("p");
  priceElement.className = "text-gray-600 mt-2";
  priceElement.innerHTML = `<span class="price">${itemData.price}</span>`;
  friesItem.appendChild(priceElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "w-56 text-sm text-gray-500 mt-2 text-center";
  descriptionElement.textContent = itemData.description;
  friesItem.appendChild(descriptionElement);

  return friesItem;
}

// !Função para criar e preencher um item do menu de tacos
function createDrinkItem(itemData) {
  const drinkItem = document.createElement("div");
  drinkItem.className =
    "flex flex-col justify-center items-center rounded-xl shadow-xl bg-white hover:bg-gray-200 p-4 mb-4 font-montserrat cursor-pointer";

  const imageContainer = document.createElement("div");
  imageContainer.className = "relative";
  drinkItem.appendChild(imageContainer);

  const image = document.createElement("img");
  image.src = itemData.imageSrc;
  image.alt = "Taco";
  image.className = "w-56 h-44 rounded-xl";
  imageContainer.appendChild(image);

  // TODO Tags de indicação de característica
  // !Verificar se o item é promocional e adicionar o span correspondente
  if (itemData.isPromo) {
    const promoElement = addIndicatorSpan(
      "Promoção",
      "green-500",
      "fas fa-tags"
    );
    imageContainer.appendChild(promoElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isBestSeller) {
    const bestSellerElement = addIndicatorSpan(
      "Mais vendido",
      "red-500",
      "fas fa-star"
    );
    imageContainer.appendChild(bestSellerElement);
  }

  // !Verificar se o item é limitado e adicionar o span correspondente
  if (itemData.isLimited) {
    const limitedElement = addIndicatorSpan(
      "Limitado",
      "purple-700",
      "fas fa-certificate"
    );
    imageContainer.appendChild(limitedElement);
  }

  // !Verificar se o item é best seller e adicionar o span correspondente
  if (itemData.isSweet) {
    const sweetElement = addIndicatorSpan(
      "Doce",
      "pink-500",
      "fas fa-candy-cane"
    );
    imageContainer.appendChild(sweetElement);
  }

  const spaceElement = document.createElement("div");
  spaceElement.style.height = "16px";
  drinkItem.appendChild(spaceElement);

  const nameElement = document.createElement("h3");
  nameElement.className = "text-xl font-semibold";
  nameElement.textContent = itemData.name;
  drinkItem.appendChild(nameElement);

  const priceElement = document.createElement("p");
  priceElement.className = "text-gray-600 mt-2";
  priceElement.innerHTML = `<span class="price">${itemData.price}</span>`;
  drinkItem.appendChild(priceElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "w-56 text-sm text-gray-500 mt-2 text-center";
  descriptionElement.textContent = itemData.description;
  drinkItem.appendChild(descriptionElement);

  return drinkItem;
}

// !Função para adicionar os itens do menu ao container
function addMenuItemsToContainer(container, menuData, itemCreatorFunction) {
  menuData.forEach((item) => {
    const menuItem = itemCreatorFunction(item);
    container.appendChild(menuItem);
  });
}

// !Função para filtrar os itens do menu por tipo (burgers, pizzas, etc.)
function filterMenuItemsByType(menuData, itemType) {
  return menuData.filter((item) => item.type === itemType);
}

// !Chama a função para filtrar os itens de hambúrgueres e adicioná-los ao container do painel de hambúrgueres
const burgersData = filterMenuItemsByType(menuData, "burger");
const menuContainerBurgers = document.getElementById("menu-container-burgers");
addMenuItemsToContainer(menuContainerBurgers, burgersData, createMenuItem);

// !Chama a função para filtrar os itens de pizzas e adicioná-los ao container do painel de pizzas
const pizzasData = filterMenuItemsByType(menuData, "pizza");
const menuContainerPizzas = document.getElementById("menu-container-pizzas");
addMenuItemsToContainer(menuContainerPizzas, pizzasData, createPizzaItem);

// !Chama a função para filtrar os itens de hotdogs e adicioná-los ao container do painel de hotdogs
const hotDogData = filterMenuItemsByType(menuData, "hotdog");
const menuContainerHotDog = document.getElementById("menu-container-hotdog");
addMenuItemsToContainer(menuContainerHotDog, hotDogData, createHotDogItem);

// !Chama a função para filtrar os itens de tacos e adicioná-los ao container do painel de tacos
const tacoData = filterMenuItemsByType(menuData, "tacos");
const menuContainerTaco = document.getElementById("menu-container-tacos");
addMenuItemsToContainer(menuContainerTaco, tacoData, createTacoItem);

// !Chama a função para filtrar os itens de fries e adicioná-los ao container do painel de fries
const friesData = filterMenuItemsByType(menuData, "fries");
const menuContainerFries = document.getElementById("menu-container-fries");
addMenuItemsToContainer(menuContainerFries, friesData, createFriesItem);

// !Chama a função para filtrar os itens de drinks e adicioná-los ao container do painel de drinks
const drinkData = filterMenuItemsByType(menuData, "drink");
const menuContainerDrink = document.getElementById("menu-container-drink");
addMenuItemsToContainer(menuContainerDrink, drinkData, createDrinkItem);
