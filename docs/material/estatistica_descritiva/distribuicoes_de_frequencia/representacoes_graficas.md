# Representações Gráficas: Quando os Dados Falam por Imagens

Você está em uma reunião com o time de produto de uma empresa de streaming, tentando explicar o comportamento dos usuários com base em duas análises recentes:

1. **Tempo médio de uso diário da plataforma**, em minutos.
2. **Gênero preferido de conteúdo assistido** (comédia, drama, documentário, etc.).

Você já tem as tabelas de frequência prontas. Mas há um problema: **ninguém presta atenção nelas**. Os olhares dispersos e as perguntas vagas revelam que os números, sozinhos, **não estão comunicando com clareza**.

É hora de deixar os dados falarem de forma mais poderosa: com **gráficos**.

---

## Por Que Representar Dados Visualmente?

Nossos olhos e cérebros são treinados para detectar padrões visuais muito mais rapidamente do que para decifrar tabelas. Um bom gráfico pode:

- Mostrar **distribuições** de forma intuitiva.
- Destacar **tendências, picos, assimetrias e lacunas** nos dados.
- Facilitar a **comunicação com públicos não técnicos**.

!!! info "Definição"
    Uma **representação gráfica** de uma tabela de frequência é uma visualização visual dos dados que mostra como as frequências se distribuem ao longo das categorias ou intervalos.

---

## Visualizando Dados Qualitativos

### Exemplo

Você tem a seguinte tabela com o gênero favorito de conteúdo:

| Gênero        | Frequência |
|---------------|------------|
| Comédia       | 350        |
| Drama         | 290        |
| Documentário  | 180        |
| Ação          | 120        |
| Terror        | 60         |

### Opções de Gráfico

- **Gráfico de Barras**: Ideal para comparar categorias. Cada barra representa uma categoria, com altura proporcional à frequência.

<canvas id="generoBarras"></canvas>

- **Gráfico de Pizza (ou Setores)**: Mostra as proporções de cada categoria em relação ao total — útil quando o foco está na **composição** do todo.

<div style="max-height: 500px; max-width: 500px; margin:auto;">
  <canvas id="generoPizza"></canvas>
</div>

!!! tip "Dica"
    Use gráfico de barras quando quiser comparar claramente as categorias. Use gráfico de pizza quando quiser **mostrar fatias** do total, especialmente com **poucas categorias** (até 5).

!!! warning "Atenção"
    Evite usar gráficos de pizza com muitas categorias — eles ficam ilegíveis e dificultam comparações.

---

## Visualizando Dados Quantitativos Discretos

### Exemplo

Número de dispositivos usados por conta:

| Nº Dispositivos | Frequência |
|------------------|------------|
| 1                | 120        |
| 2                | 280        |
| 3                | 250        |
| 4                | 90         |
| 5                | 60         |

### Gráfico Recomendado

- **Gráfico de Barras**: Também aqui, é eficaz. Cada barra representa um número específico de dispositivos.

<canvas id="dispositivosBarras"></canvas>


!!! question "Reflexão"
    Se a maioria das contas usa 2 ou 3 dispositivos, o que isso pode indicar sobre o perfil das famílias que assinam a plataforma?  
    **Resposta:** Que provavelmente há uso compartilhado entre poucos membros (casais ou pequenos grupos), o que pode influenciar na política de perfis e recomendações.

---

## Visualizando Dados Quantitativos Contínuos

### Exemplo

Tempo de uso diário da plataforma (dados agrupados):

| Intervalo (minutos) | Frequência |
|---------------------|------------|
| 0 ⟼ 30              | 40         |
| 30 ⟼ 60             | 110        |
| 60 ⟼ 90             | 220        |
| 90 ⟼ 120            | 80         |
| 120 ⟼ 150           | 30         |
| 150 ⟼ 180           | 20         |

### Opções de Gráfico

- **Histograma**: Parecido com o gráfico de barras, mas as barras são **contíguas** e representam **intervalos numéricos contínuos**. A largura das classes e a área das barras importam.

<canvas id="tempoHistograma"></canvas>

- **Polígono de Frequências**: Linha que conecta os pontos médios das classes, útil para comparar distribuições.

<canvas id="tempoPoligono"></canvas>

- **Ogiva (Curva de Frequência Acumulada)**: Representa a soma acumulada das frequências — ótima para entender percentuais acumulados e mediana.

<canvas id="tempoOgiva"></canvas>


!!! info "Dica Visual"
    O **histograma** revela rapidamente a concentração de valores. Se houver uma barra muito mais alta que as outras, sabemos onde está o “coração” da distribuição.

!!! danger "Perigo"
    Não use gráfico de barras para dados contínuos agrupados. Isso pode passar a impressão de que os dados são discretos, o que **distorce a análise**.

---

## Construindo um Gráfico: Etapas Essenciais

1. **Escolher o tipo de gráfico adequado** (conforme o tipo de variável).
2. **Eixos bem definidos**:
    * **Eixo X**: categorias (qualitativo), valores discretos ou intervalos (quantitativo).
    * **Eixo Y**: frequência absoluta ou relativa.
3. **Escala apropriada**: proporções coerentes ajudam na interpretação.
4. **Rótulos claros**: nome das categorias, valores nas barras, título do gráfico.
5. **Consistência visual**: cores, tamanhos e espaçamento padronizados.

!!! warning "Atenção"
    Nunca “forje” a escala para gerar uma impressão exagerada dos dados. Cortar o eixo Y para parecer que a diferença entre 100 e 110 é enorme é **antiético e manipulativo**.

---

## Retomando o Problema Inicial

Com as tabelas de frequência já feitas, você constrói:

- Um **gráfico de barras** para mostrar que a **comédia lidera** entre os gêneros preferidos.
- Um **histograma** para mostrar que a maioria dos usuários assiste à plataforma entre **60 e 90 minutos por dia**.

Agora, sua equipe entende os padrões **com um olhar rápido**. As decisões sobre conteúdos e notificações personalizadas são tomadas com confiança.

---

## Síntese

- Representações gráficas transformam tabelas em **insights visuais poderosos**.
- A escolha do gráfico depende do tipo de dado:
  - Qualitativo → barras, pizza.
  - Quantitativo discreto → barras.
  - Quantitativo contínuo → histograma, polígono, ogiva.
- Bons gráficos exigem **clareza, honestidade visual e foco na comunicação**.

---

## Materiais Complementares

- [Khan Academy: Análide de dados categóricos](https://pt.khanacademy.org/math/statistics-probability/analyzing-categorical-data)
- [Khan Academy: Exibição e comparação de dados quantitativos](https://pt.khanacademy.org/math/statistics-probability/displaying-describing-data)

---


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="../../../../assets/javascripts/representacoes_graficas.js"></script>


