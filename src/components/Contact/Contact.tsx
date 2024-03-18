import Alert from "@mui/material/Alert";
import { FormEvent, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import Stack from "@mui/material/Stack";
import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import "./contact.css";

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | string>("");
  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      console.error("FAILED...", error);
    }
  };

  return (
    <div>
      <section id="contact">
        <h1 className="contactTitle">Entre em Contato</h1>
        <span className="contactDesc">Por favor preencha os campos abaixo</span>
        <form className="contactForm" ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Seu Nome"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Seu Email"
            name="your_email"
          />
          <textarea
            name="message"
            rows={5}
            className="msg"
            placeholder="Digite uma mensagem"
          />
          <span className="messageStatus">
            {error && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  Ocorreu algum erro, tente novamente!
                </Alert>
              </Stack>
            )}
            {success && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="success">
                  Enviado com Sucesso
                </Alert>
              </Stack>
            )}
          </span>
          <button type="submit" value="send" className="submitBtn">
            Envie
          </button>
          <div className="links">
            <a
              href="https://linkedin.com/in/matheus-henrique-batista-120821/"
              target="_blank"
              className="link-container"
            >
              <img src={linkedin} className="link" alt="linkedin" />
              <span className="hover-text">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/matheus.henriquebc/"
              target="_blank"
              className="link-container"
            >
              <img src={instagram} className="link" alt="instagram" />
              <span className="hover-text">Instagram</span>
            </a>
            <a
              href="https://github.com/matheushenriquecsb"
              target="_blank"
              className="link-container"
            >
              <img src={github} className="link" alt="github" />
              <span className="hover-text">GitHub</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5571991910098"
              target="_blank"
              className="link-container"
            >
              <img src={whatsapp} className="link" alt="whatsapp" />
              <span className="hover-text">WhatsApp</span>
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
