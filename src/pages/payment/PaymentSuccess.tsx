import { useEffect } from "react";
import queryString from "query-string";
import styled from "styled-components";

import { PaymentAPI } from "../../apis/PaymentAPI";
import { Container, Main } from "../home/Home";
import { Hr } from "../../components/Hr";

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
          {paymentKey}
          <br />
          {amount}
          <br />
          {orderId}
          <br />
          <Hr />
        </Container>
      </Main>
    </>
  );
};

export default PaymentSuccess;
