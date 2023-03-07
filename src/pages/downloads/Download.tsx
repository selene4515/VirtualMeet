import styled from "styled-components";
import {
  fetchFunctionality as _fetch,
  getUAInfo,
} from "../../apis/DownloadAPI";

import { Container, Main } from "../home/Home";
import { DwlBtn } from "./DownloadBtn";

import windowIcon from "../../assets/download/windows11Logo.svg";
import macIcon from "../../assets/download/macLogo.svg";
import { Link } from "react-router-dom";

const Download = () => {
  const userOsType: string = getUAInfo().downloadType;

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
              <DwlBtn
                onclickpromise={_fetch}
                icon={userOsType === "mac" ? macIcon : windowIcon}
                text={userOsType}
              />
            </div>
          </BtnDiv>
          <BtnDiv>
            <span>Mobile version</span>
            <div>
              <Link to="">
                <DwlBtn icon={windowIcon} text="Android" />
              </Link>
              <Link to="">
                <DwlBtn icon={macIcon} text="iOS" />
              </Link>
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

export default Download;
