# Técnicas de Amostragem: Como Criar Amostras Representativas

## O desafio de ouvir todos

A startup de meditação quer saber como está a satisfação dos usuários em diferentes regiões do país. Como a base de usuários já ultrapassa **300 mil pessoas**, é inviável entrevistar cada um.

A solução? Criar **uma amostra representativa** — um grupo reduzido, mas cuidadosamente selecionado, que reflita bem a diversidade da base total.

Mas surge a dúvida: **como escolher essa amostra?**

Não basta “pegar qualquer 500 usuários”. A **forma como a amostra é criada pode distorcer ou fortalecer os resultados.** E aí entram as **técnicas de amostragem**.

---

## Por que a técnica de amostragem importa?

Imagine entrevistar apenas os primeiros usuários que responderem ao e-mail — e descobrir que 90% são do Sudeste e têm menos de 30 anos. **Essa amostra é enviesada.**

Para que a análise seja válida, a amostra precisa ser:

- Representativa da população;
- Selecionada de forma clara e justificável;
- Adequada ao tipo de variável e objetivo do estudo.

!!! info "Definição"
    **Amostragem** é o processo de seleção de um subconjunto da população para análise.  
    As principais técnicas **probabilísticas** (com sorteio ou regras definidas) são:
    
    - **Amostragem Aleatória Simples**
    - **Amostragem Estratificada**
    - **Amostragem por Conglomerado**
    - **Amostragem Sistemática**

E existe ainda uma técnica **não probabilística** muito comum — mas arriscada: a **amostragem por conveniência**.

---

## 1. Amostragem Aleatória Simples (AAS)

Cada elemento da população tem **exatamente a mesma chance** de ser selecionado. Pode ser feita por sorteio ou software.

!!! example "Exemplo"
    Selecionar aleatoriamente 1.000 usuários da base completa do app, sem considerar região, idade ou plano.

!!! tip "Dica"
    Ideal quando a população é **homogênea** ou não há interesse em subgrupos.

!!! danger "Atenção"
    Em populações muito diversas, a AAS pode gerar **sub-representação de grupos importantes** (ex: regiões, faixas etárias).

---

## 2. Amostragem Estratificada

A população é dividida em **estratos** (grupos homogêneos internamente, como por região, idade ou plano). Em seguida, realiza-se um sorteio **dentro de cada estrato**.

!!! example "Exemplo"
    Dividir os usuários por região do país (N, NE, CO, SE, S) e sortear proporcionalmente dentro de cada grupo.

!!! info "Definição"
    Os **estratos** são conhecidos e relevantes para a variável de interesse. A amostragem pode ser:

    - **Proporcional:** sorteia na mesma proporção de cada estrato na população.
    - **Equilibrada:** sorteia o mesmo número em cada estrato (mesmo que um estrato seja menor).

!!! tip "Dica"
    Excelente quando se quer garantir a **representatividade de subgrupos** importantes.

---

## 3. Amostragem por Conglomerado

Divide-se a população em **grupos naturais** (conglomerados), sorteia-se alguns desses grupos e **entrevista-se todos os elementos dentro deles** ou uma amostra interna.

!!! example "Exemplo"
    Sortear 10 cidades aleatórias e entrevistar todos os usuários do app que moram nessas cidades.

!!! warning "Atenção"
    É eficiente **logisticamente**, mas pode gerar **maior erro amostral** se os conglomerados forem internamente homogêneos demais ou muito diferentes entre si.

---

## 4. Amostragem Sistemática

Organiza-se a população em uma lista e escolhe-se **um ponto de partida aleatório**. Depois, seleciona-se elementos a cada _k_ posições (intervalo fixo).

!!! example "Exemplo"
    Ordenar os usuários por ID e escolher um a cada 300 usuários, iniciando no número 127.

!!! tip "Dica"
    Funciona bem quando **não há padrão oculto** na ordenação (ex: se IDs forem relacionados ao tempo de cadastro, cuidado!).

---

## 5. Amostragem por Conveniência

Seleciona-se quem está mais fácil de acessar: usuários ativos, que respondem rápido, que estão disponíveis.

!!! example "Exemplo"
    Enviar o questionário apenas para os 300 primeiros usuários que clicarem no push de notificação da pesquisa.

!!! danger "Perigo"
    **Essa amostragem é rápida, barata — e perigosa.**  
    Os resultados **não são generalizáveis**, pois a amostra tende a refletir apenas um perfil específico (os mais engajados, por exemplo).

!!! warning "Atenção"
    A amostragem por conveniência **não é probabilística**. Ela só deve ser usada quando **não houver outra opção** e os resultados forem interpretados com **extrema cautela**.

---

## Comparativo entre as técnicas

| Técnica                      | Quando usar                                                    | Pontos fortes                            | Riscos/limitações                             |
|-----------------------------|----------------------------------------------------------------|------------------------------------------|------------------------------------------------|
| Aleatória Simples           | População homogênea ou sem subgrupos relevantes                | Simples, justa                           | Pode deixar grupos importantes de fora        |
| Estratificada               | Subgrupos relevantes conhecidos (ex: região, idade, plano)     | Representa bem os grupos                 | Requer conhecimento prévio da estrutura       |
| Por Conglomerado            | Logística difícil, população geograficamente distribuída       | Econômica e prática                      | Pode ter maior erro amostral                  |
| Sistemática                 | Lista organizada sem padrão oculto                             | Fácil de executar, rápida                | Pode gerar viés se houver padrão na ordenação |
| Por Conveniência            | Quando não há acesso à população total                         | Rápida e barata                          | Alto risco de viés; resultados não confiáveis |

---

## O que aprendemos?

- A **qualidade da amostra define a validade da análise.**
- Técnicas probabilísticas (AAS, estratificada, conglomerado, sistemática) têm regras claras de sorteio e controle de viés.
- A **amostragem por conveniência é comum**, mas oferece riscos altos e **não deve ser confundida com amostragem científica.**
- Escolher a técnica certa depende dos objetivos, dos dados disponíveis e da estrutura da população.

---

## Para explorar mais

- 📺 **Vídeo:** [Tipos de Amostragem – Canal Me Salva!](https://www.youtube.com/watch?v=O95hsz1W5x8)
- 📄 **Artigo:** [Técnicas de Amostragem – Blog do IBGE Explica](https://educa.ibge.gov.br/jovens/conheca-o-brasil/populacao/20545-amostragem.html)
- 📖 **Post:** [Como escolher a técnica de amostragem ideal – Blog StatQuest Brasil](https://statquestbrasil.com/amostragem/)

Esses materiais complementam a teoria com exemplos práticos e visuais — essenciais para quem quer aplicar amostragem com responsabilidade.