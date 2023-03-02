import { Link } from "react-router-dom";
import styled from "styled-components";

import logoBgBlack from "../../assets/logo/logoBgBlack.svg";

export const HomeThird = () => {
  return (
    <ThirdComponet>
      <IconImg src={logoBgBlack} alt="logoIcon" />
      <Title>
        NEXT LEVEL
        <br />
        COMMUNICATION
      </Title>
      <Link to="/plan">
        <StartedBtn>Get Started !</StartedBtn>
      </Link>
    </ThirdComponet>
  );
};

const ThirdComponet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 12.5rem 0;
`;

const IconImg = styled.img`
  width: 10.875rem;
  height: 10.875rem;
`;
const Title = styled.span`
  font-weight: 800;
  font-size: 3.125rem;
  line-height: 125%;
  text-align: center;

  color: #000000;

  margin: 4.125rem 0;
`;
const StartedBtn = styled.button`
  padding: 0.625rem 3.125rem;
  gap: 0.625rem;

  width: 16.4375rem;
  height: 3.4375rem;

  background: #ffffff;
  border-radius: 0.625rem;

  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.1875rem;

  color: #000000;
`;
