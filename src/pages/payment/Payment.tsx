import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container, Main } from "../home/Home";
import PaymentCardTitle from "./PaymentCardTitle";
import PaymentMethodCard from "./PaymentMethodCard";
import PaymentPlanCard from "./PaymentPlanCard";

import { Hr } from "../../components/Hr";

import creditCardImg from "../../assets/payment/creditCard.svg";
import accountImg from "../../assets/payment/account.svg";
import virAccountImg from "../../assets/payment/virtualAccount.svg";
import checkAgree from "../../assets/icon/checkRound_green.svg";
import checkDeagree from "../../assets/icon/checkRound_gray.svg";

import { loadTossPayments } from "@tosspayments/payment-sdk";

const Payment = () => {
  const clientKey: string = "test_ck_4Gv6LjeKD8awkyBPDbxVwYxAdXy1"; //fluentt
  //const clientKey: string = "test_ck_LBa5PzR0ArnAdGplwxXVvmYnNeDM"; //test

  /* ================== '결제' Btn Event ================== */
  const paymentsHandler = (event: React.MouseEvent<HTMLElement>) => {
    let requestJson: any = initPaymentsData("공통", method);

    loadTossPayments(clientKey).then((tossPayments) => {
      tossPayments
        .requestPayment(method, requestJson)
        .catch(function (error: any) {
          if (error.code === "USER_CANCEL") {
            console.log("결제 고객이 결제창을 닫았을 때 에러 처리");
          } else if (error.code === "INVALID_CARD_COMPANY") {
            console.log("유효하지 않은 카드 코드에 대한 에러 처리");
          }
        });
    });
  };

  /* ================= 주문번호(OrderID) 자동생성 =================== */
  const [autoOrderId, setAutoOrderId] = useState("OrderIdAuto");
  const makeOrderId = (prefix: string) => {
    let x: number = Math.floor(Math.random() * 10000000000);
    setAutoOrderId(prefix + x.toString());
  };
  useEffect(() => {
    makeOrderId(autoOrderId);
  }, []);

  /* ============= [공통] + [결제수단] JSON DATA 합치기 ================= */
  const initPaymentsData = (general: any, paymentType: any) => {
    paymentData[general].amount = "12900";
    paymentData[general].orderId = autoOrderId;
    paymentData[general].orderName = "Basic";
    paymentData[general].customerEmail = "1123@gmail.com";

    return Object.assign(paymentData[general], paymentData[paymentType]);
  };

  //--------------------------------------------------------------------
  const [method, setMethod] = useState<any>("카드");
  const [selectedCredit, setselectedCredit] = useState(true);
  const [selectedAccount, setselectedAccount] = useState(false);
  const [selectedVirtual, setselectedVirtual] = useState(false);

  const methodClickHandlerCredit = (event: React.MouseEvent<HTMLElement>) => {
    if (selectedCredit === true) {
      setselectedCredit(false);
    } else {
      setMethod("카드");
      setselectedCredit(true);
      setselectedAccount(false);
      setselectedVirtual(false);
    }
  };
  const methodClickHandlerAccount = (event: React.MouseEvent<HTMLElement>) => {
    if (selectedAccount === true) {
      setselectedAccount(false);
    } else {
      setMethod("계좌이체");
      setselectedCredit(false);
      setselectedAccount(true);
      setselectedVirtual(false);
    }
  };
  const methodClickHandlerVirtual = (event: React.MouseEvent<HTMLElement>) => {
    if (selectedVirtual === true) {
      setselectedVirtual(false);
    } else {
      setMethod("가상계좌");
      setselectedCredit(false);
      setselectedAccount(false);
      setselectedVirtual(true);
    }
  };

  const [checked, setChecked] = useState(false);
  const policyCheckClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const navigate = useNavigate();
  const onCancel = () => {
    navigate(-1);
  };

  const [allSelected, setAllSelected] = useState(false);
  useEffect(() => {
    if ((selectedCredit || selectedAccount || selectedVirtual) && checked) {
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  }, [checked, selectedCredit, selectedAccount, selectedVirtual]);

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
                    title="Credit card"
                    selected={selectedCredit}
                  />
                </button>
                <button onClick={methodClickHandlerAccount}>
                  <PaymentMethodCard
                    icon={accountImg}
                    title="Account transfer"
                    selected={selectedAccount}
                  />
                </button>
                <button onClick={methodClickHandlerVirtual}>
                  <PaymentMethodCard
                    icon={virAccountImg}
                    title="Virtual account"
                    selected={selectedVirtual}
                  />
                </button>
              </div>
            </PaymentCard>
            <PaymentCard>
              <PaymentCardTitle title="Refund Policy" />
              <PolicyDiv>
                <button onClick={policyCheckClickHandler}>
                  <img src={checked ? checkAgree : checkDeagree} alt="agree" />
                </button>
                <span>
                  By proceeding I agree to &nbsp;
                  <Link to="/">Virtual Meet’s refund policy</Link>
                </span>
              </PolicyDiv>
            </PaymentCard>
          </PaymentArea>
          <Hr />
          <BtnDiv
            bgcolor={allSelected ? "#7FFF6A" : "#31373A"}
            txtcolor={allSelected ? "#121416" : "#70747B"}
          >
            <button className="backBtn" onClick={onCancel}>
              Back
            </button>
            <button
              className="buyBtn"
              onClick={paymentsHandler}
              disabled={!allSelected}
            >
              BUY
            </button>
          </BtnDiv>
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

const PolicyDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.9375rem 0;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  span {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.3125rem;
    margin-left: 0.9375rem;

    a {
      color: #ffffff;
      text-decoration: underline;
    }
  }
`;

const BtnDiv = styled.div<{
  bgcolor: string;
  txtcolor: string;
}>`
  display: flex;
  flex-direction: row;
  margin-bottom: 9.6875rem;

  .backBtn {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 150%;
    text-align: center;

    color: #9c9c9c;
  }
  .buyBtn {
    padding: 0.625rem;
    gap: 0.625rem;
    width: 21.125rem;
    height: 2.9375rem;
    margin-left: 2.75rem;

    background: ${(props) => props.bgcolor || "#31373A"};
    border-radius: 0.625rem;

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 150%;

    color: ${(props) => props.txtcolor || "#70747B"};
  }
`;

/* =================================  결제데이터 ================================== */
let paymentData: any = [
  "공통",
  "카드",
  "가상계좌",
  "계좌이체",
  "휴대폰",
  "토스페이",
];
// let currentURL =
//   window.location.protocol +
//   "//" +
//   window.location.host +
//   window.location.pathname;

let currentURL =
  window.location.protocol + "//" + window.location.host + "/plan/payment";

paymentData["공통"] = {
  amount: "",
  orderId: "",
  orderName: "",
  customerName: null,
  customerEmail: null,
  customerMobilePhone: null,
  successUrl: currentURL + "/success",
  failUrl: currentURL + "/fail",
  windowTarget: "iframe",
  taxFreeAmount: null,
  cultureExpense: false,
};

paymentData["카드"] = {
  cardCompany: null,
  cardInstallmentPlan: null,
  maxCardInstallmentPlan: null,
  freeInstallmentPlans: null,
  useCardPoint: false,
  useAppCardOnly: false,
  useInternationalCardOnly: false,
  flowMode: "DEFAULT",
  easyPay: null,
  discountCode: null,
  appScheme: null,
};

paymentData["가상계좌"] = {
  validHours: 72,
  cashReceipt: {
    type: "소득공제",
  },
  useEscrow: false,
  escrowProducts: null,
  currency: "KRW",
};

paymentData["계좌이체"] = {
  cashReceipt: {
    type: "소득공제",
  },
  useEscrow: false,
  escrowProducts: null,
};

paymentData["휴대폰"] = {
  mobileCarrier: null, // [NOTE] 테스트 환경에서 동작 X
};

export default Payment;
