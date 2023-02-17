import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      <Container>
        <h1>Hoooooo</h1>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(90deg, #4ac8ff 0%, #7fff6a 100%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid red;
  width: 64rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;
