# A moda

!!! success "Onde Estamos"

    Depois de conhecer a **média**, que busca um ponto de equilíbrio numérico, e a **mediana**, que aponta o valor central da ordenação, é hora de olhar para a terceira peça desse quebra-cabeça: a **moda**.

    Diferente das anteriores, a moda **não calcula nem divide** — ela apenas **observa qual valor mais aparece**. Parece simples demais? Pois é justamente por isso que ela pode ser tão reveladora em certos contextos.

---

## O dilema do suporte técnico: por onde começar?

Imagine uma empresa de tecnologia que oferece suporte a clientes via chat. Ao final de cada atendimento, o cliente classifica sua experiência com uma nota de 1 a 5 estrelas.

A equipe quer entender:  
**“Qual é a nota que mais representa a avaliação dos nossos usuários?”**

Eles coletam os seguintes dados de 20 atendimentos:

```
[5, 4, 5, 3, 5, 2, 5, 3, 4, 1, 5, 3, 4, 5, 2, 5, 5, 3, 4, 5]
```

Nesse mar de números, a média pode dizer algo, a mediana outro… Mas o que salta aos olhos é a quantidade de vezes que o número **5** aparece.

---

## O que é a moda?

!!! info "Definição"
    A **moda** é o valor que **ocorre com maior frequência** em um conjunto de dados. Ela representa o **valor mais comum**, o que aparece mais vezes.

!!! example "Exemplo"
        Dados: [5, 4, 5, 3, 5, 2, 5, 3, 4, 1, 5, 3, 4, 5, 2, 5, 5, 3, 4, 5]

    Contagem:

    - 5: aparece **9 vezes**  
    - 4: 3 vezes  
    - 3: 3 vezes  
    - 2: 2 vezes  
    - 1: 1 vez

    **Moda = 5** (nota mais comum)

A moda, nesse contexto, nos diz de forma direta: a maioria das pessoas avaliou o suporte com **5 estrelas**. Isso pode ser um excelente sinal para a empresa.

---

## Características da moda

A moda tem um comportamento peculiar:

- Pode **não existir**, se nenhum valor se repetir  
- Pode haver **mais de uma moda**, se vários valores empatarem na frequência máxima  
- Pode ser usada com **dados qualitativos ou categóricos**, o que a torna única entre as medidas centrais

!!! example "Exemplo com dados qualitativos"
    Cores preferidas de usuários em um aplicativo:

        ["azul", "verde", "azul", "vermelho", "azul", "verde"]

    Moda: **"azul"**

    A média e a mediana não fazem sentido aqui, mas a moda revela qual cor predomina nas preferências.

---

## Quando (e por que) usar a moda

A moda é especialmente útil quando queremos:

- **Detectar padrões ou preferências** em dados categóricos  
- **Identificar tendências de comportamento**  
- Observar **ocorrências dominantes** em distribuições numéricas

Ela é uma medida descritiva direta, simples, e muito expressiva quando os dados têm um ou poucos valores que se destacam.

!!! tip "Dica"
    Em análises de comportamento de usuários, preferências de consumo, produtos mais vendidos, ou respostas de múltipla escolha, a moda costuma ser **a medida mais significativa**.

---

## A moda pode enganar?

Assim como outras medidas centrais, a moda também tem seus limites.

!!! warning "Atenção"
    A moda **ignora todos os outros valores** que não sejam os mais frequentes.  
    Isso pode ser problemático quando:

    - Há muita variação nos dados
    - A frequência da moda é baixa ou pouco relevante
    - Há múltiplas modas com sentidos opostos (ex.: opiniões polarizadas)

??? question "Reflexão: Se a moda for um valor extremo, ela ainda representa bem o grupo?"
    Depende. Imagine um produto com avaliações majoritariamente entre 3 e 4 estrelas, mas com várias pessoas dando 1 estrela por insatisfação específica. Se o valor 1 for o mais frequente, a moda será 1 — mas isso pode distorcer a percepção geral se a maioria não tiver avaliado tão mal assim.

---

## Fechando o ciclo: a medida do comum

Enquanto a média resume, e a mediana divide, a moda **revela o valor mais recorrente**. Ela pode ser o melhor termômetro de popularidade, preferência ou padrão dominante — mesmo quando os números não são simétricos ou equilibrados.

> A moda é a voz da repetição. E muitas vezes, o que mais se repete é o que mais importa entender.

---

## Materiais Complementares

- [Khan Academy: Como resumir dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/summarizing-quantitative-data)
