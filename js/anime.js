let animes = [
  {
    id: 1,
    img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/ebcd65fa9fb83580062e7052fa6ee5a5.jpe',
    title: 'Jujutsu Kaisen',
    type: 'Série',
    launch: '2019',
    temp: '2',
    description: 'JUJUTSU KAISEN é um mangá escrito e ilustrado por Gege Akutami, serializado na Weekly Shonen Jump. Uma adaptação para anime foi lançada logo depois, com animação pelo estúdio MAPPA. Atualmente, já possui algumas temporadas, com a 1ª temporada (24 episódios) sendo seguida pelo aclamado filme prequel JUJUTSU KAISEN 0 e, em seguida, a 2ª temporada sendo lançada em julho de 2023. A série está disponível em versão legendada e dublada. Acompanhe o jovem Yuji Itadori nesta história de ação sombria e sobrenatural, enquanto ele treina as perigosas artes dos Feiticeiros Jujutsu e explora o violento mundo das maldições! Yuji Itadori come um dedo amaldiçoado para salvar um colega de turma e agora Ryomen Sukuna, um terrível e poderoso feiticeiro conhecido como o Rei das Maldições, habita na alma de Itadori. As maldições são terrores sobrenaturais criados a partir das emoções humanas negativas. Esta energia amaldiçoada pode ser usada como fonte de energia, tanto pelos Feiticeiros Jujutsu como pelos espíritos amaldiçoados. Guiado pelos Feiticeiros Jujutsu, Yuji Itadori junta-se à Escola Jujutsu de Tóquio, uma organização que enfrenta as maldições. Sob a liderança do professor Satoru Gojo, Itadori faz amizade com Megumi Fushiguro e Nobara Kugisaki, ambos alunos do primeiro ano.',
  },

  {
    id: 2,
    img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/095217fdb4f228410df09b18f151be28.jpe',
    title: 'Spy X Family',
    temp: '2',
    type: 'Série',
    launch: '2022',
    description: 'Há décadas, as nações de Ostania e Westalis promovem uma guerra fria sem fim. Para investigar os movimentos do presidente de um importante partido político, Westalis mobiliza Twilight, seu melhor agente, a montar uma família falsa e se infiltrar nos eventos sociais promovidos pela escola do filho do político. Mas por um acaso do destino, Twilight acaba adotando Anya, uma jovem com poderes telepáticos, e se "casando" com Yor, uma assassina profissional! Sem saberem das identidades uns dos outros, este trio incomum vai embarcar em aventuras cheias de surpresas para garantir a paz mundial.',
  },

  {
    id: 3,
    img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/f446d7a2a155c6120742978fb528fb82.jpe',
    title: 'Frieren e a Jornada para o Além',
    type: 'Série',
    launch: '2019',
    temp: '1',
    description: 'Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária. 50 anos se passam quando Frieren finalmente volta para visitar Himmel e os outros. Embora ela não tenha envelhecido nada, seus amigos têm pouco tempo de vida restante. É então que Frieren testemunha a morte de Himmel, o que a leva a lamentar não ter passado mais tempo junto dele. Com esse arrependimento em seu coração, ela embarca em uma nova jornada com o objetivo de se conectar e conhecer melhor as pessoas. Ao longo dessa viagem, a elfa Frieren encontrará diversas pessoas e viverá incontáveis aventuras emocionantes!',
  },

  {
    id: 4,
    img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/9b22fdc9b3c0a5e0c6373adba8b7ac61.jpe',
    title: 'Demon Slayer',
    type: 'Série',
    launch: '2019',
    temp: '3',
    description: 'Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.',
  },

  {
    id: 5,
    img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/323c82257b2f6567fabbb7bd55bfa753.jpe',
    title: 'Attack on Titan',
    type: 'Série',
    launch: '2017',
    temp: '4',
    description: 'se torna aquilo que mais odeia. Com seus novos poderes, ele luta pela liberdade da humanidade, combatendo os monstros que ameaçam seu lar. Mesmo depois de derrotar a Titã Fêmea, Eren não consegue descansar - uma horda de Titãs se aproximam da Muralha Rose e a batalha em nome da humanidade continua!',
  },

  {
    id: 6,
    img: 'https://img1.ak.crunchyroll.com/i/spire4/697c8b5ff2f49a97348b5507c06e11831576116356_full.jpg',
    title: 'Death Note',
    type: 'Série',
    launch: '2009',
    temp: '1',
    description: 'Light Yagami é um estudante primoroso, com um currículo impecável, popular com as garotas, e entediado que só. Mas sua vida muda quando um Shinigami lhe oferece um caderno capaz de matar qualquer pessoa que ele quiser.',
  },

  {
    id: 7,
    img: 'https://img1.ak.crunchyroll.com/i/spire3/cbb55a6382682bf71e91f685c6473c5a1487736090_full.jpg',
    title: 'Hunter X Hunter',
    type: 'Série',
    launch: '2009',
    temp: '1',
    description: 'Monstros amedrontadores, criaturas exóticas, riquezas vastas, tesouros misteriosos, terras vis e terras inexploradas... Gon parte em uma aventura para se tornar um caçador profissional que arrisca a própria vida em busca do desconhecido. Pelo caminho, ele conhece outros participantes da Prova dos Caçadores: Kurapika, Leorio e Killua. Será Gon capaz de vencer os grandes desafios da Prova de Caçadores e se tornar o melhor do mundo? Esta jornada selvagem e épica está prestes a começar!!',
  },

  {
    id: 8,
    img: 'https://img1.ak.crunchyroll.com/i/spire4/1c1df98707aa0f22aa54342af725e48a1491245343_full.jpg',
    title: 'Naruto',
    type: 'Série',
    launch: '2002',
    temp: '1',
    description: 'Uzumaki Naruto quer ser o melhor ninja de todos. Ele está indo muito bem, mas com o perigo iminente imposto pela misteriosa Akatsuki, Naruto percebe que ele deve treinar mais que nunca e deixa sua Vila para um intenso treinamento que o pressiona contra seus limites.',
  },

  {
    id: 9,
    img: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1560x2340/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe',
    title: 'Chainsaw Man',
    type: 'Série',
    launch: '2023',
    temp: '1',
    description: 'Denji é um adolescente que mora com Pochita, o Demônio da Motosserra. Por conta das dívidas que herdou de seu pai, ele vive na miséria, exterminando outros demônios com Pochita para pagar as contas. Até que, um dia, Denji é traído e morre. Em seus últimos momentos de consciência, ele firma um contrato com Pochita e renasce como o Homem-Motosserra - um humano com coração de demônio.',
  },
]

export default animes;