## Um gráfico vale mil números: por que a forma da distribuição importa

Imagine que você está desenvolvendo um app para monitorar o tempo de resposta de servidores em uma grande empresa. Você coleta os dados e encontra uma **média** de resposta de **200ms**. Ótimo, certo?

Mas há um problema: **usuários estão reclamando de lentidão**.

Você checa novamente os dados. A média continua a mesma. Mas aí você decide olhar o gráfico da distribuição dos tempos de resposta.

E o que vê é revelador: a maioria das requisições leva entre 100ms e 150ms, **mas há uma cauda longa de casos que ultrapassam 1000ms**. A média estava “camuflando” esses casos extremos.

Esse é um exemplo prático do nosso tema: **as formas das distribuições**. Porque **não basta saber a média, mediana ou moda** — precisamos entender *como os dados se espalham*. A forma da distribuição revela padrões, desvios, anomalias e até mentiras escondidas nos números.

---

## Nem todo gráfico de dados tem a mesma cara

Quando representamos graficamente um conjunto de dados (com um histograma, por exemplo), a forma que esse gráfico assume é chamada de **distribuição**. E ela pode dizer muito sobre os dados — às vezes, mais do que os próprios valores numéricos.

Vamos explorar as formas mais comuns que encontramos em distribuições:

---

## A simetria da normalidade: distribuição simétrica e em forma de sino

A distribuição **normal**, também chamada de **distribuição gaussiana**, é a mais famosa.

Ela aparece naturalmente em muitos fenômenos: altura de pessoas, erros de medição, variações genéticas, etc.

!!! info "Distribuição Normal"
    Características:
    
    - Tem forma de sino.
    - É **simétrica**: a média, a mediana e a moda coincidem.
    - Os dados se concentram próximos da média, com menos casos extremos.

<canvas id="normalChart"></canvas>


!!! example "Exemplo"
    Suponha que um sensor de temperatura registre pequenas variações em um ambiente estável. A maioria dos registros ficará perto da média (por exemplo, 22°C), com poucas variações para cima ou para baixo.

    O histograma resultante se pareceria com um sino centrado em 22°C.



!!! tip "Dica"
    A distribuição normal é base para muitos testes estatísticos e algoritmos de machine learning. Mas **assumir normalidade sem verificar pode ser um erro sério**.

---

## O pêndulo do desequilíbrio: distribuições assimétricas (ou enviesadas)

Nem toda distribuição é simétrica. Muitas vezes os dados se acumulam em um lado e deixam uma “cauda” do outro. Isso é chamado de **assimetria** (ou *skewness*).

### Assimetria à direita (positiva)

A cauda fica à direita. Muitos valores pequenos, poucos valores muito grandes.

<canvas id="rightSkewChart"></canvas>

!!! example "Exemplo"
    Renda mensal de pessoas em uma cidade.

    - A maioria ganha até R$ 3.000.
    - Poucos ganham acima de R$ 20.000, mas esses poucos puxam a **média para cima**.

    A mediana será **menor que a média**.

### Assimetria à esquerda (negativa)

A cauda fica à esquerda. Muitos valores altos, poucos muito baixos.

<canvas id="leftSkewChart"></canvas>

!!! example "Exemplo"
    Notas de uma turma onde quase todos foram bem, mas alguns tiveram notas muito baixas (por ausência, por exemplo).

    A média será **menor que a moda e a mediana**.

!!! danger "Muito Cuidado"
    Em distribuições assimétricas, **a média pode ser enganosa**. Sempre compare com a mediana e observe a forma geral.

---

## Platôs e picos: o que a “altura” nos diz

A forma de uma distribuição também pode variar em termos de “altura” ou “achatamento”. Esse conceito é chamado de **curtose**.

### Leptocúrtica

- Pico alto e pontudo.
- Muitos dados perto da média.
- Caudas pesadas (mais dados extremos que o esperado).

<canvas id="leptokurticChart"></canvas>

### Platicúrtica

- Distribuição achatada.
- Dados mais dispersos.
- Caudas leves.

<canvas id="platykurticChart"></canvas>


!!! tip "Dica"
    Curtose ajuda a entender **o quão “concentrados” ou “dispersos”** estão os dados em torno da média.

---

## Distribuições multimodais: quando há mais de um “centro”

Nem toda distribuição tem um único pico. Às vezes os dados têm **dois ou mais “centros”**, indicando **comportamentos diferentes misturados**.

<canvas id="bimodalChart"></canvas>

!!! example "Exemplo"
    Tempo de login em um app:

    - Um grupo de usuários se conecta rapidamente (pico em 2s).
    - Outro grupo, usando internet lenta ou dispositivos antigos, leva mais tempo (pico em 10s).

    O histograma mostra dois picos: uma **distribuição bimodal**.

!!! warning "Atenção"
    Distribuições multimodais são sinais de que **há mais de um grupo nos dados**. Ignorar isso pode esconder padrões importantes.

---

## A face da igualdade: distribuição uniforme

E se os dados estivessem **igualmente distribuídos entre todos os valores possíveis**?

É o que chamamos de **distribuição uniforme**. Nesse caso, **todas as classes ou faixas têm a mesma frequência**.

!!! info "Distribuição Uniforme"
    Características:
    
    - Todos os valores têm a **mesma probabilidade de ocorrer**.
    - O gráfico tem **forma retangular** (ou um “platô” plano).
    - A média coincide com o centro do intervalo.

<canvas id="uniformChart"></canvas>

!!! example "Exemplo"
    Um sistema de sorteio que gera números aleatórios entre 1 e 100, com probabilidade igual para todos.

    Se coletarmos milhares de resultados, o histograma terá barras de altura semelhante entre 1 e 100.

!!! tip "Dica"
    A distribuição uniforme é usada para simulações, algoritmos de randomização, criptografia e jogos. Mas **é rara em dados naturais** — quando aparece, vale checar se os dados não foram truncados ou artificialmente manipulados.

---

## Reflexão: o formato revela o que a média esconde

??? question "Reflexão: por que olhar apenas para a média pode levar a decisões ruins?"
    - A média pode parecer “normal”, mas esconder **desvios extremos** que impactam a experiência do usuário.
    - Pode mascarar **segmentos distintos**, como grupos de clientes com comportamentos muito diferentes.
    - Pode levar a modelos estatísticos mal ajustados se a forma real da distribuição for ignorada.

---

## A forma importa — e muito

Distribuições não são só figuras bonitas. Elas contam histórias:

- De **simetria** ou **desigualdade**.
- De **homogeneidade** ou **segmentações ocultas**.
- De **padrões esperados** ou **anomalias perigosas**.

Em qualquer área da tecnologia — da ciência de dados ao design de produtos — **olhar a forma da distribuição é essencial** para interpretar os dados com profundidade.

**Porque uma média pode ser enganosa. Mas a forma dificilmente mente.**


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="../../../../assets/javascripts/as_formas_das_distribuicoes.js"></script>