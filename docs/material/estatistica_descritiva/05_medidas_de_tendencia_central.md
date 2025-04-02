# Capítulo 5 — Medidas de Tendência Central

## Quando um número tenta falar por todos

Você está numa reunião e ouve a seguinte frase:

> “A média salarial dos nossos funcionários é de R$ 8.000.”

Imediatamente, alguém pensa:  
**“Estamos bem pagos!”**

Mas depois, descobre que 3 diretores recebem mais de R$ 30 mil, enquanto o restante dos funcionários recebe entre R$ 2.000 e R$ 3.000.

A **média** é verdadeira — mas **não representa ninguém** da maior parte da empresa.

---

## Por que usamos medidas de tendência central?

Quando temos muitos dados, é natural tentar **resumi-los em um valor só**.  
Queremos encontrar um “centro”, um “valor típico”, algo que represente o conjunto.

As medidas mais comuns para isso são:

- **Média**
- **Mediana**
- **Moda**

Mas atenção: cada uma **responde a uma pergunta diferente**.  
E usar a medida errada pode **ocultar verdades importantes**.

---

## A média (aritmética)

É o famoso “soma tudo e divide pelo número de elementos”.  
É intuitiva, fácil de calcular e amplamente usada.

**Mas também é a mais sensível a valores extremos.**

Imagine os salários abaixo (em R$):

```
2200, 2300, 2400, 2500, 8000
```

- A **média** é R$ 3.480  
- Mas quatro pessoas ganham **menos que isso**

!!! warning "A média pode ser puxada por poucos"
    Basta um valor muito alto (ou muito baixo) para **puxar a média** — e dar a impressão de que todos estão melhor (ou pior) do que realmente estão.

---

## A mediana

A mediana é o **valor que está no meio da distribuição**, separando a metade inferior da metade superior.

Com os mesmos salários:

```
2200, 2300, 2400, 2500, 8000
```

A **mediana é 2400** — e representa melhor a maioria.

!!! tip "A mediana resiste a extremos"
    Mesmo que o último salário fosse R$ 80 mil, a mediana continuaria sendo R$ 2400.  
    Isso a torna ideal em situações com **distribuição desigual**.

---

## A moda

É o **valor que mais se repete**.

Num conjunto de notas:

```
5, 7, 7, 7, 8, 8, 9
```

A moda é 7.

!!! note "Moda é útil para identificar picos"
    Quando há grande concentração de valores em uma única categoria (como “nota 0” ou “frequência 100%”), a moda revela **comportamentos dominantes**.

---

## Qual usar?

| Situação | Medida recomendada | Por quê |
|----------|---------------------|---------|
| Dados simétricos, sem extremos | Média | É simples e representativa |
| Dados com valores extremos | Mediana | Não se deixa distorcer |
| Categorias ou repetições | Moda | Mostra o mais comum |

!!! tip "Compare mais de uma medida"
    Não há regra fixa. Muitas vezes, o ideal é **usar mais de uma medida** para entender diferentes aspectos dos dados.

---

## Estudo de caso: a escola do bairro rico

Duas escolas divulgaram a “nota média” dos alunos no Enem:

- Escola A: **média de 720 pontos**
- Escola B: **média de 640 pontos**

Na imprensa, a Escola A foi exaltada como referência.  
Mas ao olhar os dados detalhados, notamos que:

- A **mediana** na Escola A era 610  
- A **mediana** na Escola B era 630

O que isso indica?

- A Escola A teve **alguns poucos alunos com notas altíssimas**, puxando a média para cima.
- Mas a maioria ficou abaixo da mediana da Escola B.

!!! warning "Cuidado com comparações apressadas"
    A média isolada pode passar a imagem errada.  
    **Sempre pergunte**: o dado representa a maioria ou apenas uma elite?

---

## O que aprendemos neste capítulo

- Medidas de tendência central resumem os dados — mas **cada uma resume de um jeito**.
- A média é fácil, mas vulnerável a valores extremos.
- A mediana é robusta e representa bem a maioria.
- A moda revela o valor mais comum.
- O uso correto dessas medidas **evita distorções e narrativas enganosas**.

---

## O que vem a seguir

Nem sempre queremos apenas saber o valor "típico". Às vezes, o mais importante é saber **o quanto os dados variam**: se estão concentrados, dispersos, se há valores fora do comum.

É hora de estudar as medidas de dispersão.

> Capítulo 6 — Medidas de Dispersão: entender o quanto os dados se espalham
