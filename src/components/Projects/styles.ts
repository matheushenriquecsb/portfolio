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
  padding: 0 16px;
`;

export const Title = styled.h2`
  margin: 1.4375rem 0;
  font-size: 3rem;
}
`;

export const Description = styled.span`
font-weight: 300;
  font-size: 1rem;
  margin: 1rem;
  max-width: 45rem;
}
`;

export const Wrapper = styled.div`
 margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 65rem;

  h4 {
    color: white;
    font-weight: 200;
  }

   h3 {
    color: yellow;
    }
}
`;

export const Image = styled.img`
 object-fit: cover;
  height: 12rem;
  margin: 1.5rem;
}

 @media screen and (max-width: 585px) { 
     height: 48vw; 
  }
`;

export const Button = styled.a`
  button {
    padding: 0.5rem 2.5rem;
    border: none;
    border-radius: 2rem;
    background: white;
    font-size: 1rem;
    margin: 1em;
    cursor: pointer;
  }
`;
