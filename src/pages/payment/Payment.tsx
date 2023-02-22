import styled from "styled-components";
import { useState } from "react";
import { Container, Main } from "../home/Home";
import PaymentCardTitle from "./PaymentCardTitle";
import PaymentMethodCard from "./PaymentMethodCard";
import PaymentPlanCard from "./PaymentPlanCard";

import creditCardImg from "../../assets/payment/creditCard.svg";
import lightningImg from "../../assets/payment/lightning.svg";

const Payment = () => {
  const [selectedCredit, setselectedCredit] = useState(true);
  const [selectedAccount, setselectedAccount] = useState(false);
  const [selectedVirtual, setselectedVirtual] = useState(false);

  const methodClickHandlerCredit = (event: React.MouseEvent<HTMLElement>) => {
    if (selectedCredit === true) {
      setselectedCredit(false);
    } else {
      setselectedCredit(true);
      setselectedAccount(false);
      setselectedVirtual(false);
    }
  };
  const methodClickHandlerAccount = (event: React.MouseEvent<HTMLElement>) => {
    if (selectedAccount === true) {
      setselectedAccount(false);
    } else {
      setselectedCredit(false);
      setselectedAccount(true);
      setselectedVirtual(false);
    }
  };
  const methodClickHandlerVirtual = (event: React.MouseEvent<HTMLElement>) => {
    if (selectedVirtual === true) {
      setselectedVirtual(false);
    } else {
      setselectedCredit(false);
      setselectedAccount(false);
      setselectedVirtual(true);
    }
  };

  return (
    <>
      <Main color="#121416">
        <Container>
          <PaymentTitle>Payment</PaymentTitle>
          <PaymentArea>
            <PaymentCard>
              <PaymentCardTitle title="Choose your plan" />
              <PaymentPlanCard
                title="Basic Plan"
                subTitle="support 2 licenses"
                price="12,900원"
                selected={true}
              />
            </PaymentCard>
            <PaymentCard>
              <PaymentCardTitle
                title="Billing Contact"
                text="This is the contact or department who receives the invoices or any billing communications"
              />
              <EmailInfo>
                <span>Email</span>fff123@gmail.com
              </EmailInfo>
            </PaymentCard>
            <PaymentCard>
              <PaymentCardTitle title="Payment Method" />
              <div className="methodDiv">
                <button onClick={methodClickHandlerCredit}>
                  <PaymentMethodCard
                    icon={creditCardImg}
                    title="신용/체크카드"
                    selected={selectedCredit}
                  />
                </button>
                <button onClick={methodClickHandlerAccount}>
                  <PaymentMethodCard
                    icon={lightningImg}
                    title="계좌이체"
                    selected={selectedAccount}
                  />
                </button>
                <button onClick={methodClickHandlerVirtual}>
                  <PaymentMethodCard
                    icon={lightningImg}
                    title="무통장입금"
                    selected={selectedVirtual}
                  />
                </button>
              </div>
            </PaymentCard>
            <PaymentCard>
              <PaymentCardTitle title="정책 동의" />
            </PaymentCard>
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

const PaymentCard = styled.div`
  width: 100%;

  .methodDiv {
    display: flex;
    flex-direction: row;
  }
`;

const EmailInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.875rem;

  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.125rem;

  span {
    margin-right: 5.25rem;
  }
`;

export default Payment;
