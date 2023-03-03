import { Link } from "react-router-dom";
import styled from "styled-components";

import arrowRight from "../../assets/icon/arrowRight_green.svg";

export const HomeFourth = () => {
  return (
    <FourthComponet>
      <Title>Give us Feedback 👂🏼</Title>
      <SubTitle>
        Thank you for your interest in the Virtual meet.
        <br /> Based on the information you provided, we will improve our
        service.
      </SubTitle>
      <GoFeedback>
        <Link to="">Go Feedback</Link>
        <img src={arrowRight} alt="go" />
      </GoFeedback>
    </FourthComponet>
  );
};

const FourthComponet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.125rem 6.875rem;
  gap: 1.25rem;

  width: 68.125rem;

  background: #1d2022;
  border-radius: 0.625rem;

  margin: 12.5rem 0;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 3rem;

  color: #ffffff;
`;
const SubTitle = styled.span`
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: center;

  color: #aaaaaa;
`;
const GoFeedback = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;

  a {
    color: #7fff6a;
    text-decoration: underline;
  }
  img {
    margin-left: 0.625rem;
  }
`;
