# A Mediana

!!! objetivos "Objetivos de Aprendizagem"
    - Compreender o que é a mediana e como ela se diferencia da média.
    - Identificar situações em que a mediana é uma medida mais adequada de tendência central.
    - Evitar interpretações incorretas da mediana em cenários práticos.

!!! onde-estamos "Onde Estamos"
    Estamos construindo nosso repertório de medidas de tendência central. Já discutimos a **média**, que busca representar um conjunto de dados por meio de um “ponto de equilíbrio”. Agora, vamos conhecer a **mediana**, uma alternativa robusta — especialmente quando os dados nos pregam peças.

---
## Cenário

### Quando o salário médio não representa ninguém

Imagine que você trabalha em uma startup de tecnologia com 11 funcionários. Durante uma reunião, o CEO menciona que o **salário médio** da equipe é de **R$ 18.000**. Você estranha — afinal, seu salário é R$ 4.000, e a maioria dos colegas ganha algo semelhante.

Ao conversar com outros membros da equipe, você descobre algo curioso: **um único sócio fundador recebe R$ 160.000**, enquanto os outros dez funcionários têm salários entre R$ 3.500 e R$ 5.000.

Nesse momento, alguém da equipe pergunta:

> “Mas então... qual é o salário típico da empresa? Porque esse tal de ‘médio’ parece meio enganoso.”

Essa pergunta é o ponto de partida para entendermos um novo conceito essencial em estatística: **a mediana**.

---
## Explorando o Conceito

### O meio do caminho: uma definição intuitiva

A mediana é, simplesmente, o valor que ocupa **o centro de uma distribuição** quando os dados são organizados em ordem crescente.

Ela **não se deixa influenciar por valores extremos** — como aquele salário de R$ 160.000 no exemplo anterior. Por isso, em muitas situações, a mediana é **uma representação mais fiel do “típico”** do que a média.

!!! info "Definição"
    A **mediana** é o valor que divide um conjunto ordenado de dados em duas partes iguais: metade dos dados é menor ou igual a ela, e metade é maior ou igual.

### Como calcular, passo a passo

1. Organize os dados em ordem crescente.
2. Conte quantos valores há no total.
3. Se for uma quantidade ímpar, a mediana é o valor central.
4. Se for par, é a média dos dois valores centrais.

!!! example "Exemplo"
    Vamos voltar ao caso dos salários (em R$):
    
    `3.500, 3.800, 4.000, 4.200, 4.300, 4.400, 4.600, 4.800, 5.000, 5.200, 160.000`

    Total de valores: 11 (ímpar).  
    Valor central (6ª posição): **4.400**

    **Mediana = 4.400**

    Já a **média** é:
    
    $$
    \text{Média} = \frac{3.500 + 3.800 + \dots + 160.000}{11} = 18.000
    $$

    Percebe como a mediana representa muito melhor o “típico” da equipe?

---
## Aplicações e Armadilhas

### Quando a média mente — e a mediana salva

Em distribuições com **valores muito discrepantes** (chamados de *outliers*), a média pode ser arrastada para cima ou para baixo, **distorcendo a percepção da realidade**.

É justamente nessas situações que a mediana se destaca: **ela ignora os extremos** e foca no centro verdadeiro da distribuição.

!!! warning "Quando a média pode ser enganosa"
    Se você usar a média para representar preços, rendas ou tempos em cenários com grande variação, corre o risco de **informar algo que ninguém realmente experimenta**.

### Mas cuidado: a mediana também tem seus limites

A mediana não leva em conta **todos os valores** do conjunto — ela considera apenas a posição relativa. Por isso, ela pode **ignorar variações importantes** nos dados.

!!! danger "Quando confiar demais na mediana pode ser perigoso"
    Em decisões que exigem análise detalhada de variações — como orçamentos, desempenho acadêmico ou avaliação de políticas públicas — confiar apenas na mediana pode **mascarar desigualdades internas**.

---
## Para Refletir

??? question "Em qual destas situações a mediana seria mais informativa que a média?"
    - Distribuição de salários em uma grande empresa com poucos executivos e muitos funcionários operacionais.
    - Avaliação de tempos de espera em filas de banco, onde há muitos atendimentos rápidos e poucos muito demorados.
    - Preços de imóveis em um bairro onde há casas populares e mansões.

    **Resposta:** Em todas as situações! Em contextos com grandes assimetrias ou valores extremos, a mediana tende a representar melhor o “típico”.

---
## O que Levamos Daqui

!!! abstract "Resumo dos pontos-chave"
    - A mediana é o valor central de um conjunto ordenado.
    - É menos sensível a valores extremos do que a média.
    - É uma boa medida de tendência central quando os dados são assimétricos ou possuem *outliers*.
    - Mas não deve ser usada isoladamente, pois não capta todas as nuances da distribuição.

!!! success "Checklist de Revisão"
    - Sei calcular a mediana para conjuntos com quantidade ímpar e par de valores.
    - Entendo quando a mediana é mais adequada do que a média.
    - Reconheço situações em que a mediana pode ocultar informações relevantes.

---
## Materiais Complementares

- [Vídeo: Média vs Mediana – TED-Ed (legendado)](https://www.youtube.com/watch?v=CKX1LZSvZWI)
- Capítulo “Medidas de Posição” do livro *Estatística Básica* – Bussab e Morettin
- Exercícios práticos no site [Khan Academy – Mediana](https://pt.khanacademy.org/math/statistics-probability)
