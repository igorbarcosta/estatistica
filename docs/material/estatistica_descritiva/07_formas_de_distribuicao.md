# Capítulo 7 — Formas de Distribuição

## Quando os dados têm personalidade

Imagine dois grupos com a **mesma média**, o **mesmo desvio padrão**, e até a **mesma quantidade de dados**.  
A princípio, parecem idênticos.

Mas ao plotar os dados em um gráfico, algo surpreende:

- Um grupo tem a maioria dos dados **bem próximos da média**;
- O outro tem valores **espalhados nos extremos**, com poucos concentrados no centro.

> As medidas numéricas não mentem. Mas **nem sempre contam tudo**.

É aí que entra o estudo das **formas de distribuição**.  
É ele que nos mostra o **desenho** dos dados. Sua **personalidade estatística**.

---

## Por que se preocupar com a forma da distribuição?

Muitas análises estatísticas — inclusive as mais sofisticadas — partem de um pressuposto:

> “Os dados seguem uma distribuição normal.”

Mas… e se não seguirem?

Antes de aplicar qualquer técnica, precisamos **observar o comportamento geral dos dados**:

- Eles estão **simétricos** ou **puxados para um lado**?
- A maioria dos valores está **concentrada no centro** ou **espalhada nas pontas**?
- Existem **valores extremos** que desequilibram tudo?

---

## Simetria: equilíbrio visual e estatístico

Uma distribuição é **simétrica** quando os dados estão distribuídos igualmente em torno da média.

Imagine uma curva com um pico no centro e lados iguais — é o clássico **“sino da normalidade”**.

Mas na prática, os dados nem sempre são assim.

---

## Assimetria (ou “skewness”): quando os dados puxam para um lado

Uma distribuição é **assimétrica** quando os dados se concentram mais de um lado.

### Assimetria positiva (à direita)

- Muitos valores baixos;
- Poucos valores muito altos puxam a média para cima.

Exemplo: **salários no Brasil**.

!!! tip "Média > Mediana > Moda"
    Esse padrão é típico de distribuições com valores extremos elevados.

---

### Assimetria negativa (à esquerda)

- Muitos valores altos;
- Poucos valores muito baixos puxam a média para baixo.

Exemplo: **notas em provas fáceis**, onde quase todos tiram acima de 8.

!!! tip "Moda > Mediana > Média"
    Nessa configuração, os valores baixos são exceção — mas afetam a média.

---

## Curtose: o quão “esticada” ou “achatada” é a distribuição

A **curtose** indica o formato da cauda da distribuição:

- **Leptocúrtica**: cauda fina, pico alto → muitos dados próximos da média e alguns outliers.
- **Mesocúrtica**: cauda moderada, pico regular → padrão da distribuição normal.
- **Platicúrtica**: cauda larga, pico baixo → dados bem distribuídos, sem concentração.

!!! note "Curtose e consistência"
    Uma distribuição muito “pontuda” pode indicar **excesso de regularidade** com **riscos extremos isolados**.  
    Uma distribuição muito achatada mostra **diversidade e variação**.

---

## Estudo de caso: dois bairros e a renda invisível

Dois bairros de uma cidade têm a **mesma renda média: R$ 3.000**.

Mas veja os perfis:

### Bairro A

- Maioria dos moradores recebe entre R$ 2.800 e R$ 3.200;
- Quase não há variações.

### Bairro B

- Parte da população recebe **menos de R$ 1.000**;
- Outra parte ganha mais de **R$ 10.000**;
- E uma pequena faixa concentra-se entre R$ 2.500 e R$ 3.500.

No relatório da prefeitura, aparece:

> “Ambos os bairros têm condições econômicas semelhantes.”

Mas isso é verdade?

!!! warning "Média parecida, realidades opostas"
    A forma da distribuição mostra o que a média oculta: **desigualdade, concentração, injustiça**.

> Sem olhar o gráfico, você perde o desenho da verdade.

---

## Como identificar a forma da distribuição?

- **Gráfico de histograma**: mostra se há simetria, picos ou caudas alongadas.
- **Boxplot**: ajuda a perceber assimetria e valores extremos.
- **Comparação entre média, mediana e moda**: revela se há puxões nos dados.

---

## O que aprendemos neste capítulo

- Os dados têm forma — e ela importa.
- Distribuições simétricas são raras na realidade.
- A assimetria revela **para onde os dados estão sendo puxados**.
- A curtose mostra se os dados estão concentrados ou dispersos.
- Observar a forma da distribuição é fundamental para qualquer análise honesta.

---

## O que vem a seguir

Agora que conhecemos os principais resumos numéricos e visuais de um conjunto de dados, é hora de explorar **relações entre variáveis**.  
Como duas variáveis se comportam juntas? Existe associação? Tendência? Correlação?

> Capítulo 8 — Associação entre Variáveis: quando uma coisa depende da outra
