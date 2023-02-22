import styled from "styled-components";
import { Container, Main } from "../home/Home";
import PlanCard from "./PlanCard";

const Plan = () => {
  return (
    <Main>
      <Container>
        <TitleTxt>VIRTUAL MEET Plan</TitleTxt>
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
  margin-bottom: 3.25rem;
`;

export default Plan;
