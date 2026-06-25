---
title: 'Potência não é nada sem controle — Parte 2/3'
description: 'Quando escrever código vira commodity, o gargalo recua para a definição do problema. E aí ressurge um fantasma dos anos 90 — o sonho de gerar software a partir de um modelo — para nos perguntar se a especificação densa salva ou apenas automatiza o desastre mais cedo.'
pubDate: '2026-06-25'
---

Quem programava nos anos 90 provavelmente conheceu uma ferramenta chamada Rational Rose. A promessa era hipnótica: você desenhava o sistema em diagramas UML, um "caixograma" cheio retângulos elegantes ligados por setas cheias de intenção, e a ferramenta gerava o esqueleto do código a partir do modelo. Para mim foi fundamental para consolidar am mudanca de paradigma de Relacional para Orientado a Objetos e tem um entendimento mais profundo de Design Patterns. Aproveitei muito dessas ferramentas primeiro para aprender e depois para ensinar a próxima geração de programadores. 

Na prática, o que acontecia era mais ou menos isto: alguém passava três semanas produzindo diagramas magníficos, imprimia tudo em papel A3, colava um papel no outro, fazendo um diagrama gigante, pendurava na parede da sala de reunião — e os diagramas começavam a morrer no exato instante em que a tinta secava. O código seguia em frente, o modelo ficava para trás, e em poucos meses ninguém mais ousava confiar naqueles desenhos. Tínhamos inventado a documentação que envelhecia mais rápido do que era lida. Os acadêmicos deram um nome bonito para essa doença: **o problema da divergência.** O modelo e a realidade se separam, e a distância entre eles só cresce. Na próxima geração de ferramentas case surgiu o TogetherJ, que prometia o tal do *round-trip engineering* — mudou o código, o diagrama se atualizava; mudou o diagrama, o código acompanhava. Era o paraíso dos diagramadores e dos vendenodres de papel A4.

Conto isso porque, trinta anos depois, o fantasma do Rational Rose voltou. Só que desta vez ele não usa UML, usa linguagem natural. E o gerador de código não é um gerador determinístico de boilerplate, mas uma Inteligência Artificial capaz de engolir ambiguidade, preencher lacunas e adivinhar o que você quis dizer. O sonho que fracassou em 1998 acabou de ressuscitar com roupa nova. E a pergunta que ele traz embaixo do braço é exatamente a mesma de antigamente, só que muito mais urgente: **a IA finalmente resolve o problema da divergência, ou apenas o repete dez vezes mais rápido?**

## O gargalo foi deslocado

Falei anteriormente que a IA não eliminou trabalho — ela deslocou violentamente o gargalo. Escrever código deixou de ser o fator limitante; codificar virou commodity. E quando o meio da linha produtiva acelera de forma brutal, acontece uma coisa que todo engenheiro mecânico conhece: a velocidade não fica contida no meio. Ela transborda e pressiona as duas pontas do processo.

É uma questão quase física. Se você instala um motor absurdamente mais potente no meio do processo, mas mantém a mesma entrada e a mesma saída de antes, você não ganha um carro mais rápido. Você ganha um acidente mais rápido. A aceleração no centro **obriga** uma reengenharia das duas extremidades — não uma troca de ferramenta, mas uma mudança processual brutal. No início, os requisitos. No fim, a qualidade.

Esta segunda parte do artigo trata da extremidade de entrada: a **especificação**. A terceira tratará da saída: a **validação**. São paredes simétricas, atingidas pela mesma onda de choque. E aqui mora a crueldade matemática: se você produz software dez vezes mais rápido, um erro de definição também se propaga dez vezes mais rápido. A especificação, que sempre foi importante, passou a ser o ponto onde o desastre nasce ou é evitado.

Só que existe uma armadilha. Porque a mesma IA que encareceu o erro de definição **barateou o pivot**. Refazer código a partir de uma especificação mudada virou quase gratuito. E é aqui que a especificação entra em uma contradição existencial: ela precisa existir, mas não pode pesar. Precisa guiar, mas não pode engessar. Você quer um mapa, mas não quer carregar nas costas um mapa do tamanho de um continente.

## As duas tribos

Hoje, diante dessa contradição, o mundo do desenvolvimento se dividiu em duas tribos.

De um lado, os **spec-driven**. A turma das especificações completas, densas, rigorosas. É a linha de ferramentas como o Spec Kit do GitHub ou o Kiro da Amazon, e da ideia — defendida com fervor quase religioso em palestras de 2025 — de que "a especificação é o novo código-fonte". O raciocínio é sólido: se a IA gera o código, então a coisa valiosa, o artefato durável, a fonte da verdade, passa a ser a especificação. Escreva a spec perfeita e o código se torna um detalhe descartável.

Do outro lado, os **vibecoders**. O termo foi cunhado pelo Andrej Karpathy no começo de 2025, e a definição dele é honesta ao ponto da temeridade: *"se entregue às vibrações, abrace os exponenciais e esqueça que o código sequer existe"*. Você conversa com a máquina, descreve o que sente que quer, aceita o que ela devolve, e segue adiante. É programar na crista da onda, sem planta, sem blueprint, na pura intuição.

Eu poderia descrever essas duas tribos de forma abstrata. Mas, neste momento, não consigo dizer com honestidade qual das duas é a abordagem correta — e desconfio que talvez ambas estejam erradas. A única forma de descobrir era esticar cada extremo até o limite e ver o que sobrava de pé.

## Os dois lados têm razão, e é por isso que estão errados

O problema é que cada tribo está parcialmente certa, o que é a forma mais perigosa de estar errado.

A especificação densa tem prós óbvios: ela dá à IA um contexto rico, cria intenção compartilhada entre humanos e máquina, e produz algo que se pode validar. Mas tem dois contras que ninguém gosta de admitir. O primeiro é que escrever uma spec completa é lento — tão lento que você acaba recriando, na entrada, o mesmo gargalo que a IA tinha acabado de eliminar no meio. Parabéns: você automatizou a codificação para depois reintroduzir o trabalho manual um passo antes. O segundo, mais grave, é a **inércia**. Uma especificação densa custa caro para ser produzida, e tudo que custa caro nós relutamos em jogar fora. O custo afundado vira aversão à mudança. Você se apega ao plano justamente quando a velocidade da IA deveria estar permitindo que você pivotasse sem dó. A spec densa, paradoxalmente, congela você num mundo onde tudo o mais virou líquido.

O vibecoding tem o charme oposto: inércia zero, exploração instantânea, descoberta barata. É maravilhoso para sair do nada e chegar a algo em minutos. Mas sem intenção compartilhada, a IA deriva. Ela vai para onde a conversa a empurra, não para onde o problema exige. Validar fica impossível — e isso é assunto da Parte 3. Spikes que deveriam ser jogados fora acabam em produção. E o pior: o pivot, que parecia a grande vantagem, degenera em *thrashing*. É baratíssimo mudar de direção a cada cinco minutos, mas você nunca sabe se está indo a algum lugar. Movimento sem trajetória não é agilidade; é só vibração sem destino.

## O que a gente já sabia nos anos 90

Aqui é onde fica delicioso, porque nada disso é novo. O pêndulo já percorreu esse exato arco antes, e quem viveu os anos 90 reconhece a paisagem.

A indústria começou com o processo pesado — o famigerado Big Design Up Front, a planta completa antes da primeira linha de código, herança do modelo cascata. Então veio o RUP, o Rational Unified Process, fruto do trabalho dos Três Amigos (Booch, Jacobson e Rumbaugh), e o modelo espiral de Barry Boehm, que tentavam algo mais sábio: **iterativo e incremental.** Em vez de especificar tudo de uma vez, você dividia o projeto em fases — concepção, elaboração, construção, transição — e refinava o entendimento a cada volta. A elaboração existia justamente para *descobrir* a especificação antes de se comprometer com a construção. Era a admissão madura de que você não sabe tudo no dia zero.

Depois, em 2001, veio o Manifesto Ágil como uma reação furiosa ao excesso de documentação. "Software funcionando acima de documentação abrangente." O pêndulo balançou para o outro lado: menos planta, mais entrega.

E agora? Agora a IA está empurrando o pêndulo de volta na direção da estrutura. Não porque o ágil estivesse errado, mas por um motivo novo: a IA **consome contexto** como combustível. Ela funciona melhor quando você lhe dá intenção explícita. E é cômico, num sentido amargo, perceber que o setor mais futurista do planeta está redescobrindo, aos trancos, uma discussão que os senhores de cabelo branco já tinham travado vinte e cinco anos atrás.

## A falsa dicotomia

E é exatamente aqui que os anos 90 nos entregam a chave. **Vibecoding e especificação densa não são lados opostos de uma guerra. São fases diferentes do mesmo trabalho.**

O vibe é a fase de elaboração, de exploração — descartável por natureza, e cuja função é justamente *descobrir* a especificação. A spec densa é a fase de construção e de escala — durável, e cuja função é permitir validação e crescimento. O erro que as duas tribos cometem é o mesmo: cada uma pega uma fase legítima e a transforma numa religião que deve governar o ciclo inteiro. O vibecoder quer improvisar até a produção; o spec-driven quer planejar até a paralisia. Ambos confundiram um momento do processo com o processo inteiro.

A IA só tornou esse erro mais fácil de cometer, porque ela comprimiu o loop a tal ponto — exploração e construção acontecem quase no mesmo segundo — que a gente perdeu a capacidade de enxergar onde uma fase termina e a outra começa.

## Não é *quanta* spec. É *qual* spec.

Se vibe e densidade são fases e não inimigos, então a pergunta "quanto devo especificar?" está mal formulada. A pergunta certa é: **o que, exatamente, pertence à especificação?**

A resposta que fui construindo ao longo desse ano é desacoplar densidade de implementação. Existe o que é durável e existe o que é descartável, e a tragédia das especificações densas tradicionais é que elas misturam os dois no mesmo documento.

O que é **durável** — e portanto pertence à spec — é a intenção, os contratos, os invariantes, as restrições, o porquê. O que é **descartável** — e portanto deve ficar de fora — são as assinaturas de método, os pixels da tela, a estrutura de pastas, o como. A especificação moderna não é a planta congelada da obra inteira; é a destilação daquilo que custa caro recuperar quando se perde. Densidade, em si, nunca foi o problema. Densidade **errada e congelada** é o problema. Foi exatamente isso que matou o Rational Rose: não o excesso de modelo, mas o modelo congelado que ninguém conseguia manter vivo.

E aqui começou a acontecer algo curioso na prática. Do fim do ano passado para cá, o tamanho da especificação que eu *preciso* escrever ficou cada vez menor. As ferramentas ficaram mais inteligentes, passaram a cobrir os gaps sozinhas e, melhor de tudo, **passaram a me perguntar sobre as coisas que eu tinha esquecido de especificar.** A spec mínima, percebi, é o núcleo irredutível de intenção que a máquina ainda não consegue adivinhar. Esse núcleo encolhe à medida que a IA melhora — mas, ao menos por enquanto, nunca chega a zero. Sempre sobra um resíduo de intenção que só você tem.

## Especificar é indispensável. Escrever a especificação à mão, não.

O general Eisenhower tem uma frase que virou clichê em sala de reunião, mas que aqui readquire um sentido cirúrgico: *"Plans are useless, but planning is indispensable."* Os planos são inúteis, mas planejar é indispensável. Traduzindo para o nosso problema: o artefato especificação é descartável; o **ato de especificar** é inegociável.

Borges escreveu sobre um império cujos cartógrafos, obcecados pela precisão, desenharam um mapa em escala 1:1 — um mapa do tamanho exato do território, que coincidia ponto a ponto com a realidade. Era o mapa perfeito. E era completamente inútil, porque um mapa que não simplifica não é um mapa, é um peso morto. A especificação densa e congelada é o mapa de Borges: tão fiel ao território que perde toda a serventia de ser um mapa.

Mas tem um detalhe que a frase do Eisenhower esconde, e que vale o questionamento. Que o ato de especificar seja indispensável **não significa que um humano precise escrevê-lo à mão.** O inegociável é que a intenção exista, explícita, em algum lugar. Quem digita o texto é uma questão completamente em aberto. A IA pode — e deve — complementar boa parte do serviço: rascunhar, elaborar, detectar lacunas e, sobretudo, **perguntar o que ficou de fora.** Especificar deixa de ser autoria solo e vira diálogo co-autorado. O humano fornece o núcleo irredutível de intenção e o julgamento; a máquina fornece a completude e as perguntas. O papel do humano migra, sutilmente, de **autor** para **ratificador**.

E aqui o controle, que é o tema desta série inteira, não desaparece — apenas muda de lugar. Porque preencher um gap errado é o problema da divergência ressuscitando: a IA alucinando a sua intenção, com a confiança de sempre. A salvaguarda é o ciclo: a IA rascunha, o humano ratifica o núcleo, e mecanismos determinísticos guardam o resto.

## Korque, e a aposta da autonomia total

Até aqui tratei as tribos como abstrações. Mas eu as vivo encarnadas em duas pessoas — eu e meu amigo Rafael Costa, o Korque, um dos maiores defensores que conheço de uma codificação 100% autônoma e autor da ferramenta que vai dar nome ao resto deste texto: o dev-squad.

Há quase dois anos o Korque sustenta uma aposta: a de que vai ser possível, com **um único prompt**, pesquisar e gerar o resultado final completo. Autonomia total. Você descreve o problema uma vez, e a máquina cuida do resto, do entendimento à entrega. Eu acho que isso eventualmente será possível mas, honestamente, não sei quando será cem por cento verdade. Essa diferença de fé entre nós dois não é briga; é exatamente a tensão entre as duas tribos, vivida na pele. O Korque é o polo da autonomia. Restou a mim o polo oposto, o do pragmatismo — o de quem prefere engenheirar para a velocidade que a gente **tem**, e não para a que a gente **deseja**. Como eu disse na Parte 1: não se trata de ter uma coragem estúpida que ignora os riscos da IA. Desde o início acreditei que o ponto viável morava em algum lugar no meio dos dois extremos; mas, para aprender de verdade, era preciso viver cada extremo por dentro.

E foi exatamente o que fizemos. Enquanto o Korque construía o dev-squad mirando a autonomia total, eu usava a ferramenta no dia a dia e ia tapando, na mão, os buracos que ela ainda não cobria — escrevendo a especificação manualmente onde a máquina tropeçava. Cada vez que eu descobria um jeito melhor de especificar para obter um código melhor, passava a descoberta para o Rafa, que decidia se aquilo virava ou não um mecanismo dentro da ferramenta. Os ADRs — os Architecture Decision Records, hoje parte nativa do dev-squad — nasceram exatamente desse vai-e-vem. Não é teoria de metodologia: é o ciclo iterativo-incremental do RUP rodando, ao vivo, entre dois amigos e uma ferramenta. Cada volta refinava o entendimento; cada erro virava uma regra durável.

## O dev-squad, ou a tese virada código

Eu prometi, lá no fim da Parte 1, falar de documentação viva e arquitetura orientada a contexto. Acontece que o dev-squad é, hoje, a encarnação mais limpa que conheço dessa tese. Sou suspeito para falar dele — já contei que fui usuário-cobaia e que contrabandeei algumas ideias para dentro da ferramenta. Mas é justamente por tê-la usado no osso que sei o que ela faz.

O dev-squad roda um pipeline — scout, spec, decompose, execute, verify, commit — e a fase de spec dele não confia na boa vontade da IA. Ela aplica verificações determinísticas, de custo zero, **antes de uma linha de código ser escrita.** Três delas merecem destaque porque são, literalmente, a tese deste artigo virada engenharia:

A primeira rejeita critérios de aceitação **vazios.** Um critério do tipo "o sistema deve funcionar corretamente" é barrado na hora; só passa se contiver referência concreta — um arquivo, um comando, um número, um identificador. É o "densidade não é o problema, vacuidade é" transformado em portão automático.

A segunda — e o nome do componente, no código-fonte, é quase poético — caça a **divergência de alvo.** Ela detecta quando a execução termina "com sucesso" mirando no objeto errado. É o fantasma do Rational Rose perseguido deterministicamente, em vez de ignorado até virar dívida.

A terceira garante a **fidelidade ao pedido:** todo artefato que você nomeou na solicitação original tem que sobreviver até a especificação final. A spec não pode, silenciosamente, encolher aquilo que você pediu. É a defesa contra a deriva.

E há o fechamento do laço: uma memória de projeto que vive comprometida no repositório — aprendizados e os tais ADRs — e que é reinjetada nas fases iniciais de cada nova execução. É a documentação viva de verdade: uma spec que regenera em vez de congelar. É exatamente o mecanismo por trás daquilo que eu sentia na pele — a especificação necessária encolhendo, mês após mês, porque a ferramenta acumulava o que tinha aprendido.

O que o dev-squad faz, no fundo, é se recusar a escolher entre as duas tribos. Ele dá ao vibe um portão. Você descreve a tarefa em linguagem natural — o lado exploratório, intuitivo — e a máquina força a substância, a fidelidade e a vigilância contra a divergência, e ainda aprende a cada volta. O vibe entra na frente; a estrutura durável fica no portão. É a aposta de autonomia do Rafael e o meu pragmatismo de spec manual, convergindo dentro de uma mesma ferramenta.

E é essa a imagem com que eu fecho. O Rafael apostou no "um prompt"; eu apostei na especificação na mão. Mas um prompt suficientemente bom **é** uma especificação — e uma máquina suficientemente inteligente encolhe a spec até esse prompt e co-escreve o resto. Estávamos, o tempo todo, caminhando para o mesmo ponto de equilíbrio, só que por lados opostos. Esse ponto não é "a spec desaparece". É a spec virando um artefato colaborativo: o humano recuando até a intenção irredutível, a máquina avançando até cobrir tudo que é derivável. O planejamento colapsa até a sua essência — mas não some, e nunca houve regra de que essa essência precisasse ser digitada por mãos humanas.

A IA já nos entregou o motor. A Parte 1 mostrou que potência sem controle é só um jeito eficiente de chegar mais rápido ao desastre. Esta parte tentou mostrar onde fica o primeiro freio: na maneira como definimos o problema, antes de a máquina sair correndo para resolvê-lo.

Mas definir bem o problema não vale absolutamente nada se você não consegue **provar** que a máquina o resolveu. E é precisamente aí que mora a outra parede — a da saída. No dev-squad, o commit não é liberado pela opinião de um modelo dizendo que está tudo bem; é liberado por um código de saída, pelo resultado real dos testes. Exit code, não opinião.

Na **Parte 3**, a última desta série, vou bater de frente com o problema mais difícil de todos: a validação. Como se testa um sistema probabilístico, não determinístico, que pode responder diferente para a mesma entrada? O que significa qualidade quando o software deixa de ser uma máquina previsível e passa a ser um agente cognitivo? E por que QA está prestes a deixar de ser uma etapa do processo para virar infraestrutura contínua de controle.

Porque, no fim, especificar é indispensável — mas verificar é o que separa a engenharia da fé.

---

**Links para os curiosos:**
- [Rational Rose e o sonho do round-trip engineering (UML)](https://www.google.com/search?q=rational+rose+uml+round-trip+engineering+history)
- [Andrej Karpathy — a origem do termo "vibe coding" (2025)](https://x.com/karpathy/status/1886192184808149383)
- [GitHub Spec Kit — spec-driven development](https://github.com/github/spec-kit)
- [O Manifesto Ágil (2001)](https://agilemanifesto.org/)
- [Jorge Luis Borges — "Del rigor en la ciencia" (o mapa em escala 1:1)](https://www.google.com/search?q=borges+del+rigor+en+la+ciencia+mapa+imperio)
- [dev-squad — o plugin de Rafael citado no artigo](https://github.com/Korck-lab/dev_squad)
