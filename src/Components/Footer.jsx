import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contato</h3>
          <p>
            Email: <a href="mailto:aluno@estudante.sesisenai.org.br">aluno@estudante.sesisenai.org.br</a>
          </p>
          <p>Telefone: (48) 9999-0099</p>
        </div>
        <div className="social-icons">
          <h3>Siga-nos nas redes</h3>
          <ul>  {/* Using an unordered list for better accessibility */}
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">© 2024 Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
