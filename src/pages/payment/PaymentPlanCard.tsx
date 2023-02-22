import styled from "styled-components";

type PropsType = {
  title: string;
  subTitle?: string;
  price: string;
  selected?: boolean;
};

const PaymentPlanCard = ({ title, subTitle, price, selected }: PropsType) => {
  return (
    <PlanCard color={selected ? "#7FFF6A" : "#171A1C"}>
      <PlanCardTitle>{title}</PlanCardTitle>
      <PlanCardSubTitle>{subTitle}</PlanCardSubTitle>
      <PlanCardPrice>{price}</PlanCardPrice>
    </PlanCard>
  );
};

const PlanCard = styled.div`
  width: 12.5rem;

  border: 0.125rem solid ${(props) => props.color || "#171A1C"};
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  margin-top: 1.5625rem;
  padding: 1.125rem;
`;

const PlanCardTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3125rem;
`;
const PlanCardSubTitle = styled.p`
  font-weight: 500;
  line-height: 1rem;

  color: #525252;

  margin-top: 0.125rem;
  margin-bottom: 1.875rem;
`;
const PlanCardPrice = styled.p`
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.125rem;
`;

export default PaymentPlanCard;
