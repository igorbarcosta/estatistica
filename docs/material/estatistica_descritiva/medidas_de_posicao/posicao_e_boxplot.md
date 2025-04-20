# Posição e Boxplot

!!! success "Onde estamos"

    Você aprendeu que pensar em **posição** — por meio de **quartis, percentis e medidas relativas** — é fundamental para entender *onde um valor está dentro de um conjunto de dados*. Também viu que o **boxplot** é uma ferramenta visual poderosa para **resumir e comparar distribuições**.

    Agora é hora de **conectar esses dois mundos**: entender como o boxplot **traduz as medidas de posição em imagem** e como ele pode ser interpretado como **um mapa visual dos percentis**.

---

## O dilema: temos muitos dados, mas onde cada valor está?

Imagine que você está avaliando os tempos de resposta de requisições em dois servidores diferentes. Os dados foram coletados em milhares de chamadas.

Você não tem tempo de olhar cada valor individual. Mas quer saber:

- Qual servidor tem respostas mais rápidas **de forma consistente**?  
- Qual deles tem **maior variação entre os usuários**?  
- Em qual servidor **os 25% mais lentos** ultrapassam o tempo aceitável?

Você não precisa de mais tabelas. Você precisa de um **boxplot**.

---

## O boxplot como retrato dos quartis

!!! info "Relembrando"
    O boxplot (ou diagrama de caixa) é um gráfico baseado em **cinco medidas de posição**:

    - **Mínimo (sem outliers)**
    - **Q1 (25%)**
    - **Q2 (50%) → a mediana**
    - **Q3 (75%)**
    - **Máximo (sem outliers)**

Esses pontos criam uma **estrutura visual**:

- Uma **caixa** do Q1 ao Q3 → representa os **50% centrais** dos dados  
- Uma **linha no interior da caixa** → marca a **mediana (Q2)**  
- Dois **"bigodes"** saem da caixa → até o menor e maior valor **dentro do intervalo considerado aceitável**  
- **Pontos fora dos bigodes** → são **outliers**, valores distantes da maioria

---

## Cada parte do boxplot conta uma história de posição

- **A posição da mediana** na caixa indica **simetria ou assimetria**  
    - No centro: dados simétricos  
    - Próxima de um dos lados: distribuição enviesada  
- **A largura da caixa (Q1 a Q3)** mostra a **dispersão dos dados intermediários**  
- **O comprimento dos bigodes** mostra como os dados se distribuem fora do miolo central  
- **Outliers visíveis** indicam a **presença de valores extremos**, que afetam a variação mas não os quartis

!!! tip "Dica"
    O boxplot não mostra **a média**, nem **a forma exata da curva de distribuição**.  
    Mas ele **destaca a posição relativa de diferentes faixas dos dados** e permite **comparações visuais muito rápidas entre grupos.**

---

## Conectando com percentis

Embora o boxplot seja baseado em quartis (Q1 = P25, Q2 = P50, Q3 = P75), ele nos ajuda a inferir **outros percentis também**, de maneira aproximada:

- A **metade inferior da caixa** (entre Q1 e Q2) mostra onde estão os **percentis de 25 a 50**  
- A **metade superior da caixa** (entre Q2 e Q3) mostra os **percentis de 50 a 75**  
- Os **bigodes** nos ajudam a imaginar os extremos — como os **percentis abaixo de 10% ou acima de 90%**

!!! question "Reflexão: O que significa estar ‘fora da caixa’ em um boxplot?"
    Em termos de posição, significa que o valor está **fora do intervalo interquartil (entre P25 e P75)**, ou seja, **acima dos 75% ou abaixo dos 25%** da distribuição.  
    Se for ainda mais extremo (fora do alcance dos bigodes), é considerado **outlier** — um valor que ocupa uma **posição incomum** no conjunto de dados.

---

## Um exemplo: boxplot de notas em três turmas

Suponha que você tenha três turmas com notas de 0 a 10 e visualize os boxplots:

- **Turma A**: caixa larga, poucos outliers → notas bem distribuídas  
- **Turma B**: mediana próxima de Q3 → maioria tirou notas baixas  
- **Turma C**: mediana alta, caixa estreita → turma homogênea e com bom desempenho

Em segundos, você entende **a posição relativa de cada grupo**, algo que exigiria longas tabelas ou dezenas de médias.

---

## Fechando: o boxplot como um mapa da posição

> O boxplot é uma **tradução visual da lógica dos quartis e percentis**.  
> Ele revela **quem está no meio, quem está abaixo ou acima da maioria, e quem está completamente fora do padrão.**

É o gráfico da **posição distribuída** — ideal para **comparar, resumir e interpretar dados em profundidade, com clareza e rapidez.**  
Quando você entende quartis, começa a ver o boxplot com outros olhos — como um mapa que mostra **onde cada dado se posiciona dentro do conjunto.**