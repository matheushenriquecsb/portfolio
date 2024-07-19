import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        navbarProjects: "Projetos",
        navbarContact: "Contato",
        navbarcontactUs: "Entre em contato",
        introHello: "Olá",
        intro: "Me chamo",
        introRole: "Desenvolvedor Fullstack",
        intro1: "+2 anos de experiência atuando com foco em NodeJS e ReactJS",
        intro2:
          "Atuei no desenvolvimento e manutenção de Restful APIs, e criação",
        intro3: "de interfaces modernas e interativas para usuários.",
        resume: "Curriculo",
        contactTitle: "Entre em contato",
        contactSubtitle: "Preencha os campos abaixo",
        contactError: "Ocorreu um erro. Por favor, tente novamente!",
        contactSucess: "Enviado com sucesso!",
        contactButton: "Enviar",
        placeholderName: "Insira seu nome",
        placeholderEmail: "Insira seu email",
        placeholderMessage: "Insira uma mensagem",
        projectsTitle: "Projetos",
        projectsButton: "Veja mais",
      },
    },
    en: {
      translation: {
        navbarProjects: "Projects",
        navbarContact: "Contact",
        navbarcontactUs: "Contact Me",
        introHello: "Hello",
        intro: "Im",
        introRole: "FullStack Developer",
        intro1:
          "+2 years of experience working with a focus on NodeJS and ReactJS",
        intro2:
          "I worked on the development and maintenance of Restful APIs, and creation",
        intro3: "of modern and interactive user interfaces.",
        resume: "Resume",
        contactTitle: "Contact Me",
        contactSubtitle: "Fill in the fields below",
        contactError: "An error has occurred. Please try again!",
        contactSucess: "Sent with success!",
        contactButton: "Send",
        placeholderName: "Your Name",
        placeholderEmail: "Your Email",
        placeholderMessage: "Insert Message",
        projectsTitle: "Projects",
        projectsButton: "See more",
      },
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
