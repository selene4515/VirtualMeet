import styled from "styled-components";
import { Container, Main } from "../home/Home";
import PaymentCard from "./PaymentCard";

const Payment = () => {
  return (
    <>
      <Main color="#121416">
        <Container>
          <PaymentTitle>Payment</PaymentTitle>
          <PaymentArea>
            <PaymentCard title="Choose your plan"></PaymentCard>
            <PaymentCard
              title="Billing Contact"
              text="This is the contact or department who receives the invoices or any billing communications"
            ></PaymentCard>
            <PaymentCard title="Payment Method"></PaymentCard>
            <PaymentCard title="정책 동의"></PaymentCard>
          </PaymentArea>
        </Container>
      </Main>
    </>
  );
};

const PaymentTitle = styled.p`
  font-weight: 900;
  font-size: 1.875rem;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  margin-top: 2.1875rem;
  margin-bottom: 3.1875rem;
`;
const PaymentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.4375rem;

  width: 43.75rem;
`;

export default Payment;
