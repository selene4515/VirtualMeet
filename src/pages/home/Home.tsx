import styled from "styled-components";
import HomeTopBg from "./HomeTopBg";

const Home = () => {
  return (
    <>
      <Main color={mainBgColor}>
        <Container>
          <HomeTopBg />
        </Container>
      </Main>
      <Main>
        <Container>2</Container>
      </Main>
      <Main color="#7FFF6A">
        <Container>3</Container>
      </Main>
      <Main>
        <Container>4</Container>
      </Main>
    </>
  );
};

const mainBgColor: string =
  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%),linear-gradient(90deg, #4ac8ff 0%, #7fff6a 100%)";
export const Main = styled.div`
  background: ${(props) => props.color || "#000000"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Home;
