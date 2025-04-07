# Níveis de Mensuração: Como Ler o Mundo com Precisão Estatística

## Um erro que distorce toda a análise

Em uma das reuniões da startup de meditação, a equipe está entusiasmada com um novo questionário que será enviado aos usuários. A ideia é simples: avaliar o humor antes e depois de cada sessão de meditação, usando uma escala de 1 a 5, onde:

- 1 = Muito triste  
- 2 = Triste  
- 3 = Neutro  
- 4 = Feliz  
- 5 = Muito feliz

No relatório preliminar, um analista calcula a média dessas respostas e diz:  
*“O humor médio dos usuários após a sessão foi 3,8. Isso mostra que, em média, eles estão entre ‘neutros’ e ‘felizes’.”*

Mas... **isso faz sentido?** É realmente válido **calcular média de dados que representam apenas uma ordem, sem intervalos definidos?**

A resposta depende de **como classificamos os dados**, e é aqui que entram os **níveis de mensuração** — um dos conceitos mais **subestimados, porém cruciais** da Estatística.

---

## Por que os níveis de mensuração são essenciais?

Cada variável carrega uma estrutura interna diferente. Alguns dados são **apenas categorias**, outros são **números com zero absoluto**, e outros ainda são **escalas com distâncias iguais entre valores**.

Saber o **nível de mensuração** de um dado é o que nos permite decidir **quais análises são válidas e quais são enganosas.**

!!! info "Definição"
    Os **níveis de mensuração** classificam os dados segundo o tipo de informação que carregam e as operações matemáticas que fazem sentido com eles. Os principais são:
    
    - **Nominal**
    - **Ordinal**
    - **Intervalar**
    - **Razão**

Vamos conhecê-los em ordem crescente de complexidade e poder analítico.

---

## Os 4 níveis

| Nível de Mensuração | O que representa                           | O que permite fazer                                  | Exemplo no app de meditação                   |
|---------------------|---------------------------------------------|------------------------------------------------------|-----------------------------------------------|
| **Nominal**         | Categorias **sem ordem**                   | Contar, classificar, comparar frequências            | Tema da meditação: sono, ansiedade, foco       |
| **Ordinal**         | Categorias **com ordem**, mas sem intervalo definido | Ordenar, comparar posições                      | Avaliação de humor: muito ruim a muito bom     |
| **Intervalar**      | Números com **intervalos iguais**, mas **sem zero absoluto** | Somar, subtrair, calcular médias (com cuidado) | Temperatura ambiente (ºC) durante a meditação  |
| **Razão**           | Números com **intervalos iguais** e **zero absoluto** | Todas as operações matemáticas válidas              | Tempo de uso (minutos), número de sessões      |

!!! tip "Dica"
    - **Nominal:** nomeia  
    - **Ordinal:** ordena  
    - **Intervalar:** mede intervalos  
    - **Razão:** mede proporções  

---

## Examinando os níveis com mais profundidade

### 🟠 Nominal  
Sem ordem, sem cálculo. Só classifica.

- Ex: Cor preferida do tema do app (azul, verde, lilás).
- Gráficos: barras, pizza.
- Proibido: média, mediana, desvio padrão.

### 🟡 Ordinal  
Com ordem, mas sem noção clara de *distância* entre os níveis.

- Ex: Avaliação de experiência: ruim, médio, bom, excelente.
- Pode-se usar: moda, mediana, percentis.
- Atenção: **média pode ser enganosa**.

!!! warning "Atenção"
    **Cuidado com escalas de Likert (ex: 1 a 5).** Elas são ordinais, mesmo quando numeradas. Calcular média pode sugerir uma precisão que os dados **não têm**.

### 🟢 Intervalar  
Os valores são números reais com distâncias iguais, mas **o zero não é ausência da variável.**

- Ex: Temperatura em ºC (0°C ≠ ausência de temperatura).
- Permite: somas, médias, diferenças.
- Não permite: **razões** (ex: "30°C é o dobro de 15°C" é incorreto!).

### 🔵 Razão  
Tem tudo que o intervalar tem, **mas com zero absoluto**. Aqui, a matemática rola solta.

- Ex: Duração da sessão em minutos.  
  (0 min = não houve sessão).
- Pode-se fazer qualquer operação matemática: médias, razões, coeficientes, etc.

---

## Consequências práticas no app

### ❌ Erro:
Tratar os valores de humor de 1 a 5 como se fossem números contínuos para calcular desvio padrão.

### ✔️ Correto:
Tratar a variável como **ordinal**, usando **mediana** ou **moda** para representar tendência central, e comparar grupos com testes adequados (ex: teste de Mann-Whitney).

### ❌ Erro:
Comparar 30ºC com 15ºC e dizer que o ambiente estava "duas vezes mais quente".

### ✔️ Correto:
Comparar **durações de meditação** (ex: 20 minutos é o dobro de 10) — porque isso é uma variável de razão.

---

## Retomando o erro inicial

A escala de humor era **ordinal**, não quantitativa contínua.  
Calcular a média e tratá-la como medida de precisão **foi uma escolha estatisticamente inválida.**

Se a equipe tivesse identificado corretamente o nível de mensuração, teria optado por:

- Usar a **mediana** como medida de tendência central;
- Analisar a distribuição por **frequência** e não por valor numérico;
- Aplicar **testes não paramétricos** apropriados para variáveis ordinais.

Essa distinção **evitaria interpretações enganosas** e decisões com base em números que **parecem exatos, mas não são.**

---

## O que aprendemos?

- Existem **quatro níveis clássicos de mensuração**: nominal, ordinal, intervalar e razão.
- Cada nível define **que tipo de operações estatísticas** são permitidas.
- Tratar dados ordinais ou nominais como numéricos pode levar a **erros sérios de interpretação**.
- A **qualidade da análise estatística começa com a correta classificação dos dados.**

---

## Para explorar mais

- 📺 **Vídeo:** [Níveis de Mensuração – Canal Estatística com o Diego](https://www.youtube.com/watch?v=v-vgQk_5RhE)
- 📄 **Artigo:** [Os 4 níveis de mensuração em Estatística – Blog Estatcamp](https://www.estatcamp.com.br/estatistica/estatistica-niveis-de-mensuracao/)
- 📖 **Post:** [Nominal, Ordinal, Intervalar e Razão – Guia do Enem](https://guiadoenem.com.br/niveis-de-mensuracao/)

Esses materiais oferecem mais exemplos, exercícios e formas visuais de fixar o conteúdo — ideais para quem quer dominar de vez esse conceito.