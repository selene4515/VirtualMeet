import styled from "styled-components";

type PropsType = {
  text?: string;
};

const PlanTextLine = ({ text }: PropsType) => {
  return (
    <PlanText>
      <CheckIcon
        src={require("../../assets/icon/check_green.svg").default}
        alt="check_Icon"
      />
      <span>{text}</span>
    </PlanText>
  );
};
const PlanText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3125rem;
`;

const CheckIcon = styled.img`
  width: 1rem;
  height: 1rem;

  margin-right: 0.4375rem;
`;

export default PlanTextLine;
