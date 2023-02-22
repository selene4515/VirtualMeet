import styled from "styled-components";

type PropsType = {
  icon: string;
  title: string;
  selected?: boolean;
};

const PaymentMethodCard = ({ icon, title, selected }: PropsType) => {
  return (
    <PlanCard color={selected ? "#7FFF6A" : "#171A1C"}>
      <img src={icon} alt="icon" />
      <span>{title}</span>
    </PlanCard>
  );
};

const PlanCard = styled.div`
  width: 7.5rem;

  border: 0.125rem solid ${(props) => props.color || "#171A1C"};
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.5625rem;
  margin-right: 1.5625rem;
  padding: 1.125rem;

  img {
    width: 3.125rem;
    height: 3.125rem;
  }

  span {
    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 1.125rem;

    margin-top: 1.5625rem;
  }
`;

export default PaymentMethodCard;
