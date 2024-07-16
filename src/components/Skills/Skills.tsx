import {
  assetsBackend,
  assetsDatabase,
  assetsFrontend,
} from "../../assets/icons/assets";
import {
  Container,
  SkillsContainer,
  Wrapper,
  Title,
  Items,
  ImageContainer,
  Overlay,
  Image,
} from "./styles";

const Skills = () => {
  return (
    <div>
      <Container id="skills">
        <Title>Tech Skills</Title>
        <SkillsContainer>
          <Wrapper>
            <Items>
              <h2>Frontend</h2>
              {assetsFrontend.map((img, index) => (
                <ImageContainer key={index}>
                  <Image src={img.src} alt={img.alt} />
                  <Overlay>{img.text}</Overlay>
                </ImageContainer>
              ))}
            </Items>
          </Wrapper>
          <Wrapper>
            <Items>
              <h2>Backend</h2>
              {assetsBackend.map((img, index) => (
                <ImageContainer key={index}>
                  <Image src={img.src} alt={img.alt} />
                  <Overlay>{img.text}</Overlay>
                </ImageContainer>
              ))}
            </Items>
          </Wrapper>
          <Wrapper>
            <Items>
              <h2>Database & Tools</h2>
              {assetsDatabase.map((img, index) => (
                <ImageContainer key={index}>
                  <Image src={img.src} alt={img.alt} />
                  <Overlay>{img.text}</Overlay>
                </ImageContainer>
              ))}
            </Items>
          </Wrapper>
        </SkillsContainer>
      </Container>
    </div>
  );
};

export default Skills;
