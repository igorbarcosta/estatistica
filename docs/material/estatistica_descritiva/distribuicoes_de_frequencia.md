# Distribuição de Frequência

Antes de pensar em médias ou gráficos sofisticados, é preciso olhar para **quantos casos existem de cada valor observado**. Esse é o papel da distribuição de frequência: mostrar como os dados estão espalhados — ou concentrados — em determinadas categorias ou intervalos.

Mais do que contar, a frequência nos ajuda a **ver o padrão escondido** nos números.

---

## O que é uma distribuição de frequência?

A distribuição de frequência é a **organização dos dados segundo a repetição de seus valores**. Pode ser expressa de diferentes formas:

- **Frequência absoluta**: número de ocorrências de cada valor.
- **Frequência relativa**: proporção (%) do total de dados.
- **Frequência acumulada**: soma progressiva das frequências até determinado valor.

Essas formas são complementares. Juntas, permitem responder perguntas como:

- Qual valor ocorre com mais frequência?
- Qual porcentagem dos dados está abaixo de X?
- Onde está concentrada a maioria dos valores?

---

## Distribuição de frequência para variáveis categóricas

Quando os dados são qualitativos (ex: grau de satisfação), basta contar quantas vezes cada categoria aparece.

| Grau de satisfação | Frequência absoluta | Frequência relativa |
|--------------------|---------------------|---------------------|
| Ruim               | 10                  | 10%                 |
| Regular            | 25                  | 25%                 |
| Bom                | 40                  | 40%                 |
| Ótimo              | 25                  | 25%                 |

!!! tip "Dica"
    Em variáveis categóricas, a **análise de frequência é a principal forma de descrição**.

---

## Distribuição de frequência para variáveis numéricas

### Quando há poucos valores distintos

Para variáveis numéricas discretas com poucos valores (ex: número de filhos), podemos usar a mesma abordagem:

| Nº de filhos | Frequência |
|--------------|------------|
| 0            | 1          |
| 1            | 2          |
| 2            | 3          |
| 3            | 4          |
| 4            | 1          |
| 5            | 1          |

!!! tip "Dica"
    Quando os valores numéricos são poucos e inteiros, vale a pena usar tabelas simples de frequência.

---

### Quando há muitos valores distintos

Se os dados forem contínuos ou muito variados (ex: altura, idade), é melhor **agrupar em intervalos**:

| Faixa etária    | Freq. absoluta | Freq. relativa | Freq. acumulada |
|-----------------|----------------|----------------|------------------|
| 18 a 29 anos    | 6              | 12%            | 12%              |
| 30 a 39 anos    | 14             | 28%            | 40%              |
| 40 a 49 anos    | 12             | 24%            | 64%              |
| 50 a 59 anos    | 10             | 20%            | 84%              |
| 60 anos ou mais | 8              | 16%            | 100%             |

!!! warning "Cuidado com os intervalos"
    Intervalos mal definidos podem esconder padrões, criar picos artificiais ou distorcer a percepção da distribuição.

---

## Frequência acumulada e percentis

A frequência acumulada é essencial para entender **posições relativas**.

**Exemplo:**  
Se 65% das pessoas leram até 3 livros, alguém que leu 4 livros está acima do 65º percentil.

!!! tip "Dica"
    A frequência acumulada é o caminho natural para se chegar aos **percentis**, especialmente em contextos como vestibulares, performance esportiva ou renda.

---

## Quando a frequência revela o que a média esconde

Considere os salários abaixo (em R$ mil):


- Média: R$ 4,79 mil  
- Mediana: R$ 2 mil  
- Moda: R$ 2 mil

A média está **fortemente distorcida** por um valor extremo. A distribuição de frequência deixa isso claro: 9 dos 10 valores estão concentrados entre 1 e 3,5 mil.

!!! warning "Média pode enganar"
    A distribuição de frequência protege contra o erro de tomar a média como representativa.

---

## Conclusão

A distribuição de frequência é mais do que uma tabela de contagens: ela **revela a forma dos dados** e **protege contra interpretações apressadas**.

> Antes de resumir os dados, é preciso conhecê-los.  
> A distribuição de frequência é o espelho mais honesto que você pode usar.
