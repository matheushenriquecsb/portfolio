import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.nav`
  background: rgb(30, 30, 30);
  height: 80px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 3;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export const Menu = styled.div``;

export const MenuItem = styled(Link)`
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: yellow;
    padding-bottom: 6px;
    border-bottom: 3px solid yellow;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const Contact = styled.button`
  background-color: white;
  font-weight: 300;
  color: black;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  cursor: pointer;
  padding: 0 10px;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const ContactImg = styled.img`
  object-fit: cover;
  height: 25px;
  margin: 10px;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;
