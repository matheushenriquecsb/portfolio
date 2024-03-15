import "./contact.css";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import github from "../../assets/icons/github.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <h1 className="contactTitle">Entre em Contato</h1>
        <span className="contactDesc">Por favor preencha os campos abaixo</span>
        <form className="contactForm" action="">
          <input type="text" className="name" placeholder="Seu Nome" />
          <input type="email" className="email" placeholder="Seu Email" />
          <textarea
            name="message"
            rows={5}
            className="msg"
            placeholder="Digite uma mensagem"
          />
          <button type="submit" value="send" className="submitBtn">
            Envie
          </button>
          <div className="links">
            <a
              href="https://linkedin.com/in/matheus-henrique-batista-120821/"
              target="_blank"
            >
              <img src={linkedin} className="link" />
            </a>
            <a href="https://instagram.com/matheus.henriquebc/" target="_blank">
              <img src={instagram} className="link" />
            </a>
            <a href="https://github.com/matheushenriquecsb" target="_blank">
              <img src={github} className="link" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5571991910098"
              target="_blank"
            >
              <img src={whatsapp} className="link" />
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
