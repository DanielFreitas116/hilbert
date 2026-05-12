import { useState } from "react";

const navItems = [
  { label: "Hilbert", href: "#hilbert" },
  { label: "Espaço", href: "#espaco" },
  { label: "Prova", href: "#prova" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Exercício", href: "#exercicio" },
  { label: "Bibliografia", href: "#bibliografia" }
];

const hilbertMoments = [
  {
    year: "1862",
    title: "Nascimento em Königsberg",
    text:
      "David Hilbert nasceu a 23 de Janeiro de 1862, na Prússia Oriental. O seu percurso viria a marcar profundamente a álgebra, a geometria, a análise e os fundamentos da matemática."
  },
  {
    year: "1899",
    title: "Grundlagen der Geometrie",
    text:
      "Reformula os fundamentos da geometria com um sistema axiomático rigoroso. Esta obra tornou-se um modelo de clareza lógica e de estrutura formal."
  },
  {
    year: "1900",
    title: "Os 23 problemas de Hilbert",
    text:
      "Na Exposição de Paris, Hilbert apresenta uma lista de problemas que orientaria grande parte da investigação matemática do século XX."
  },
  {
    year: "1906-1912",
    title: "Da teoria integral ao quadro abstracto",
    text:
      "O estudo de equações integrais, séries ortogonais e formas quadráticas conduz ao ambiente conceptual que mais tarde receberá o nome de espaço de Hilbert."
  },
  {
    year: "1943",
    title: "Legado duradouro",
    text:
      "Hilbert faleceu em Göttingen a 14 de Fevereiro de 1943. A sua influência permanece visível em áreas tão diversas como a mecânica quântica, as EDP e a aprendizagem automática."
  }
];

const foundations = [
  {
    title: "Espaço vectorial",
    text:
      "Um espaço de Hilbert começa por ser um espaço vectorial real ou complexo. Os seus elementos podem ser vectores geométricos, sequências, funções ou sinais."
  },
  {
    title: "Produto interno",
    text:
      "O produto interno ⟨x, y⟩ mede alinhamento, comprimento e ortogonalidade. A norma associada é dada por ||x|| = sqrt(⟨x, x⟩)."
  },
  {
    title: "Completeza",
    text:
      "A propriedade decisiva é a completeza: toda a sucessão de Cauchy converge para um elemento do próprio espaço. Sem esta condição temos apenas um pré-Hilbert."
  }
];

const examples = [
  {
    name: "R^n ou C^n",
    formula: "⟨x, y⟩ = Σ x_k y_k  ou  Σ x_k conjugado(y_k)",
    text:
      "É o modelo finito mais imediato. A geometria euclidiana clássica já é um caso particular da teoria."
  },
  {
    name: "ℓ²",
    formula: "ℓ² = {x = (x_n) : Σ |x_n|² < +∞}",
    text:
      "É o espaço das sucessões quadrado-somáveis. Surge naturalmente em séries de Fourier, processamento de sinais e análise funcional."
  },
  {
    name: "L²(a, b)",
    formula: "⟨f, g⟩ = ∫ f(x) conjugado(g(x)) dx",
    text:
      "É o espaço das funções quadrado-integráveis. Aqui a igualdade entende-se quase em todo o lado, o que reflecte a linguagem moderna da análise."
  }
];

const theoremSteps = [
  {
    title: "Enunciado",
    text:
      "Se H é um espaço de Hilbert e M é um subespaço linear fechado de H, então para qualquer x em H existe um único elemento p em M tal que ||x - p|| é mínima."
  },
  {
    title: "Ideia da existência",
    text:
      "Escolhe-se uma sucessão minimizante (p_n) em M. A identidade do paralelogramo mostra que (p_n) é de Cauchy. Como M é fechado e H é completo, (p_n) converge para algum p em M."
  },
  {
    title: "Condição de ortogonalidade",
    text:
      "O minimizador verifica x - p ortogonal a todo o subespaço M. Esta condição não é apenas necessária: também é suficiente para garantir a minimalidade."
  },
  {
    title: "Unicidade",
    text:
      "Se p e q fossem ambos minimizadores, então x - p e x - q seriam ortogonais a M. A diferença p - q pertenceria a M e seria simultaneamente ortogonal a M, logo teria norma nula."
  }
];

const applications = [
  {
    field: "Mecânica quântica",
    text:
      "Os estados de um sistema quântico são modelados por vectores de um espaço de Hilbert complexo. Observáveis aparecem como operadores e a ortogonalidade traduz estados distinguíveis."
  },
  {
    field: "Séries de Fourier",
    text:
      "Em L², funções podem ser desenvolvidas em bases ortonormais. A projecção ortogonal explica porque truncar uma série de Fourier produz a melhor aproximação quadrática."
  },
  {
    field: "Equações diferenciais parciais",
    text:
      "Métodos fracos, formulações variacionais e técnicas espectrais vivem naturalmente em espaços de Hilbert, sobretudo quando se trabalha com energia e coercividade."
  },
  {
    field: "Aprendizagem automática",
    text:
      "Em métodos de kernel, os dados são enviados para um espaço de Hilbert de dimensão possivelmente infinita, onde separação e regressão podem tornar-se mais simples."
  }
];

const bibliography = [
  {
    kind: "Obras de David Hilbert",
    items: [
      "Hilbert, D. (1899). Grundlagen der Geometrie.",
      "Hilbert, D. (1900). Mathematical Problems.",
      "Hilbert, D. (1904-1910). Grundzüge einer allgemeinen Theorie der linearen Integralgleichungen."
    ]
  },
  {
    kind: "Textos clássicos sobre espaços de Hilbert",
    items: [
      "Riesz, F. e Sz.-Nagy, B. Functional Analysis.",
      "Akhiezer, N. I. e Glazman, I. M. Theory of Linear Operators in Hilbert Space.",
      "Kreyszig, E. Introductory Functional Analysis with Applications."
    ]
  },
  {
    kind: "Referências de apoio moderno",
    items: [
      "Conway, J. B. A Course in Functional Analysis.",
      "Debnath, L. e Mikusiński, P. Introduction to Hilbert Spaces with Applications.",
      "Reed, M. e Simon, B. Methods of Modern Mathematical Physics, Vol. I."
    ]
  }
];

const exerciseQuestions = [
  {
    prompt: "Qual das seguintes estruturas é um espaço de Hilbert?",
    options: [
      "C[0,1] com a norma ||f||∞, sem produto interno especificado",
      "ℓ² com o produto interno Σ x_n conjugado(y_n)",
      "O conjunto das sucessões finitas com a métrica discreta"
    ],
    answer: 1,
    explanation:
      "ℓ² é completo e possui um produto interno natural. Já C[0,1] com a norma do supremo é Banach, mas essa norma não surge do produto interno usual."
  },
  {
    prompt: "Porque é que a completeza é essencial na definição?",
    options: [
      "Porque garante existência de limites internos para sucessões de Cauchy",
      "Porque obriga todos os vectores a serem ortogonais",
      "Porque elimina a necessidade de produto interno"
    ],
    answer: 0,
    explanation:
      "A completeza impede que processos de aproximação saiam do espaço. É isso que permite demonstrar teoremas como o da projecção ortogonal."
  },
  {
    prompt: "Em L²[-π, π], o que representa a projecção ortogonal sobre o subespaço gerado por 1, cos(x), sin(x)?",
    options: [
      "A melhor aproximação quadrática por uma combinação trigonométrica de grau 1",
      "A derivada fraca da função",
      "Um prolongamento contínuo para C²"
    ],
    answer: 0,
    explanation:
      "Projectar ortogonalmente é escolher o elemento do subespaço que minimiza o erro em norma L². É a essência das aproximações por Fourier."
  }
];

function App() {
  const [openStep, setOpenStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const score = exerciseQuestions.reduce((total, question, index) => {
    return total + (selectedAnswers[index] === question.answer ? 1 : 0);
  }, 0);

  function selectAnswer(questionIndex, optionIndex) {
    setSelectedAnswers((current) => ({
      ...current,
      [questionIndex]: optionIndex
    }));
  }

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero__orb hero__orb--left" />
        <div className="hero__orb hero__orb--right" />
        <nav className="nav">
          <a className="nav__brand" href="#top">
            Hilbert
          </a>
          <div className="nav__links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero__content" id="top">
          <div className="hero__eyebrow">Homenagem matemática e website interactivo</div>
          <h1>
            David Hilbert e a arquitectura teórica dos
            <span> espaços de Hilbert</span>
          </h1>
          <p className="hero__lead">
            Este website apresenta a figura de David Hilbert e explica, com
            linguagem clara mas rigorosa, a teoria matemática dos espaços de
            Hilbert: definição, exemplos, teoremas centrais, aplicações e uma
            componente prática pensada para consolidar a compreensão.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#espaco">
              Começar pela teoria
            </a>
            <a className="button button--ghost" href="#exercicio">
              Ir para o exercício
            </a>
          </div>

          <div className="hero__stats">
            <article>
              <strong>1 ideia central</strong>
              <span>produto interno + completeza</span>
            </article>
            <article>
              <strong>3 exemplos-base</strong>
              <span>R^n, ℓ² e L²</span>
            </article>
            <article>
              <strong>4 áreas-chave</strong>
              <span>física, Fourier, EDP e kernels</span>
            </article>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section" id="hilbert">
          <div className="section__heading">
            <span className="section__tag">Biografia e contexto</span>
            <h2>David Hilbert: o matemático da estrutura</h2>
            <p>
              Hilbert não baptizou sozinho os espaços que hoje levam o seu
              nome, mas o seu trabalho em equações integrais, operadores e
              métodos abstractos foi decisivo para o seu nascimento. Falar de
              espaços de Hilbert é, portanto, falar de uma visão moderna da
              matemática: rigor, axiomatização e poder unificador.
            </p>
          </div>

          <div className="timeline">
            {hilbertMoments.map((moment) => (
              <article className="timeline__item" key={moment.year + moment.title}>
                <div className="timeline__year">{moment.year}</div>
                <div>
                  <h3>{moment.title}</h3>
                  <p>{moment.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="espaco">
          <div className="section__heading">
            <span className="section__tag">Definição e intuição</span>
            <h2>O que é, afinal, um espaço de Hilbert?</h2>
            <p>
              Um espaço de Hilbert é um espaço vectorial munido de um produto
              interno e completo para a norma induzida. Esta frase, apesar de
              compacta, contém toda uma geometria: medir comprimentos, ângulos,
              projecções e convergência num contexto que pode ser infinito
              dimensional.
            </p>
          </div>

          <div className="cards cards--three">
            {foundations.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="formula-panel">
            <div>
              <span className="formula-panel__label">Definição sintética</span>
              <h3>H é um espaço de Hilbert se:</h3>
            </div>
            <div className="formula-block">
              <code>1. H é um espaço vectorial real ou complexo</code>
              <code>2. Existe um produto interno ⟨·, ·⟩ em H</code>
              <code>3. A norma ||x|| = sqrt(⟨x, x⟩) torna H completo</code>
            </div>
          </div>

          <div className="examples-grid">
            {examples.map((example) => (
              <article className="example" key={example.name}>
                <h3>{example.name}</h3>
                <code>{example.formula}</code>
                <p>{example.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--accent" id="prova">
          <div className="section__heading">
            <span className="section__tag">Aplicação matemática e prova</span>
            <h2>O teorema da projecção ortogonal</h2>
            <p>
              Entre os resultados estruturantes da teoria, este é um dos mais
              importantes. Ele garante a existência da melhor aproximação de um
              vector por elementos de um subespaço fechado, o que está na base
              da análise espectral, das aproximações de Fourier e dos métodos
              variacionais.
            </p>
          </div>

          <div className="projection-layout">
            <article className="theorem-box">
              <h3>Formulação</h3>
              <p>
                Dado <strong>x ∈ H</strong> e um subespaço fechado{" "}
                <strong>M ⊂ H</strong>, existe um único{" "}
                <strong>p ∈ M</strong> tal que
              </p>
              <code>{"||x - p|| = inf{||x - m|| : m ∈ M}."}</code>
              <p>
                Além disso, o erro <strong>x - p</strong> é ortogonal a todo o
                subespaço <strong>M</strong>.
              </p>
            </article>

            <div className="accordion">
              {theoremSteps.map((step, index) => (
                <article
                  className={`accordion__item ${
                    openStep === index ? "is-open" : ""
                  }`}
                  key={step.title}
                >
                  <button
                    className="accordion__trigger"
                    onClick={() => setOpenStep(index)}
                    type="button"
                  >
                    <span>{step.title}</span>
                    <span>{openStep === index ? "−" : "+"}</span>
                  </button>
                  <div className="accordion__content">
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="proof-note">
            <h3>Leitura conceptual da prova</h3>
            <p>
              O ponto subtil está em passar de uma aproximação cada vez melhor
              para um verdadeiro minimizador. É precisamente aí que a
              completeza intervém. Sem ela, a sucessão minimizante poderia
              convergir para fora do espaço, destruindo o argumento.
            </p>
          </div>
        </section>

        <section className="section" id="aplicacoes">
          <div className="section__heading">
            <span className="section__tag">Teoria em acção</span>
            <h2>Onde aparecem os espaços de Hilbert?</h2>
            <p>
              O valor desta teoria está na sua capacidade de unificar
              problemas. Estruturas muito distintas podem ser tratadas com a
              mesma linguagem: ortogonalidade, projecção, base ortonormal e
              operadores lineares contínuos.
            </p>
          </div>

          <div className="cards cards--two">
            {applications.map((application) => (
              <article className="card card--application" key={application.field}>
                <h3>{application.field}</h3>
                <p>{application.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="exercicio">
          <div className="section__heading">
            <span className="section__tag">Vertente prática</span>
            <h2>Exercício interactivo</h2>
            <p>
              Responde às questões seguintes. O objectivo não é apenas testar
              memória, mas verificar se a lógica da teoria ficou clara: que
              espaços são relevantes, porque a completeza importa e como surge a
              noção de melhor aproximação.
            </p>
          </div>

          <div className="exercise-score">
            <strong>
              Pontuação actual: {score}/{exerciseQuestions.length}
            </strong>
            <span>
              Cada resposta mostra imediatamente a interpretação matemática.
            </span>
          </div>

          <div className="exercise-list">
            {exerciseQuestions.map((question, questionIndex) => {
              const selected = selectedAnswers[questionIndex];
              const hasAnswered = selected !== undefined;

              return (
                <article className="exercise-card" key={question.prompt}>
                  <h3>
                    {questionIndex + 1}. {question.prompt}
                  </h3>
                  <div className="options">
                    {question.options.map((option, optionIndex) => {
                      const isSelected = selected === optionIndex;
                      const isCorrect = question.answer === optionIndex;
                      const className = [
                        "option",
                        isSelected ? "is-selected" : "",
                        hasAnswered && isCorrect ? "is-correct" : "",
                        hasAnswered && isSelected && !isCorrect ? "is-wrong" : ""
                      ]
                        .filter(Boolean)
                        .join(" ");

                      return (
                        <button
                          className={className}
                          key={option}
                          onClick={() => selectAnswer(questionIndex, optionIndex)}
                          type="button"
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {hasAnswered ? (
                    <p className="exercise-card__feedback">
                      {question.explanation}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section" id="bibliografia">
          <div className="section__heading">
            <span className="section__tag">Bibliografia</span>
            <h2>Referências para aprofundamento</h2>
            <p>
              Esta selecção combina obras do próprio Hilbert, textos clássicos
              de análise funcional e referências modernas adequadas a estudo
              universitário.
            </p>
          </div>

          <div className="bibliography">
            {bibliography.map((block) => (
              <article className="bibliography__block" key={block.kind}>
                <h3>{block.kind}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
