import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  min-height: calc(100vh - 4rem);
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ContactTitle = styled.h1`
  margin: 1rem 0;
  font-size: 3rem;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  font-weight: 300;
  padding: 16px;
`;

export const Form = styled.form`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 640px;
`;

export const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  max-width: 640px;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background: rgb(40, 40, 40);
`;

export const Text = styled.textarea`
  font-size: 1rem;
  width: 100%;
  max-width: 640px;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  background: rgb(40, 40, 40);
`;

export const MessageStatus = styled.span`
  align-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const PropertyRating = styled.div`
  display: flex;
  align-items: center;

  & > button {
    background-color: #003580;
    color: white;
    border: none;
    margin-right: 10px;
    margin-top: 5px;
    font-weight: bold;
  }

  & > span {
    font-size: 14px;
  }
`;

export const ButtonSend = styled.button`
  background: white;
  border: none;
  padding: 0.75rem 3.5rem;
  font-size: 0.9375rem;
  margin: 1.75rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;
