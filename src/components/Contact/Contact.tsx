import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { FormEvent, useRef, useState } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import {
  ButtonSend,
  ContactTitle,
  Container,
  Form,
  Input,
  MessageStatus,
  Subtitle,
  Text,
} from "./styles";

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    const messageTextarea = formRef.current?.querySelector(
      'textarea[name="message"]'
    ) as HTMLTextAreaElement;
    const message = messageTextarea.value.trim();

    if (!message) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current!,
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
      <Container id="contact">
        <ContactTitle>Entre em contato</ContactTitle>
        <Subtitle>Preencha os campos abaixo</Subtitle>
        <Form ref={formRef} onSubmit={sendEmail}>
          <Input type="text" placeholder="Insira Seu Nome" name="your_name" />
          <Input
            type="email"
            placeholder="Insira Seu Email"
            name="your_email"
          />
          <Text name="message" rows={5} placeholder="Escreva uma mensagem" />
          <MessageStatus>
            {error && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  Ocorreu um erro. Por favor, tente novamente!
                </Alert>
              </Stack>
            )}
            {success && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="success">
                  Enviado com sucesso!
                </Alert>
              </Stack>
            )}
          </MessageStatus>
          <ButtonSend type="submit" value="send">
            Enviar
          </ButtonSend>
          <SocialMedia />
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
