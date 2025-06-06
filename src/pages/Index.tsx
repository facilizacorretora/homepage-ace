import React from 'react';

const Index = () => {
  return (
    <div className="homepage-container">
      {/* Estilos CSS embutidos */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background-color: #0A0F2C;
          color: #FFFFFF;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .homepage-container {
          width: 100%;
          min-height: 100vh;
          background-color: #0A0F2C;
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 15, 44, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(232, 178, 109, 0.1);
          padding: 1rem 0;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo img {
          height: 70px;
          width: auto;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-menu a {
          color: #FFFFFF;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-menu a:hover {
          color: #E8B26D;
        }

        /* Hero Section */
        .hero {
          padding: 120px 0 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background-color: #0A0F2C;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
        }

        .hero-text p {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #E8B26D, #D4A055);
          color: #0A0F2C;
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(232, 178, 109, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(232, 178, 109, 0.4);
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .mentor-photo {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #E8B26D;
          box-shadow: 0 10px 40px rgba(232, 178, 109, 0.2);
        }

        /* Section styling */
        .section {
          padding: 100px 0;
          background-color: #0A0F2C;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 4rem;
          color: #E8B26D;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(135deg, #E8B26D, #D4A055);
          border-radius: 2px;
        }

        /* Challenges Section */
        .challenges-section {
          background-color: #0A0F2C;
          position: relative;
        }

        .challenges-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(232, 178, 109, 0.03), rgba(232, 178, 109, 0.01));
          pointer-events: none;
        }

        .challenges-intro {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .challenges-intro h2 {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #E8B26D;
        }

        .challenges-intro p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
          position: relative;
          z-index: 1;
        }

        .challenge-card {
          background: rgba(255, 255, 255, 0.08);
          padding: 3rem 2.5rem;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(232, 178, 109, 0.15);
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .challenge-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(232, 178, 109, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .challenge-card:hover::before {
          opacity: 1;
        }

        .challenge-card:hover {
          transform: translateY(-10px);
          border-color: rgba(232, 178, 109, 0.3);
          box-shadow: 0 20px 40px rgba(232, 178, 109, 0.15);
        }

        .challenge-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(232, 178, 109, 0.2), rgba(232, 178, 109, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          font-size: 1.8rem;
          color: #E8B26D;
          position: relative;
          z-index: 2;
        }

        .challenge-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.4;
          position: relative;
          z-index: 2;
        }

        /* Differentials Section */
        .differentials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .differential-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(232, 178, 109, 0.2);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
          position: relative;
        }

        .differential-card:hover {
          transform: translateY(-5px);
        }

        .differential-card::before {
          content: "✓";
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #E8B26D;
          color: #0A0F2C;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .differential-card h3 {
          color: #E8B26D;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        /* Mentor Section */
        .mentor-section {
          background-color: #0A0F2C;
        }

        .mentor-content {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 3rem;
          align-items: center;
        }

        .mentor-image img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(232, 178, 109, 0.2);
        }

        .mentor-info h3 {
          color: #E8B26D;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .mentor-info p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Final CTA Section */
        .final-cta {
          background-color: #0A0F2C;
          text-align: center;
        }

        .final-cta h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #E8B26D;
        }

        .final-cta p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Footer */
        .footer {
          background-color: #0A0F2C;
          text-align: center;
          padding: 2rem 0;
          border-top: 1px solid rgba(232, 178, 109, 0.1);
        }

        .footer p {
          color: rgba(255, 255, 255, 0.6);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .logo img {
            height: 55px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .mentor-photo {
            width: 280px;
            height: 280px;
          }

          .challenges-grid,
          .differentials-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .challenge-card {
            padding: 2.5rem 2rem;
          }

          .challenges-intro h2,
          .section-title {
            font-size: 2.2rem;
          }

          .mentor-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .final-cta h2 {
            font-size: 2.2rem;
          }

          .header-content {
            padding: 0 1rem;
          }

          .container {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 2rem;
          }

          .mentor-photo {
            width: 240px;
            height: 240px;
          }

          .challenge-card,
          .differential-card {
            padding: 2rem 1.5rem;
          }

          .challenges-intro h2 {
            font-size: 2rem;
          }

          .challenge-card h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="https://academiacorretorelite.com.br/wp-content/uploads/2025/05/Sem-fundo.png" alt="Academia do Corretor de Elite" />
          </div>
          <nav>
            <ul className="nav-menu">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#vantagens">Vantagens</a></li>
              <li><a href="#mentor">Sobre o Mentor</a></li>
              <li><a href="#inscricao">Inscrição</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Domine o Método Validado para Faturar R$10K+ Todo Mês com Previsibilidade e Segurança</h1>
            <p>Descubra como o Método Elite pode transformar sua rotina como corretor, mesmo começando do zero.</p>
            <a href="#inscricao" className="cta-button">Reservar Minha Vaga Agora</a>
          </div>
          <div className="hero-image">
            <img src="https://academiacorretorelite.com.br/wp-content/uploads/2025/05/Antonio-neto-2.png" alt="Antonio Neto - Mentor" className="mentor-photo" />
          </div>
        </div>
      </section>

      {/* Challenges Section - Melhorada */}
      <section className="section challenges-section">
        <div className="container">
          <div className="challenges-intro">
            <h2>Você enfrenta estes desafios?</h2>
            <p>Se você é corretor de seguros e está enfrentando essas dificuldades, saiba que você não está sozinho. O Método Elite foi criado para resolver exatamente esses problemas.</p>
          </div>
          <div className="challenges-grid">
            <div className="challenge-card">
              <div className="challenge-icon">⚠️</div>
              <h3>Dificuldade em atrair clientes qualificados</h3>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon">😰</div>
              <h3>Insegurança na hora de vender</h3>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon">📊</div>
              <h3>Rotina desorganizada e sem planejamento</h3>
            </div>
            <div className="challenge-card">
              <div className="challenge-icon">💸</div>
              <h3>Baixo faturamento e falta de previsibilidade</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="vantagens" className="section">
        <div className="container">
          <h2 className="section-title">Por Que o Método Elite é Diferente?</h2>
          <div className="differentials-grid">
            <div className="differential-card">
              <h3>Método Validado</h3>
              <p>Processos testados e aprovados por centenas de corretores</p>
            </div>
            <div className="differential-card">
              <h3>Acesso Imediato</h3>
              <p>Comece a aplicar as estratégias hoje mesmo</p>
            </div>
            <div className="differential-card">
              <h3>Garantia de 7 Dias</h3>
              <p>Satisfação garantida ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section id="mentor" className="section mentor-section">
        <div className="container">
          <h2 className="section-title">Conheça seu Mentor</h2>
          <div className="mentor-content">
            <div className="mentor-image">
              <img src="https://academiacorretorelite.com.br/wp-content/uploads/2025/05/Antonio-neto-2.png" alt="Antonio Neto" />
            </div>
            <div className="mentor-info">
              <h3>Antonio Neto</h3>
              <p>Com mais de 20 anos no mercado, gestor de grandes operadoras, proprietário de assessorias e corretora, Antonio Neto criou o Método Elite para ajudar corretores a escalarem seus resultados com um processo validado na prática e replicável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="inscricao" className="section final-cta">
        <div className="container">
          <h2>Transforme Sua Carreira Hoje Mesmo</h2>
          <p>Não perca mais tempo com métodos que não funcionam. Junte-se aos corretores que já estão faturando R$10K+ mensais com o Método Elite.</p>
          <a href="#" className="cta-button">Quero Me Inscrever no Método Elite</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Academia Corretor de Elite. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
