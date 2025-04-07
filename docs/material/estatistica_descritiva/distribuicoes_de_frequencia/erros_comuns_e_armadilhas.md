# Erros Comuns e Armadilhas: Como (Não) Mentir com Estatística

Imagine que você está acompanhando a divulgação de dados de desempenho de duas plataformas de ensino online concorrentes. Uma delas mostra:

> “Aumentamos em 200% o número de acessos diários nos últimos meses!”

Enquanto isso, a outra apresenta um gráfico que parece mostrar uma vantagem esmagadora em relação à concorrência. Mas quando você vai olhar os **números reais**, descobre que os dois estão muito próximos.

**O que está acontecendo?**  
Você acabou de testemunhar uma das práticas mais comuns — e perigosas — no uso de tabelas e gráficos: **fazer os dados parecerem dizer algo que eles não dizem**.

---

## Estatística Mal-Intencionada ou Malfeita?

Nem todo erro é proposital. Mas em ambos os casos, as consequências são sérias: **conclusões erradas**, **decisões ruins** e, às vezes, **manipulação intencional da opinião pública ou do mercado**.

!!! danger "Perigo"
    É possível mentir sem alterar nenhum número. Basta **escolher mal a forma de apresentar os dados**, omitir informações ou distorcer os eixos dos gráficos.

---

## Armadilhas com Tabelas de Frequência

### 1. **Agrupamentos Enganosos**

Considere esta tabela:

| Intervalo (minutos) | Frequência |
|---------------------|------------|
| 0 ⟼ 30              | 100        |
| 30 ⟼ 90             | 500        |
| 90 ⟼ 150            | 100        |

À primeira vista, parece que a maioria dos usuários assiste à plataforma entre 30 e 90 minutos. Mas perceba: esse intervalo tem o **dobro da largura** dos outros. A frequência é maior porque o intervalo é maior!

!!! warning "Atenção"
    **Classes com larguras diferentes** só podem ser comparadas se você **normalizar** as frequências (usando densidade). Ignorar isso pode induzir à **ilusão de concentração** onde não há.

---

### 2. **Omissão de Categorias**

Imagine uma pesquisa de satisfação com respostas:

- Excelente
- Bom
- Regular
- Ruim
- Péssimo

Agora veja esta tabela publicada:

| Resposta | Frequência |
|----------|------------|
| Excelente | 150       |
| Bom       | 220       |
| Regular   | 130       |

Cadê as respostas negativas? Foram **omitidas**. Isso altera completamente a percepção do público.

!!! danger "Perigo"
    Ocultar dados negativos, mesmo que estejam em menor número, é uma forma de **viés intencional**. A análise só é confiável com a **tabela completa**.

---

### 3. **Categorias Sobrepostas ou Ambíguas**

| Idade (anos) | Frequência |
|--------------|------------|
| 0–18         | 120        |
| 18–30        | 140        |
| 30–45        | 100        |

Um usuário com **18 anos** entra em qual faixa? Em ambas? Nenhuma?

!!! warning "Atenção"
    Classes sobrepostas geram **ambiguidade** e podem duplicar contagens. Use intervalos **sem interseção**, por exemplo:  
    - 0 ⟼ 18  
    - 18 ⟼ 30  
    - 30 ⟼ 45  

---

## Armadilhas com Representações Gráficas

### 1. **Eixo Y Cortado para Exagerar Diferenças**

Compare os dois gráficos abaixo com os mesmos dados:

| Plataforma | Usuários ativos |
|------------|-----------------|
| A          | 2000            |
| B          | 2200            |

**Gráfico A (Eixo Y inicia em 0):** As barras têm alturas parecidas.  
**Gráfico B (Eixo Y inicia em 1900):** A barra da Plataforma B parece o dobro da outra!

### Gráfico A: Eixo Y normal
<canvas id="eixoYCheio" width="400" height="200"></canvas>

### Gráfico B: Eixo Y cortado (enganoso)
<canvas id="eixoYCortado" width="400" height="200"></canvas>

!!! danger "Perigo"
    Cortar o eixo Y **não é errado em si**, mas pode ser usado para **amplificar artificialmente** diferenças pequenas.

---

### 2. **Uso Indevido de Gráfico de Pizza**

Você tem os seguintes dados:

| Preferência | Porcentagem |
|-------------|-------------|
| A           | 48%         |
| B           | 44%         |
| C           | 5%          |

No gráfico de pizza, A e B parecem idênticos.  
Além disso, **pequenas diferenças** são difíceis de perceber em setores curvos.

### Pizza: Preferências muito próximas
<div style="width:450px;max-height=200px; margin: auto">
<canvas id="pizzaEnganosa" width="400" height="200"></canvas>
</div>

### Barras: Preferências mais legíveis
<canvas id="barrasClaridade" width="400" height="200"></canvas>

!!! warning "Atenção"
    Gráficos de pizza **não funcionam bem** quando há **muitas categorias** ou **valores muito próximos entre si**. Nesse caso, **gráficos de barras** são mais claros.

---

### 3. **Gráfico de Barras para Dados Contínuos**

Tempo de espera (em minutos):

| Intervalo | Frequência |
|-----------|------------|
| 0–10      | 30         |
| 10–20     | 50         |
| 20–30     | 70         |

Se você usar **gráfico de barras com espaços entre as colunas**, transmite a ideia de que os valores são **discretos** — quando na verdade são **intervalares**.

### Gráfico de Barras (inadequado para dados contínuos)
<canvas id="barrasErradas" width="400" height="200"></canvas>

### Histograma (adequado para dados contínuos)
<canvas id="histogramaCorreto" width="400" height="200"></canvas>

!!! danger "Perigo"
    Para dados quantitativos contínuos agrupados, o gráfico correto é o **histograma**, com **barras coladas**. Usar gráfico de barras aqui **quebra a lógica dos dados**.

---

## Retomando o Problema Inicial

A empresa que afirmou ter crescido 200% omitiu que passou de **5 para 15 acessos por dia**.  
A plataforma que parecia dominante no gráfico apenas **manipulou o eixo Y**.

Ambas usaram **tabelas e gráficos tecnicamente corretos**, mas apresentados de forma **enganosa**.  
Você, agora, sabe identificar essas armadilhas e evitar cair nelas.

---

## Síntese

- **Tabelas de frequência** podem distorcer a percepção quando:
  - Agrupam intervalos com larguras desiguais sem correção.
  - Omitem categorias negativas ou ambíguas.
  - Usam classes sobrepostas.
- **Gráficos** podem enganar ao:
  - Cortar eixos de forma tendenciosa.
  - Usar tipos inadequados para os dados.
  - Omitir proporções ou enganar visualmente com cores e escalas.

!!! tip "Dica"
    Sempre questione: **o gráfico ou tabela mostra a verdade dos dados, ou apenas uma versão conveniente?**

---

<!-- Hack para carregar os gráficos após a página 
    Tentei várias outras alternativas sem sucesso !-->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="../../../../assets/javascripts/erros_comuns_e_armadilhas.js"></script>


