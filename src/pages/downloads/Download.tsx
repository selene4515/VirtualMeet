import styled from "styled-components";
import { Container, Main } from "../home/Home";
import { DwlBtn } from "./DownloadBtn";

import windowIcon from "../../assets/download/windows11Logo.svg";

export const Download = () => {
  return (
    <>
      <Main color="#1D2022">
        <Container>
          <Title>
            Get ready for <br />
            VIRTUAL MEET
          </Title>
          <SubTitle>
            The following is a lost of the current installers for the Virtual
            Meet application and software.
          </SubTitle>
        </Container>
      </Main>
      <Main>
        <Container>
          <BtnDiv>
            <span>PC version</span>
            <div>
              <DwlBtn icon={windowIcon} text="Download Windows" />
              <DwlBtn icon={windowIcon} text="Download macOS" />
            </div>
          </BtnDiv>
          <BtnDiv>
            <span>Mobile version</span>
            <div>
              <DwlBtn icon={windowIcon} text="Download Android" />
              <DwlBtn icon={windowIcon} text="Download iOS" />
            </div>
          </BtnDiv>
        </Container>
      </Main>
    </>
  );
};

const Title = styled.span`
  font-weight: 800;
  font-size: 3rem;
  line-height: 135%;

  text-align: center;

  margin-top: 8.75rem;
`;
const SubTitle = styled.span`
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 135%;

  text-align: center;

  color: rgba(255, 255, 255, 0.6);

  margin-top: 1.375rem;
  margin-bottom: 5rem;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5rem 0;

  span {
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 135%;

    margin-bottom: 1.875rem;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;
