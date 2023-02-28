import { Link } from "react-router-dom";
import styled from "styled-components";
import { Main } from "./home/Home";

const Footer = () => {
  return (
    <>
      <Main>
        <Container>
          <img
            src={require("../assets/footer/footerLogo.svg").default}
            alt="fluentt"
          />
          <TextArea>
            <div>
              사업자 등록번호 : 5168802097 | 대표자 : 전예찬 (Jeon ye chan)
            </div>
            <div>
              서울특별시 강남구 역삼로 217 합동빌딩, 6층 | 전화번호 :
              010-6602-1795 | 메일 : fluentt88@fluentt.ai
            </div>
            <div>
              <Link
                to="https://www.notion.so/cf8b622e5b5843159e6f945b9dcc6207"
                target="_blank"
              >
                Terms of Service
              </Link>
              &nbsp;|&nbsp;
              <Link
                to="https://www.notion.so/fe99d3eb995f4e71b0671ef675fcc44e"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </div>
          </TextArea>
          <SNSIcon>
            <img
              src={require("../assets/footer/snsInsta.svg").default}
              alt="instagram"
            />
            <img
              src={require("../assets/footer/snsLinkedin.svg").default}
              alt="linkedin"
            />
            <img
              src={require("../assets/footer/snsYoutube.svg").default}
              alt="youtube"
            />
          </SNSIcon>
          <Copyright>Copyright 2023 FluentT Inc.</Copyright>
        </Container>
      </Main>
    </>
  );
};

const Container = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 6.0625rem 0;
  padding-left: 1.875rem;
`;

const TextArea = styled.div`
  margin: 1.5rem 0;
  div {
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    a {
      text-decoration-line: underline;
      color: #ffffff;
    }
  }
`;
const SNSIcon = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin-right: 1.25rem;
  }
`;
const Copyright = styled.div`
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 150%;
`;

export default Footer;
