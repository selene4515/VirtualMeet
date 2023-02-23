import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Main } from "../home/Home";
import PlanCard from "./PlanCard";

const Plan = () => {
  return (
    <Main>
      <Container>
        <TitleTxt>VIRTUAL MEET Pricing</TitleTxt>
        <SubTitleTxt>
          For more information regarding Zoom’s cancellation policies,
          <br /> see Virtual Meet’s
          <Link to="https://explore.zoom.us/en/terms/"> terms of service</Link>.
        </SubTitleTxt>
        <div>
          <PlanCard
            color="#7FFF6A"
            planTitle="Basic"
            planSubTitle="Best Value"
            price="12,900"
            currency="원"
            text1="Meetings up to 30 minutes per meeting"
            text2="Real-time communication"
            text3="Support for 2 people Chat"
          ></PlanCard>
        </div>
      </Container>
    </Main>
  );
};

const TitleTxt = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  margin-top: 2.75rem;
`;
const SubTitleTxt = styled.div`
  font-weight: 600;
  font-size: 0.5625rem;
  line-height: 140%;

  margin-top: 1rem;
  margin-bottom: 3.375rem;
  text-align: center;

  color: #a4b4be;

  a {
    text-decoration: underline;
    color: #a4b4be;
  }
`;

export default Plan;
