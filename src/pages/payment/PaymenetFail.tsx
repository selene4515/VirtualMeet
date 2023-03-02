import styled from "styled-components";

import { Container, Main } from "../home/Home";
import { Hr } from "../../components/Hr";
import { BtnBgGrayFontColor } from "../../components/button/BtnBgGrayFontColor";
import { IconTitleSubTitle } from "../../components/IconTitleSubTitle";

import ExclamationIcon from "../../assets/icon/notiExclamation_red.svg";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <>
      <Main>
        <Container>
          <IconTitleSubTitle
            imgName={ExclamationIcon}
            title1="Fail!"
            title2="Something went wrong"
            subTitle1="We are very sorry for the inconvenience."
            subTitle2="Please order again."
          />
          <Hr />
          <BtnDiv>
            <Link to="/">
              <BtnBgGrayFontColor>Home</BtnBgGrayFontColor>
            </Link>
            <Link to="/plan/payment">
              <BtnBgGrayFontColor color="#74E561">Reorder</BtnBgGrayFontColor>
            </Link>
          </BtnDiv>
        </Container>
      </Main>
    </>
  );
};

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 1.25rem;
  margin-bottom: 5rem;
`;

export default PaymentFail;
