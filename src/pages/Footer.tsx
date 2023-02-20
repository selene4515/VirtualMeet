import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Main>
        <Container>footer</Container>
      </Main>
    </>
  );
};

const Main = styled.div`
  background: ${(props) => props.color || "#000000"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid red;
  width: 1024px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default Footer;
