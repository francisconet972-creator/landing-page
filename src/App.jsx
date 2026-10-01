import "./App.css";

function App() {
  return (
    <>
      {/* CABEÇALHO */}
      <header>
        <div className="container">
          <div className="logo">
            <span>&lt;/&gt;</span>

            <div>
              <strong>SENAI</strong>
              <small>Desenvolvimento de Sistemas</small>
            </div>
          </div>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#aprendizados">Aprendizados</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#mercado">Mercado</a>
            <a href="#projetos">Projetos</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <span className="tag">CURSO TÉCNICO SENAI</span>

              <h1>
                Transforme ideias em <span>sistemas.</span>
              </h1>

              <p>
                Aprenda a desenvolver soluções, criar aplicações e dominar
                tecnologias que fazem parte do mundo da programação.
              </p>

              <div className="buttons">
                <a href="#sobre" className="button primary">
                  Conheça o curso
                </a>

                <a href="#tecnologias" className="button secondary">
                  Ver tecnologias
                </a>
              </div>
            </div>

            <div className="hero-code">
              <div className="code-window">
                <div className="code-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code">
                  <p>
                    <span className="purple">const</span> futuro ={" "}
                    <span className="green">"tecnologia"</span>;
                  </p>

                  <p>
                    <span className="purple">function</span> desenvolver() {"{"}
                  </p>

                  <p className="indent">
                    <span className="purple">return</span>{" "}
                    <span className="green">
                      "Transforme suas ideias";
                    </span>
                  </p>

                  <p>{"}"}</p>

                  <p>
                    console.log(
                    <span className="green">
                      "Seu futuro começa aqui!"
                    </span>
                    );
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section">
          <div className="container">
            <div className="section-title">
              <span className="tag">SOBRE O CURSO</span>

              <h2>Aprenda a criar o futuro.</h2>

              <p>
                O curso Técnico em Desenvolvimento de Sistemas prepara você
                para compreender, desenvolver e manter sistemas e aplicações.
              </p>
            </div>

            <div className="cards">
              <div className="card">
                <div className="icon">💻</div>

                <h3>O que é Desenvolvimento de Sistemas?</h3>

                <p>
                  É a área responsável por criar soluções digitais capazes de
                  resolver problemas e facilitar atividades do dia a dia.
                </p>
              </div>

              <div className="card">
                <div className="icon">🎯</div>

                <h3>Objetivo</h3>

                <p>
                  Desenvolver conhecimentos técnicos para planejar, programar,
                  testar e manter sistemas de software.
                </p>
              </div>

              <div className="card">
                <div className="icon">🚀</div>

                <h3>Na prática</h3>

                <p>
                  Você coloca seus conhecimentos em prática através de
                  exercícios e projetos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APRENDIZADOS */}
        <section id="aprendizados" className="section learning">
          <div className="container">
            <div className="section-title">
              <span className="tag">O QUE VOCÊ APRENDE</span>

              <h2>Conhecimentos para construir soluções.</h2>

              <p>
                Durante o curso você desenvolve conhecimentos em diferentes
                áreas da tecnologia.
              </p>
            </div>

            <div className="cards">
              <div className="card">
                <span className="number">01</span>
                <h3>Lógica de programação</h3>
                <p>
                  Aprenda a pensar de forma estruturada para resolver
                  problemas.
                </p>
              </div>

              <div className="card">
                <span className="number">02</span>
                <h3>Desenvolvimento Web</h3>
                <p>
                  Crie páginas e aplicações utilizando tecnologias modernas.
                </p>
              </div>

              <div className="card">
                <span className="number">03</span>
                <h3>Frontend</h3>
                <p>
                  Desenvolva interfaces interativas para os usuários.
                </p>
              </div>

              <div className="card">
                <span className="number">04</span>
                <h3>Backend</h3>
                <p>
                  Entenda servidores, regras de negócio e aplicações.
                </p>
              </div>

              <div className="card">
                <span className="number">05</span>
                <h3>Banco de dados</h3>
                <p>
                  Aprenda a armazenar e organizar informações.
                </p>
              </div>

              <div className="card">
                <span className="number">06</span>
                <h3>APIs</h3>
                <p>
                  Integre diferentes sistemas e aplicações.
                </p>
              </div>

              <div className="card">
                <span className="number">07</span>
                <h3>Aplicativos</h3>
                <p>
                  Conheça conceitos utilizados no desenvolvimento de
                  aplicações.
                </p>
              </div>

              <div className="card">
                <span className="number">08</span>
                <h3>Versionamento</h3>
                <p>
                  Utilize Git e GitHub para controlar seus projetos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section id="tecnologias" className="section">
          <div className="container">
            <div className="section-title">
              <span className="tag">TECNOLOGIAS</span>

              <h2>Ferramentas da jornada.</h2>

              <p>
                Conheça algumas tecnologias utilizadas no desenvolvimento de
                sistemas.
              </p>
            </div>

            <div className="technologies">
              <div className="tech">
                <strong>HTML</strong>
                <h3>HTML</h3>
                <p>Estrutura das páginas web.</p>
              </div>

              <div className="tech">
                <strong>CSS</strong>
                <h3>CSS</h3>
                <p>Estilização das interfaces.</p>
              </div>

              <div className="tech">
                <strong>JS</strong>
                <h3>JavaScript</h3>
                <p>Interatividade e lógica.</p>
              </div>

              <div className="tech">
                <strong>⚛</strong>
                <h3>React</h3>
                <p>Criação de interfaces modernas.</p>
              </div>

              <div className="tech">
                <strong>N</strong>
                <h3>Node.js</h3>
                <p>Aplicações no servidor.</p>
              </div>

              <div className="tech">
                <strong>SQL</strong>
                <h3>SQL</h3>
                <p>Manipulação de dados.</p>
              </div>

              <div className="tech">
                <strong>Git</strong>
                <h3>Git</h3>
                <p>Controle de versões.</p>
              </div>

              <div className="tech">
                <strong>GH</strong>
                <h3>GitHub</h3>
                <p>Hospedagem de projetos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ÁREAS DE ATUAÇÃO */}
        <section id="mercado" className="section market">
          <div className="container">
            <div className="section-title">
              <span className="tag">ÁREAS DE ATUAÇÃO</span>

              <h2>Onde seus conhecimentos podem levar você?</h2>

              <p>
                O conhecimento em desenvolvimento de sistemas pode ser
                aplicado em diferentes funções.
              </p>
            </div>

            <div className="career-list">
              <div className="career">
                <span>01</span>

                <div>
                  <h3>Desenvolvimento Frontend</h3>

                  <p>
                    Criação das interfaces que os usuários visualizam e
                    utilizam.
                  </p>
                </div>
              </div>

              <div className="career">
                <span>02</span>

                <div>
                  <h3>Desenvolvimento Backend</h3>

                  <p>
                    Construção da lógica e funcionalidades dos sistemas.
                  </p>
                </div>
              </div>

              <div className="career">
                <span>03</span>

                <div>
                  <h3>Desenvolvimento Full Stack</h3>

                  <p>
                    Trabalho envolvendo frontend e backend.
                  </p>
                </div>
              </div>

              <div className="career">
                <span>04</span>

                <div>
                  <h3>Banco de dados</h3>

                  <p>
                    Organização e gerenciamento de informações.
                  </p>
                </div>
              </div>

              <div className="career">
                <span>05</span>

                <div>
                  <h3>Suporte e manutenção</h3>

                  <p>
                    Manutenção e acompanhamento de sistemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="section">
          <div className="container">
            <div className="section-title">
              <span className="tag">PROJETOS</span>

              <h2>Coloque o conhecimento em prática.</h2>

              <p>
                Desenvolvedores transformam ideias em soluções reais.
              </p>
            </div>

            <div className="projects">
              <div className="project">
                <div className="project-image">CLIENTES</div>

                <div className="project-content">
                  <small>SISTEMA WEB</small>

                  <h3>Cadastro de clientes</h3>

                  <p>
                    Sistema para cadastrar e organizar informações de
                    clientes.
                  </p>
                </div>
              </div>

              <div className="project">
                <div className="project-image">ESTOQUE</div>

                <div className="project-content">
                  <small>GESTÃO</small>

                  <h3>Sistema de estoque</h3>

                  <p>
                    Aplicação para controlar produtos, entradas e saídas.
                  </p>
                </div>
              </div>

              <div className="project">
                <div className="project-image">AGENDA</div>

                <div className="project-content">
                  <small>APLICAÇÃO</small>

                  <h3>Sistema de agendamentos</h3>

                  <p>
                    Plataforma para organizar horários e agendamentos.
                  </p>
                </div>
              </div>

              <div className="project">
                <div className="project-image">LOJA</div>

                <div className="project-content">
                  <small>E-COMMERCE</small>

                  <h3>Loja virtual</h3>

                  <p>
                    Aplicação para apresentar produtos e realizar compras
                    online.
                  </p>
                </div>
              </div>

              <div className="project">
                <div className="project-image">DASHBOARD</div>

                <div className="project-content">
                  <small>ADMINISTRAÇÃO</small>

                  <h3>Dashboard administrativo</h3>

                  <p>
                    Painel para acompanhar dados e informações.
                  </p>
                </div>
              </div>

              <div className="project">
                <div className="project-image">TAREFAS</div>

                <div className="project-content">
                  <small>APP</small>

                  <h3>Aplicativo de tarefas</h3>

                  <p>
                    Aplicação para organizar tarefas e atividades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <span className="tag">SEU PRÓXIMO PASSO</span>

            <h2>
              Seu futuro na tecnologia pode começar aqui.
            </h2>

            <p>
              Conheça o curso Técnico em Desenvolvimento de Sistemas e
              comece a transformar suas ideias em soluções.
            </p>

            <a href="#inicio" className="button primary">
              Conheça o curso →
            </a>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer>
        <div className="container footer-content">
          <div>
            <div className="logo">
              <span>&lt;/&gt;</span>

              <div>
                <strong>SENAI</strong>
                <small>Desenvolvimento de Sistemas</small>
              </div>
            </div>

            <p>
              Formação para quem quer transformar ideias em tecnologia.
            </p>
          </div>

          <div>
            <h3>Navegação</h3>

            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#projetos">Projetos</a>
          </div>

          <div>
            <h3>Curso</h3>

            <a href="#aprendizados">Aprendizados</a>
            <a href="#mercado">Áreas de atuação</a>
            <a href="#projetos">Projetos</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 SENAI — Técnico em Desenvolvimento de Sistemas
          </p>

          <p>
            Desenvolvido por <strong>Seu Nome</strong>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;