---
title: 'Potência não é nada sem controle — Parte 2/3'
description: 'Quando escrever código vira commodity, o gargalo recua para a definição do problema. E aí ressurge um fantasma dos anos 90 — o sonho de gerar software a partir de um modelo — para nos perguntar se a especificação densa salva ou apenas automatiza o desastre mais cedo.'
pubDate: '2026-06-25'
---

Quem programava nos anos 90 provavelmente conheceu uma ferramenta chamada Rational Rose. A promessa era sedutora: você desenhava o sistema em UML — um "caixograma" de retângulos elegantes, ligados por setas cheias de intenção — e a ferramenta gerava o esqueleto do código a partir do modelo.

Para mim, o Rational Rose foi importante. Não apenas pela promessa de automação, mas porque ajudou a consolidar a mudança de paradigma do relacional para a orientação a objetos, além de tornar Design Patterns mais concretos e visíveis. Usei muito essas ferramentas, primeiro para aprender e depois para ensinar a próxima geração de programadores.

Na prática, alguém passava três semanas produzindo diagramas magníficos, imprimia tudo em folhas A3, colava uma folha na outra até formar um painel gigante e pendurava aquilo na parede da sala de reunião. Por alguns dias, era lindo. Depois, os diagramas começavam a morrer. O código seguia em frente. O modelo ficava para trás. Em poucos meses, ninguém mais ousava confiar naqueles desenhos. Tínhamos inventado uma documentação que envelhecia mais rápido do que era lida.

Os acadêmicos deram um nome bonito para essa doença: **o problema da divergência**. O modelo e a realidade se separam, e a distância entre eles só cresce.

Na geração seguinte de ferramentas CASE, surgiu o TogetherJ, prometendo o tal do *round-trip engineering*: se você mudasse o código, o diagrama se atualizava; se mudasse o diagrama, o código acompanhava. Era o paraíso dos diagramadores e dos vendedores de papel A4. A ideia era elegante. Andou um pouco mais, mas não resolveu e acabou extinto.

Trinta anos depois, o fantasma do Rational Rose voltou. Só que desta vez ele não usa UML. Usa linguagem natural. E o gerador de código não é mais um gerador determinístico de *boilerplate*. É uma Inteligência Artificial que promete ser capaz de engolir ambiguidade, preencher lacunas e adivinhar o que você quis dizer até quando você não sabe ao certo que quer.

O sonho que fracassou em 2000 ressuscitou com roupa nova algumas décadas depois. E a pergunta que ele traz é a mesma de antigamente: **a IA finalmente resolve o problema da divergência, ou apenas o erra dez vezes mais rápido?**

## O gargalo foi deslocado

Na Parte 1, falei que a IA não eliminou trabalho. Ela deslocou violentamente o gargalo. Goste você, ou não goste, escrever código deixou de ser o fator limitante. Codificar virou commodity. E quando uma etapa do processo acelera de forma tão brutal, a pressão não fica contida ali. Ela transborda para as duas extremidades: entrada e saída. Na entrada, a especificação. Na saída, a validação.

É uma questão quase física. Se você instala um motor absurdamente mais potente no meio, mas mantém a mesma entrada e a mesma saída de antes, você não ganha um carro mais rápido. Você ganha mais possibilidade de quebra ou de acidentes. A nova potência obriga uma reengenharia nas pontas. Não uma troca cosmética de ferramenta, mas uma mudança processual profunda. A **especificação** e a **validação** são paredes simétricas que já foram atingidas pela mesma onda de choque.

E aqui mora a crueldade matemática: se você produz software dez vezes mais rápido, um erro de definição também se propaga dez vezes mais rápido. A especificação, que sempre foi importante, virou o ponto onde o desastre nasce. É aqui que a especificação entra em uma contradição existencial: ela precisa existir, mas não pode pesar. Precisa guiar, mas não pode engessar. Você quer um mapa, mas não quer carregar nas costas um mapa do tamanho de um continente.

## As duas tribos

Diante dessa contradição, o desenvolvimento de software parece ter se dividido em duas tribos. Nada novo, programadores, como eu, adoram discutir por horas de maneira abstrata discordando veementemente uns dos outros.

De um lado está a tribo dos **spec-driven**: a turma das especificações completas, densas e rigorosas. É a linha de ferramentas como o Spec Kit do GitHub ou o Kiro da Amazon, e da ideia — defendida com fervor quase religioso em algumas palestras de 2025 — de que “a especificação é o novo código-fonte”. O raciocínio é sólido: se a IA gera o código, então o artefato valioso, durável e verificável deixa de ser o código em si e passa a ser a especificação. Escreva a spec perfeita e o código vira detalhe descartável.

Do outro lado tem a tribo dos **vibecoders**. O termo foi cunhado por Andrej Karpathy no começo de 2025, em uma definição honesta, carregada de vergonha alheia: *“entregue-se às vibrações, abrace os exponenciais e esqueça que o código sequer existe”*. Você conversa com a máquina, descreve o que sente que quer, aceita o que ela devolve e segue adiante. É programar na crista da onda: sem planta, sem *blueprint*, na pura intuição.

O pior é que, neste momento, não consigo dizer com honestidade qual delas está certa. Aceito até a hipótese, inclusive, que ambas estejam erradas. Para ter certeza, eu precisava esticar cada extremo até o limite e ver o que sobrava de pé.

## Os dois lados têm razão, é por isso que estão errados

O problema é que, neste momento, cada tribo está parcialmente certa. E essa é a forma mais perigosa de estar errado.

A especificação densa resolve problemas reais. Ela dá à IA contexto rico, registra intenção compartilhada entre humanos e máquina, e produz algo que pode ser validado. Mas cobra três preços altos:

O primeiro é o óbvio: **tempo**. Escrever uma especificação completa é lento — tão lento que você corre o risco de recriar, na entrada do processo, exatamente o gargalo que a IA acabou de demolir no meio. Parabéns: você automatizou a codificação para reintroduzir o trabalho manual um passo antes dela. O motor ficou dez vezes mais rápido, e você o acoplou a uma partida feita a manivela.

O segundo é mais grave: **inércia**. Uma especificação densa custa caro para ser produzida, e tudo que custa caro nós relutamos em jogar fora. O custo afundado vira aversão à mudança. Você se apega ao plano justamente no momento em que a velocidade da IA deveria estar permitindo pivotar sem dó. A spec densa, paradoxalmente, congela você num mundo em que todo o resto virou líquido, você construiu uma âncora e a chamou de leme.

O terceiro é o mais sorrateiro, e quem opera esses modelos de perto sente na pele: **a janela de contexto cobra a conta — e cobra em duas moedas.** A primeira é literal: cada linha de especificação que você empurra para dentro do prompt é token gasto, e token, em escala, é dinheiro de verdade saindo do bolso a cada execução. A segunda moeda é mais cruel, porque é paga em **qualidade**. Contexto inchado não deixa a IA mais inteligente — deixa mais perdida. Quanto mais prolixa a spec, mais a máquina precisa garimpar para achar o que importa, e mais ela se distrai com o que não importa: confunde o acessório com o essencial, perde o fio e **alucina** com a confiança ignorante de um júnior egocêntrico. Existe um ponto a partir do qual cada parágrafo extra de especificação não adiciona precisão; subtrai. Você pagou em tokens para comprar mais erro.

O vibecoding tem o "charme" oposto: inércia zero, exploração instantânea, descoberta barata. É maravilhoso para sair do nada e chegar a algo em minutos. Mas, sem intenção compartilhada, a IA deriva. Ela vai para onde a conversa empurra, não necessariamente para onde o problema exige. Validar fica difícil, mas vamos falar disso na Parte 3. Spikes que deveriam ser descartados acabam em produção. E o pivot, que parecia a grande vantagem, degenera em *thrashing*. É baratíssimo mudar de direção a cada cinco minutos, mas o problema é que você nunca sabe se está indo a algum lugar e arrisca nunca chegar em lugar algum. E novamente, como diz a Pirelli: Potencia não é nada sem controle.

## O que a gente já sabia nos anos 90

Aqui a história fica deliciosa, porque nada disso é realmente novo. O pêndulo já percorreu esse arco antes. Quem viveu os anos 90 reconhece a paisagem em todos os seus detalhes. E como diria a bruxa do Pica-Pau: "E lá vamos nós!"

A indústria de software começou com processos pesados: o famigerado Big Design Up Front, a planta completa antes da primeira linha de código, herança direta do modelo cascata. E havia uma razão quase psicológica por trás disso. Naquela época, desesperado para ser levado a sério como **engenharia**, o desenvolvimento de *soft*ware foi abraçar o *hard* da engenharia civil. Importou junto a sua maior limitação: você não desconstrói um prédio com um clique para reerguê-lo quinze metros à esquerda. Se o concreto é irreversível, planeje tudo antes de derramá-lo. A planta completa não era capricho estético; era a única defesa contra um material que não aceita mudanças. O software copiou a rigidez de um mundo onde cada erro se paga em demolição — esquecendo que o seu próprio material, o bit, podia ser desfeito e refeito de graça.

A ironia é que, trinta anos depois, o vento mudou de direção. Hoje é a engenharia *física* que bebe da fonte do software: a manufatura aditiva imprime turbinas customizadas a cada lançamento, protótipos nascem e morrem em horas, e o átomo enfim aprendeu a ser quase tão maleável quanto o bit. Passamos décadas invejando a solidez do concreto — e agora é o concreto que inveja a nossa liquidez. No caminho, porém, o software internalizou tão bem a rigidez emprestada que custa a se reconhecer como aquilo que sempre foi: o material de construção mais maleável já inventado.

Mas voltemos à paisagem dos anos 90. Depois do cascata vieram o RUP, o Rational Unified Process, fruto do trabalho dos Três Amigos — Booch, Jacobson e Rumbaugh —, e o modelo espiral de Barry Boehm. Eles tentavam algo mais sábio: um processo **iterativo e incremental**.

Em vez de especificar tudo de uma vez, o projeto era dividido em fases — concepção, elaboração, construção e transição — e o entendimento era refinado a cada volta. A elaboração existia justamente para descobrir a especificação antes de se comprometer com a construção. Era uma admissão madura: você não sabe tudo no dia zero. Mas exageramos e a documentação burocrática, inspirada na engenharia civil, tornou-se um vício que estavamos cegos para admitir. Exageramos na dose e a especificação deixou de ser uma ferramenta e se tornou um entrave, engessando projetos e transformando o desenvolvimento de software em algo realmente MUITO chato e ineficiente.

Em 2001, o Manifesto Ágil surgiu como uma reação furiosa ao excesso de documentação. “Software funcionando acima de documentação abrangente.” O pêndulo balançou para o outro lado: menos planta, mais entrega. Era o caso de dizer que "a melhor especificação é o próprio código" - o que é belissimo no sentido poetico, mas que só uma pequena parcela de times consegue colocar em prática. A minha experiência diz que esse número é menor do que 10%. A maioria adotou o "GoHorse" como metodologia oficial, :).

E agora? Agora a IA empurra o pêndulo novamente na direção da estrutura. Não porque o Ágil estivesse errado, mas por um motivo novo: a IA **consome contexto** como combustível. Ela funciona melhor quando recebe intenção explícita. É quase cômico, num sentido amargo, perceber que o setor mais futurista do planeta está redescobrindo, aos trancos, uma discussão que os senhores de cabelo branco já tinham travado vinte e cinco anos atrás.

## A falsa dicotomia

É exatamente aqui que os anos 90 nos entregam a chave: **vibecoding e especificação densa não são lados opostos de uma guerra. São fases diferentes do mesmo trabalho.** O vibe é a fase de elaboração, de exploração. É descartável por natureza. Sua função é descobrir a especificação. A spec densa é a fase de construção e escala. É durável. Sua função é permitir validação, coordenação e crescimento.

O erro das duas tribos é o mesmo: cada uma pega uma fase legítima e a transforma em religião para governar o ciclo inteiro. O vibecoder quer improvisar até a produção, enquanto o spec-driven quer planejar até a paralisia. Ambos confundem um momento do processo com o processo inteiro.

A IA só tornou esse erro mais fácil de cometer, porque comprimiu o loop a tal ponto que exploração e construção parecem acontecer no mesmo instante. Perdemos a capacidade de enxergar onde uma fase termina e a outra começa.

## Não é *quanta* spec. É *qual* spec.

Se vibe e densidade são fases, e não inimigos, então a pergunta “quanto devo especificar?” está mal formulada.

A pergunta certa é: **o que, exatamente, pertence à especificação?**

A resposta que fui construindo ao longo do último ano é desacoplar densidade de implementação. Existe o que é durável e existe o que é descartável. A tragédia das especificações densas tradicionais é misturar os dois no mesmo documento.

O que é **durável** — e portanto pertence à spec — são intenção, contratos, invariantes, restrições e o porquê.

O que é **descartável** — e portanto deve ficar de fora — são assinaturas de método, pixels da tela, estrutura de pastas e detalhes prematuros de implementação.

A especificação moderna não é a planta congelada da obra inteira. É a destilação daquilo que custa caro recuperar quando se perde. Densidade, em si, nunca foi o problema. Densidade **errada e congelada** é o problema.

Foi isso que matou o Rational Rose: não o excesso de modelo, mas o modelo congelado que ninguém conseguia manter vivo.

E aqui começou a acontecer algo curioso na prática. Do fim do ano passado para cá, o tamanho da especificação que eu *preciso* escrever ficou cada vez menor. As ferramentas ficaram mais inteligentes, passaram a cobrir lacunas sozinhas e, melhor ainda, **passaram a me perguntar sobre as coisas que eu tinha esquecido de especificar.**

A spec mínima, percebi, é o núcleo irredutível de intenção que a máquina ainda não consegue adivinhar. Esse núcleo encolhe à medida que a IA melhora. Mas, ao menos por enquanto, nunca chega a zero. Sempre sobra um resíduo de intenção que só você tem.

## Especificar é indispensável. Escrever a especificação à mão, não.

O general Eisenhower tem uma frase que virou clichê em sala de reunião, mas que aqui readquire um sentido cirúrgico: *“Plans are useless, but planning is indispensable.”* Os planos são inúteis, mas planejar é indispensável. Traduzindo para o nosso problema: o artefato especificação é descartável; o **ato de especificar** é inegociável.

O escritor argentino Jorge Luis Borges levou essa ideia ao extremo num conto de uma página só, *Do Rigor na Ciência*. Nele, os cartógrafos de um império, obcecados pela precisão, desenham um mapa em escala 1:1 — um mapa do tamanho exato do território, que coincide ponto a ponto com a realidade. Era o mapa perfeito. E era completamente inútil, porque um mapa que não simplifica não é um mapa. É peso morto. Nas gerações seguintes, conta Borges, o povo abandonou o mapa monstruoso às intempéries do deserto. A especificação densa e congelada é esse mapa de Borges: tão fiel ao território que perde a serventia de ser mapa.

Mas há um detalhe que a frase de Eisenhower esconde. O fato de o ato de especificar ser indispensável **não significa que um humano precise escrever a especificação à mão**. O inegociável é que a intenção exista, de forma explícita, em algum lugar. Quem digita o texto é uma questão em aberto.

A IA pode — e deve — complementar boa parte do serviço: rascunhar, elaborar, detectar lacunas e, sobretudo, **perguntar o que ficou de fora**. Especificar deixa de ser autoria solo e vira diálogo coautorado. O humano fornece o núcleo irredutível de intenção e julgamento. A máquina fornece completude, estrutura e perguntas. O papel do humano migra, sutilmente, de **autor** para **ratificador**.

E aqui o controle, que é o tema desta série inteira, não desaparece. Apenas muda de lugar. Porque preencher um gap errado é o problema da divergência ressuscitando: a IA alucinando a sua intenção com a confiança de sempre.

A salvaguarda é o ciclo: a IA rascunha, o humano ratifica o núcleo, e mecanismos determinísticos guardam o resto.

## Korque e a aposta da autonomia total

Até aqui tratei as tribos como abstrações. Mas eu as vivo encarnadas em duas pessoas: eu e meu amigo Rafael Costa, o Korque — um dos maiores defensores que conheço de uma codificação 100% autônoma e autor da ferramenta que vai dar nome ao resto deste texto: o dev-squad.

Há quase dois anos, o Korque sustenta uma aposta: será possível, com **um único prompt**, pesquisar, entender e gerar o resultado final completo.

Autonomia total.

Você descreve o problema uma vez, e a máquina cuida do resto: do entendimento à entrega.

Eu acho que isso eventualmente será possível. Honestamente, não sei quando será cem por cento verdade.

Essa diferença de fé entre nós dois não é briga. É a tensão entre as duas tribos vivida na pele.

O Korque é o polo da autonomia. A mim coube o polo do pragmatismo: engenheirar para a velocidade que a gente **tem**, não para a que a gente **deseja**.

Como eu disse na Parte 1, não se trata de ter uma coragem estúpida que ignora os riscos da IA. Desde o início, acreditei que o ponto viável morava em algum lugar entre os dois extremos. Mas, para aprender de verdade, era preciso viver cada extremo por dentro.

E foi exatamente o que fizemos.

Enquanto o Korque construía o dev-squad mirando a autonomia total, eu usava a ferramenta no dia a dia e ia tapando, na mão, os buracos que ela ainda não cobria. Escrevia especificações manualmente onde a máquina tropeçava.

Cada vez que eu descobria um jeito melhor de especificar para obter código melhor, passava a descoberta para o Rafa, que decidia se aquilo virava ou não um mecanismo dentro da ferramenta.

Os ADRs — Architecture Decision Records, hoje parte nativa do dev-squad — nasceram desse vai-e-vem.

Não é teoria de metodologia. É o ciclo iterativo-incremental do RUP rodando ao vivo, entre dois amigos e uma ferramenta.

Cada volta refinava o entendimento.

Cada erro virava uma regra durável.

## O dev-squad, ou a tese virada código

Eu prometi, no fim da Parte 1, falar de documentação viva e arquitetura orientada a contexto. O dev-squad é, hoje, a encarnação mais limpa que conheço dessa tese.

Sou suspeito para falar dele. Já contei que fui usuário-cobaia e que contrabandeei algumas ideias para dentro da ferramenta. Mas é justamente por tê-la usado no osso que sei o que ela faz.

O dev-squad roda um pipeline — scout, spec, decompose, execute, verify, commit — e a fase de spec não confia na boa vontade da IA. Ela aplica verificações determinísticas, de custo zero, **antes de uma linha de código ser escrita**.

Três delas merecem destaque porque são, literalmente, a tese deste artigo virada engenharia.

A primeira rejeita critérios de aceitação **vazios**. Um critério como “o sistema deve funcionar corretamente” é barrado na hora. Só passa se contiver referência concreta: um arquivo, um comando, um número, um identificador. É o princípio “densidade não é o problema; vacuidade é” transformado em portão automático.

A segunda — cujo nome, no código-fonte, é quase poético — caça a **divergência de alvo**. Ela detecta quando a execução termina “com sucesso” mirando no objeto errado. É o fantasma do Rational Rose perseguido deterministicamente, em vez de ignorado até virar dívida.

A terceira garante **fidelidade ao pedido**: todo artefato nomeado na solicitação original precisa sobreviver até a especificação final. A spec não pode, silenciosamente, encolher aquilo que você pediu. É a defesa contra a deriva.

E há o fechamento do laço: uma memória de projeto, comprometida no repositório, com aprendizados e ADRs, reinjetada nas fases iniciais de cada nova execução.

Isso é documentação viva de verdade. Não uma spec congelada para ser venerada na parede, mas uma spec que regenera. Um mecanismo que acumula aprendizado e reduz, execução após execução, a quantidade de intenção que precisa ser reexplicada.

O que o dev-squad faz, no fundo, é se recusar a escolher entre as duas tribos.

Ele dá ao vibe um portão.

Você descreve a tarefa em linguagem natural — o lado exploratório, intuitivo — e a máquina força substância, fidelidade e vigilância contra divergência. Depois aprende a cada volta.

O vibe entra na frente. A estrutura durável fica no portão.

É a aposta de autonomia do Rafael e o meu pragmatismo de especificação manual convergindo dentro da mesma ferramenta.

## O ponto de equilíbrio

No fim, talvez nós dois estivéssemos caminhando para o mesmo lugar por lados opostos.

O Rafael apostou no “um prompt”.

Eu apostei na especificação na mão.

Mas um prompt suficientemente bom **é** uma especificação. E uma máquina suficientemente inteligente encolhe a spec até esse prompt e coescreve o resto.

Esse ponto de equilíbrio não é “a spec desaparece”. É a spec virando um artefato colaborativo.

O humano recua até a intenção irredutível.

A máquina avança até cobrir tudo que é derivável.

O planejamento colapsa até sua essência — mas não some. E nunca houve uma regra dizendo que essa essência precisava ser digitada por mãos humanas.

A IA já nos entregou o motor. A Parte 1 mostrou que potência sem controle é apenas um jeito eficiente de chegar mais rápido ao desastre. Esta parte tentou mostrar onde fica o primeiro freio: na maneira como definimos o problema antes de a máquina sair correndo para resolvê-lo.

Mas definir bem o problema não vale absolutamente nada se você não consegue **provar** que a máquina o resolveu.

É aí que mora a outra parede: a da saída.

No dev-squad, o commit não é liberado pela opinião de um modelo dizendo que está tudo bem. É liberado por um código de saída, pelo resultado real dos testes.

Exit code, não opinião.

Na **Parte 3**, a última desta série, vou bater de frente com o problema mais difícil de todos: a validação.

Como se testa um sistema probabilístico, não determinístico, que pode responder diferente para a mesma entrada?

O que significa qualidade quando o software deixa de ser uma máquina previsível e passa a ser um agente cognitivo?

E por que QA está prestes a deixar de ser uma etapa do processo para virar infraestrutura contínua de controle?

Porque, no fim, especificar é indispensável.

Mas verificar é o que separa a engenharia da fé.

---

**Links para os curiosos:**

- [Rational Rose e o sonho do round-trip engineering (UML)](https://www.google.com/search?q=rational+rose+uml+round-trip+engineering+history)
- [Andrej Karpathy — a origem do termo "vibe coding" (2025)](https://x.com/karpathy/status/1886192184808149383)
- [GitHub Spec Kit — spec-driven development](https://github.com/github/spec-kit)
- [O Manifesto Ágil (2001)](https://agilemanifesto.org/)
- [Jorge Luis Borges — "Del rigor en la ciencia" (o mapa em escala 1:1)](https://www.google.com/search?q=borges+del+rigor+en+la+ciencia+mapa+imperio)
- [dev-squad — o plugin de Rafael citado no artigo](https://github.com/Korck-lab/dev_squad)
