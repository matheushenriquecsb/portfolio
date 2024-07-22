import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 160%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 3rem;
  font-weight: 600;
  padding-top: 1.875rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    align-items: left;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillsContainer = styled.div`
  margin: 1.5rem;
  width: 100%;
  max-width: 80%;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  background: rgb(50, 50, 50);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

export const Items = styled.div`
  h2 {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }

  img {
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 4rem;
  width: 80;
  margin-right: 2rem;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  padding: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;
