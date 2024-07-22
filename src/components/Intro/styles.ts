import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 4rem);
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

export const IntroText = styled.div`
  height: 100%;
  padding: 2rem;
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 840px) {
    font-size: 10vw;
  }

  @media screen and (max-width: 440px) {
    font-size: 8vw;
  }
`;

export const ProfilePicture = styled.img`
  position: absolute;
  margin-top: 45px;
  top: 50px;
  right: 0;
  z-index: 0;
  object-fit: cover;
  height: 45vh;  

  @media screen and (max-width: 840px) { 
    display: none;
  } 
}
`;

export const IntroName = styled.span`
  font-size: 2.5rem;
  font-weight: 200;

  @media screen and (max-width: 840px) {
    font-size: 4.5vw;
  }

  @media screen and (max-width: 440px) {
    font-size: 4vw;
  }
`;

export const Name = styled.span`
  color: yellow;
`;

export const AboutMe = styled.p`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
`;

export const Resume = styled.button`
  background: white;
  margin: 1rem 0;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    margin: 30px 100px;
  }
`;
