import styled from "styled-components";

type PropsType = {
  title: string;
  text?: string;
  children?: React.ReactNode;
};

const PaymentCardTitle = ({ title, text }: PropsType) => {
  return (
    <PaymentCardDiv>
      <p>{title}</p>
      <hr />
      <span>{text}</span>
    </PaymentCardDiv>
  );
};

const PaymentCardDiv = styled.div`
  width: 100%;

  p {
    font-weight: 900;
    font-size: 1.3125rem;
    line-height: 1.5625rem;
  }
  hr {
    border: 0.125rem solid rgba(87, 87, 87, 0.4);
    margin-top: 0.5625rem;
    margin-bottom: 0.5625rem;
  }
  span {
    font-weight: 500;
    line-height: 1rem;
    color: #b6b6b6;
    margin-bottom: 1.125rem;
  }
`;

export default PaymentCardTitle;
