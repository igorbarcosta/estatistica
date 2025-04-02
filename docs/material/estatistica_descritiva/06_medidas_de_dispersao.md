# Capítulo 6 — Medidas de Dispersão

## Quando a média mente sem mentir

Imagine duas turmas que fizeram a mesma prova. Em ambas, a **média foi 7,0**.

Na primeira turma, todos os alunos tiraram **exatamente 7,0**.  
Na segunda, metade tirou **nota 10**, e a outra metade, **nota 4**.

> A média é a mesma. Mas o que ela esconde?

Se você olhasse apenas para o número 7, diria que as turmas tiveram desempenho idêntico.  
Mas uma é estável, a outra é polarizada.  
Uma é previsível, a outra é um jogo de sorte.

> É por isso que a média, sozinha, **não basta para entender um conjunto de dados**.

---

## A importância de saber o quanto os dados variam

Toda vez que olhamos para um grupo de dados, duas perguntas devem ser feitas:

1. Qual o valor típico?
2. **Quão longe os dados estão desse valor?**

As **medidas de dispersão** respondem à segunda pergunta.  
Elas mostram o **grau de variação, consistência e estabilidade** de um conjunto de dados.

---

## Amplitude: o primeiro olhar

A **amplitude** é a diferença entre o maior e o menor valor do conjunto.  
É simples, direta, e oferece um primeiro panorama do tamanho da variação.

Exemplo:  
Notas de uma turma: 5, 6, 7, 8, 9  
Amplitude = 9 − 5 = **4**

Mas imagine esta outra situação:

Notas: 0, 0, 0, 0, 10  
Amplitude = 10 − 0 = **10**

Ambas as turmas têm amplitude — mas apenas a segunda revela um problema sério.

!!! warning "Amplitude é superficial"
    Ela nos diz a distância entre os extremos, mas **nada sobre o que acontece entre eles**.  
    É como julgar um livro pelo início e pelo final, sem ler o meio.

---

## Variância: o quanto os dados se afastam da média

A **variância** nos diz, numericamente, **o quanto os valores se espalham em torno da média**.  
Ela calcula a média dos quadrados das distâncias de cada valor até a média geral.

Quanto maior a variância, mais espalhados estão os dados.  
Quanto menor, mais concentrados ao redor do centro.

Mas… quadrados? Por quê?

Porque elevar ao quadrado evita que as distâncias negativas se anulem, e também dá mais peso aos desvios maiores.

!!! tip "Variância detecta instabilidade"
    Quando há muitos valores extremos — alunos que tiram 0 ou 10, por exemplo — a variância cresce.  
    Ela grita: “Aqui tem algo fora do comum!”

---

## Desvio padrão: o número que a gente entende

A variância tem um problema: ela cresce demais e perde a escala.  
Se estamos falando de salários em reais, a variância vem em reais ao quadrado — o que não faz sentido.

Por isso usamos o **desvio padrão**: é a **raiz quadrada da variância**, trazendo o valor de volta à mesma unidade dos dados.

Se o **desvio padrão for pequeno**, os dados estão próximos da média.  
Se for grande, os dados estão espalhados.

> Pense no desvio padrão como o **respiro** da média. Ele diz quanto os dados oscilam em volta dela.

---

## Coeficiente de variação: comparar o incomparável

Agora imagine duas turmas:

- Turma A: média = 70 pontos, desvio padrão = 14
- Turma B: média = 10 pontos, desvio padrão = 2

Qual turma tem maior variação?

Se compararmos só o desvio padrão, A parece mais instável.  
Mas, proporcionalmente:

- Turma A: CV = 14 / 70 = 20%
- Turma B: CV = 2 / 10 = 20%

> O **coeficiente de variação (CV)** mostra a variação **relativa à média**.  
> É ele que nos permite comparar conjuntos **com escalas diferentes**.

!!! tip "Use o CV para comparar contextos distintos"
    Ele transforma o desvio padrão em porcentagem — e com isso, podemos comparar desempenho em notas, salários, vendas, ou qualquer coisa que tenha média.

---

## Estudo de caso: duas escolas, uma injustiça

A imprensa publicou a seguinte manchete:

> “Duas escolas públicas atingem média 7,0 no desempenho do Enem.”

Mas um professor decidiu olhar os dados com mais calma.

- Escola A: notas entre 6,5 e 7,5  
- Escola B: notas entre 3 e 10

A média era a mesma. Mas a **Escola A teve consistência**.  
A **Escola B teve desigualdade extrema**.

Na Escola A, todos estavam no mesmo barco.  
Na Escola B, metade estava afundando.

> A média uniformiza. A dispersão revela.

!!! warning "Sem a dispersão, a média vira propaganda"
    Quem não olha a dispersão **corre o risco de premiar a exceção e punir a regularidade.**

---

## O que aprendemos neste capítulo

- A média precisa de companhia. Sozinha, ela não explica nada.
- A amplitude mostra os extremos, mas ignora o miolo.
- A variância e o desvio padrão medem a estabilidade — e revelam desigualdade.
- O coeficiente de variação permite **comparar dispersões entre mundos diferentes**.
- Saber o quanto os dados variam é **entender o que está por trás do número principal**.

---

## O que vem a seguir

Agora que sabemos **onde está o centro** e **quão longe os dados podem estar dele**, é hora de observar a forma geral da distribuição.

Será que os dados são simétricos? Concentrados? Esticados para um lado só?

> Capítulo 7 — Formas de Distribuição: quando o gráfico conta o que os números não dizem
