# Capítulo 4 — Gráficos Estatísticos

## Quando a imagem fala mais do que os números

Você está rolando o feed do celular e vê um gráfico com a manchete:

> “Nova política derruba o desemprego!”

As barras estão em queda, o título é animador. Mas ao olhar com atenção, algo parece estranho:  
O eixo vertical começa em 8,5%, as diferenças entre as barras são exageradas, e a escala não é clara.

> O gráfico **não está mentindo nos números** — mas **também não está dizendo a verdade**.

Este capítulo é sobre isso: como representar dados de forma **visualmente correta** — e como **identificar distorções** que podem induzir a interpretações erradas.

---

## Por que usar gráficos?

Gráficos são recursos poderosos na comunicação estatística:

- Mostram padrões e tendências com rapidez;
- Facilitam comparações entre grupos;
- Tornam relatórios mais acessíveis;
- Ajudam a identificar exceções e anomalias.

!!! note "Gráficos são argumentos visuais"
    Todo gráfico carrega uma **intenção comunicativa**.  
    Avaliar um gráfico é perguntar:  
    “O que ele está tentando me fazer enxergar?”  
    E mais importante:  
    “Isso corresponde à realidade dos dados?”

---

## Gráfico de barras

Este é um dos gráficos mais populares — e também um dos mais mal utilizados.

Ele é usado para **comparar categorias**. Cada barra representa uma categoria. A altura (ou comprimento) representa a quantidade associada.

Exemplo: número de alunos por curso.

<div style="max-width: 1000px; margin-height: 500px; margin: auto">
<canvas id="graficoBarras"></canvas>
</div>

!!! tip "Comece o eixo y no zero"
    Se o eixo vertical não começa do zero, a diferença entre categorias **parece maior do que realmente é**.  
    É uma das formas mais comuns de distorção visual.

!!! warning "Evite enfeites"
    Gráficos 3D, sombras e efeitos podem parecer atraentes, mas atrapalham a leitura.  
    Clareza sempre deve vir antes da estética.

---

## Gráfico de setores (pizza)

Este gráfico representa **partes de um todo**, mostrando como uma variável categórica se divide em proporções.

Exemplo: formas de pagamento utilizadas em uma loja.

<div style="max-width: 600px; margin-height: 500px; margin: auto">
<canvas id="graficoPizza">
</div>

!!! tip "Use com poucas categorias"
    Quando há mais de 4 ou 5 categorias, as fatias ficam pequenas e difíceis de distinguir.  
    Nesse caso, **prefira um gráfico de barras**.

!!! warning "Diferenças visuais enganam"
    O olho humano tem dificuldade em comparar áreas circulares.  
    Duas fatias podem parecer iguais, mesmo com 5% de diferença.

---

## Histograma

O histograma é parecido com o gráfico de barras, mas com uma diferença crucial:  
Ele é usado para **variáveis numéricas contínuas**, agrupando os dados em **intervalos**.

Ele nos permite visualizar a forma da distribuição: se é simétrica, concentrada, dispersa, com picos, ou com valores extremos.

Exemplo: distribuição de alturas de uma turma.

<div style="max-width: 1000px; margin-height: 500px; margin: auto">
    <canvas id="graficoHistograma"></canvas>
</div>
!!! tip "O histograma revela a estrutura"
    Ao agrupar dados em faixas, o histograma mostra onde os dados estão concentrados e onde há outliers.  
    É especialmente útil em variáveis como salário, tempo ou idade.

---

## Gráfico de linhas

Usado para **visualizar a evolução de um fenômeno ao longo do tempo**.  
Cada ponto representa um valor em um instante, e as linhas conectam os pontos para mostrar tendência.

Exemplo: variação da temperatura ao longo da semana.

<div style="max-width: 1000px; margin-height: 500px; margin: auto">
<canvas id="graficoLinha"></canvas>
</div>

!!! tip "Use apenas com dados ordenados"
    Gráficos de linha só fazem sentido quando os dados têm **ordem natural** (tempo, posição, sequência).  
    Se os dados forem apenas categorias, prefira barras.

!!! warning "Linhas sugerem continuidade"
    Se os dados são pontuais (ex: meses sem conexão entre si), o gráfico de linha pode sugerir uma tendência que **não existe**.

---

## Gráfico de colunas empilhadas

Este gráfico mostra **categorias principais divididas em subcategorias** — tudo dentro da mesma barra.  
Permite comparar tanto o **total por grupo** quanto sua **composição interna**.

Exemplo: meios de transporte utilizados por faixa etária.

<div style="max-width: 1000px; margin-height: 500px; margin: auto">
<canvas id="graficoEmpilhado"></canvas>
</div>

!!! tip "Ideal para mostrar composição"
    Se você quer mostrar **como diferentes fatores contribuem para um total**, esse gráfico é mais informativo que barras separadas.

!!! warning "Muitas categorias empilhadas confundem"
    Quanto mais segmentos em cada barra, mais difícil fica interpretar.  
    Use com moderação e escolha boas cores.

---

## Boxplot (Diagrama de Caixa)

O boxplot mostra a **distribuição de uma variável numérica** com destaque para:

- Mediana (linha central);
- Quartis (limites da caixa);
- Valores extremos (outliers);
- Dispersão total.

<!-- No seu arquivo markdown do MkDocs -->

<div style="max-width: 1000px; margin-height: 500px; margin: auto">
  <canvas id="boxplotChart"></canvas>
</div>

!!! note "O boxplot mostra o que a média esconde"
    Uma média de R$ 2.800 pode parecer boa.  
    Mas se a maior parte da amostra recebe entre R$ 1.800 e R$ 2.200, e poucos ganham R$ 10 mil, **a média engana**.  
    O boxplot deixa isso claro.

---

## Gráfico de dispersão (scatterplot)

Usado para **explorar a relação entre duas variáveis numéricas**.  
Cada ponto representa uma observação, com coordenadas (x, y).

Exemplo: relação entre horas de estudo e nota final.

<div style="max-width: 1000px; margin-height: 500px; margin: auto">
    <canvas id="graficoDispersao"></canvas>
</div>

!!! tip "Veja padrões invisíveis"
    Este gráfico revela correlações (positiva, negativa, nenhuma), agrupamentos ou outliers.  
    É fundamental para análises bivariadas.

!!! warning "Correlação não é causalidade"
    Mesmo que os pontos formem uma linha, isso **não significa** que uma variável causa a outra.

---

## Estudo de caso: o gráfico que contava outra história

Em 2012, um canal de notícias exibiu um gráfico com as seguintes informações:

| Mês      | Taxa de desemprego (%) |
|----------|-------------------------|
| Janeiro  | 8,3                     |
| Fevereiro| 8,3                     |
| Março    | 8,2                     |

Até aí, tudo certo. Mas o gráfico visual mostrava a barra de março como **maior** que as anteriores — como se o desemprego **tivesse aumentado**.

O que havia de errado?

- O eixo vertical começava em **8,0%**, e não em zero;
- As barras estavam em escala desproporcional;
- A diferença visual entre as barras era muito maior que a diferença real entre os números.

!!! warning "O gráfico dizia o oposto do dado"
    Sem mudar nenhum número, o gráfico **induziu à leitura oposta da realidade**.  
    Uma manipulação visual sutil — e perigosa.

---

## O que aprendemos neste capítulo

- Gráficos são ferramentas poderosas — tanto para comunicar quanto para confundir.
- Cada tipo de dado exige um tipo de gráfico adequado.
- Distorções visuais são comuns e precisam ser combatidas com criticidade.
- O olhar estatístico é também **um olhar gráfico**: sabe ler, sabe duvidar, sabe comunicar.
- **Transparência visual é parte da ética estatística.**

---

## O que vem a seguir

Agora que sabemos representar dados com honestidade, vamos aprender a **resumir informações numéricas** com medidas centrais: média, mediana e moda.  
E, claro, entender **quando cada uma conta a história certa — ou a errada.**

> Capítulo 5 — Medidas de Tendência Central: como resumir dados sem esconder o essencial
