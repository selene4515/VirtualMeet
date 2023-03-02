import { useEffect } from "react";
import queryString from "query-string";
import styled from "styled-components";

import { PaymentAPI } from "../../apis/PaymentAPI";
import { Container, Main } from "../home/Home";
import { Hr } from "../../components/Hr";
import { BtnBgGrayFontColor } from "../../components/button/BtnBgGrayFontColor";
import { IconTitleSubTitle } from "../../components/IconTitleSubTitle";

import CheckIcon from "../../assets/icon/notiCheck_green.svg";

const PaymentSuccess = () => {
  const searchParams: string = window.location.search;
  const params: any = queryString.parse(searchParams);

  const paymentKey: string = params.paymentKey;
  const amount: number = params.amount;
  const orderId: string = params.orderId;

  useEffect(() => {
    PaymentAPI.payrequest({ paymentKey, amount, orderId });
  }, []);

  return (
    <>
      <Main>
        <Container>
          <IconTitleSubTitle
            imgName={CheckIcon}
            title1="Payment has been made"
            subTitle1="This is the details of your payment at Fluent Inc."
          />
          <div>
            <SpanDiv>
              Seller <span>FluentT</span>
            </SpanDiv>
            <SpanDiv>
              Plan <span>Basic</span>
            </SpanDiv>
            <SpanDiv>
              Price <span className="price">{amount ? amount : 0}</span>
            </SpanDiv>
          </div>
          <Hr />
          <BtnDiv>
            <BtnBgGrayFontColor>결제 내역 확인</BtnBgGrayFontColor>
            <BtnBgGrayFontColor color="#74E561">
              Download Virtual Meet
            </BtnBgGrayFontColor>
          </BtnDiv>
        </Container>
      </Main>
    </>
  );
};

const SpanDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 21.875rem;

  font-weight: 500;
  font-size: 1.125rem;
  line-height: 150%;

  color: #d3d3d3;
  margin-bottom: 0.625rem;

  .price {
    font-weight: 700;
    font-size: 1.625rem;
    color: #7fff6a;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default PaymentSuccess;
