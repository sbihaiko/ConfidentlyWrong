---
title: 'Potência não é nada sem controle — Parte 1/3'
description: 'A IA não eliminou trabalho — ela moveu o gargalo. E estamos todos correndo descalços em direção ao precipício, fascinados pela velocidade das próprias pernas.'
pubDate: '2026-05-13'
---

Se você sobreviveu aos anos 90 acreditando piamente que o Bug do Milênio seria o fim da civilização ocidental, e não apenas um bônus de Natal antecipado para consultores de COBOL, provavelmente se lembra de um comercial da Pirelli que beirava o absurdo: Carl Lewis corre descalço pelas ruas de Nova York em uma velocidade que faria o Usain Bolt parecer um caracol com crises de labirintite. Ele sobe a Estátua da Liberdade, atravessa a Brooklyn Bridge, desliza sobre as águas do Hudson e escala o Chrysler Building como se a gravidade fosse apenas uma sugestão mal-formulada. No topo, olha para a sola do próprio pé — e lá está: o sulco emborrachado de um pneu Pirelli gravado milimetricamente na pele. O slogan era um soco de sobriedade:

**"Potência não é nada sem controle."**

Três décadas depois, essa imagem continua me perseguindo. Mas agora o asfalto virou software, e o motor é Inteligência Artificial.

A grande mudança que a IA trouxe não foi apenas velocidade. Foi algo mais perigoso: ela deslocou violentamente os gargalos da engenharia de software. O problema não é mais escrever código. O problema agora é controlar a aceleração. E, francamente, estamos todos correndo descalços em direção ao precipício, fascinados pela velocidade das próprias pernas, enquanto ignoramos que a queda é livre, mas a aterrissagem continua sendo bem sólida.

Para explicar o caos produtivo que estamos vivendo, permitam-me uma breve digressão pela cidade em que nasci, em 1974: Curitiba, a antiga "Cidade Modelo" do Brasil.

Nos anos 70 e 80, Curitiba parecia um vislumbre do futuro em um país que ainda tentava entender como tapar buracos no asfalto. Sob a batuta de Jaime Lerner e do IPPUC, a cidade desenhou um modelo urbano extremamente racional: eixos estruturais, transporte integrado, estações-tubo e ônibus biarticulados que faziam urbanistas europeus chorarem de inveja. Era o triunfo do urbanismo orientado a fluxo. Você atravessava a cidade em minutos. A população da época girava em torno de 800 mil habitantes.

O problema de planejar o amanhã com perfeição é que o amanhã raramente respeita o plano. Curitiba se apaixonou tanto pelo próprio modelo que esqueceu de evoluir. O IPPUC, que um dia simbolizou inovação, tornou-se lentamente parte da burocracia que deveria combater. O sistema saturou. O ônibus biarticulado, antes símbolo de velocidade e eficiência, virou um enorme enlatado sobre rodas preso em um fluxo que já não comporta sua própria ambição.

E a resposta da gestão foi reveladora: em vez de reinventar o fluxo, decidiu-se punir a velocidade. Radares de 40 km/h espalharam-se pela cidade. Se a infraestrutura não suporta mais a demanda, reduz-se o movimento até que tudo pareça "seguro".

E aqui mora uma das grandes falácias da segurança moderna: a ideia de que menos velocidade sempre significa mais proteção. É um raciocínio sedutor, mas intelectualmente preguiçoso. Se levarmos essa lógica ao limite, chegamos à segurança absoluta: velocidade zero. Em um congestionamento completamente imóvel, o risco de acidentes é praticamente nulo. Zero colisões. Zero atropelamentos. Mas também zero movimento, zero progresso e zero relevância. Uma cidade que não se move, não é segura; ela está morta.

No desenvolvimento de software, muitas empresas estão repetindo exatamente esse erro. Se você quer "zero bugs de IA", existe uma solução simples e preguiçosa: não use IA. Você terá zero riscos e provavelmente zero futuro também.

Muitas organizações hoje possuem motores absurdamente potentes, mas continuam operando com processos desenhados para outra era. Seus fluxos estão saturados por burocracias legadas, aprovações infinitas e modelos de validação incapazes de acompanhar a nova velocidade. São empresas tentando controlar potência espalhando "pardais" organizacionais por toda parte.

Hoje moro em Florianópolis, e aqui a lição urbana é outra: controle não vem apenas da limitação da velocidade; ele também pode surgir da expansão da capacidade de fluxo.

O Aterro da Baía Norte, em Florianópolis, e o Aterro do Flamengo, no Rio de Janeiro — onde vivi parte da infância — são exemplos disso. Em ambos os casos, a engenharia decidiu expandir o território físico para permitir que o fluxo existisse. No Rio, Burle Marx e Affonso Reidy integraram vias expressas e parque urbano em uma obra-prima de infraestrutura. Em Florianópolis, o aterro e as SCs criaram espaço para conectar regiões inteiras da cidade. Claro, limites físicos continuam existindo. Florianópolis no verão triplica de população e entra em colapso parcial de escala. Nenhuma infraestrutura cresce infinitamente.

Mas existe uma diferença filosófica fundamental entre os dois modelos:

O "Modelo Curitiba" tenta controlar potência limitando-a.  
O "Modelo Aterro" tenta liberar a potência expandindo capacidade.

E é exatamente aqui que a IA entra. Hoje, usando IA para programar, produzo código algo entre 5 e 6 vezes mais rápido do que antes. Isso parece maravilhoso, até você perceber que a IA não eliminou trabalho; ela apenas moveu o gargalo para as extremidades do processo. O meio do caminho, o ato de codificar, deixou de ser o fator limitante. A codificação está rapidamente se tornando commodity. E, com isso, toda a pressão estrutural migra para dois lugares:

1. **A Especificação (O Início)**  
   Se você produz software 6x mais rápido, um erro de definição agora destrói seu projeto 6x mais rápido também. Parabéns: você acaba de automatizar o desastre com uma eficiência invejável.

2. **A Validação (O Fim)**  
   Aqui a matemática fica cruel. Se antes aceitávamos confortavelmente a proporção de 1 QA para cada 3 desenvolvedores, porque testar consumia perto de 1/3 do tempo de codificação, a IA implode essa conta. Quando o código passa a ser produzido 6x mais rápido, a matemática deixa de fechar: sem automação de validação na mesma escala, você rapidamente se aproxima de um cenário improvável: algo como 2 QA para cada 1 desenvolvedor, apenas para conter o fluxo que você mesmo criou.

E aqui está o ponto que muita gente ainda não percebeu: talvez estejamos interpretando os bugs da IA como "má qualidade de código", quando, na verdade, continuamos tentando validar sistemas exponenciais usando ferramentas e processos da era artesanal. Para piorar, estamos deixando de construir software puramente determinístico e passando a operar sistemas cognitivos, probabilísticos e não determinísticos o que torna o teste mais complexo. Nesses ambientes a mesma entrada pode produzir respostas diferentes dependendo do contexto, da memória e até da trajetória da conversa. Só isso já começa a tornar modelos tradicionais de validação, como testes de caixa preta, insuficientes. É como entrar em uma competição de tiro armado apenas com um estilingue.

Desde o início, engenharia sempre significou aprender a "domesticar" explosões. O motor a vapor era uma bomba-relógio. O motor a combustão é essencialmente a mesma coisa — apenas transformada em uma sequência contínua de pequenas explosões cuidadosamente controladas. A aviação, a eletricidade, a energia nuclear e a internet não nasceram da eliminação do risco, mas da nossa capacidade de criar mecanismos sofisticados o suficiente para liberar potência sem sermos destruídos por ela.

Só chegamos até aqui porque tivemos a coragem racional de construir freios, válvulas, redundâncias, protocolos e sistemas de observabilidade — em vez de simplesmente proibir velocidade, pressão ou energia. Não precisamos de uma coragem estúpida que ignora os riscos da IA. Precisamos parar de pensar apenas na produção de código como fim em si mesmo e voltar a enxergar software como engenharia de sistemas. O desafio agora não é mais empilhar funcionalidades, mas projetar fluxo, escala, observabilidade e mecanismos de controle capazes de sobreviver à velocidade que a IA tornou possível.

A IA já nos entregou o motor...  
A pergunta agora não é quem consegue acelerar...  
...mas sim quem consegue fazer curva.

Tem bastante coisa para pensar e assimilar. Mas, por hoje, encerro por aqui. Ainda pretendo voltar com mais dois artigos sobre este tema.

Na **Parte 2**, quero mergulhar no primeiro gargalo que a IA deslocou: a especificação. Porque, quando a codificação deixa de ser o fator limitante, definir corretamente o problema passa a ser mais importante do que escrever a solução. Vamos falar sobre engenharia assistida por IA, documentação viva, arquitetura orientada a contexto e o que acontece quando o ato de programar deixa de ser escasso.

Na **Parte 3**, entro no problema mais difícil de todos: validação. Sistemas probabilísticos, agentes não determinísticos, observabilidade comportamental e o momento em que QA deixa de ser uma etapa do processo para se tornar infraestrutura contínua de controle.

Porque potência sem controle continua sendo apenas uma forma muito eficiente de chegar mais rápido ao desastre.

---

**Links para os curiosos:**
- [Comercial original da Pirelli com Carl Lewis (1994)](https://www.youtube.com/watch?v=d0hElvVpWcU)
- [Curitiba — estação-tubo, ônibus biarticulados e vias estruturais](https://www.google.com/search?q=curitiba+%22esta%C3%A7%C3%A3o+tubo%22+%22onibus+biarticulados%22+%22mapa+vias+estruturais%22&tbm=isch)
- [Florianópolis — Beira-Mar Norte antes e depois do aterro](https://www.google.com/search?q=florian%C3%B3polis+beira+mar+aterro+hist%C3%B3rica&tbm=isch)
- [Parque do Flamengo — vista aérea, Burle Marx](https://www.google.com/search?q=parque+do+flamengo+burle+marx+a%C3%A9rea&tbm=isch)
