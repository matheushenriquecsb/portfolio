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
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

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
        <ContactTitle> {t("contactTitle")}</ContactTitle>
        <Subtitle> {t("contactSubtitle")}</Subtitle>
        <Form ref={formRef} onSubmit={sendEmail}>
          <Input
            type="text"
            placeholder={t("placeholderName")}
            name="your_name"
          />
          <Input
            type="email"
            placeholder={t("placeholderEmail")}
            name="your_email"
          />
          <Text name="message" rows={5} placeholder={t("placeholderMessage")} />
          <MessageStatus>
            {error && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  {t("contactError")}
                </Alert>
              </Stack>
            )}
            {success && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="success">
                  {t("contactSucess")}
                </Alert>
              </Stack>
            )}
          </MessageStatus>
          <ButtonSend type="submit" value="send">
            {t("contactButton")}
          </ButtonSend>
          <SocialMedia />
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
