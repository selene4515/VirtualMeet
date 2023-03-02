import styled from "styled-components";
import { HomeCard } from "./HomeCard";
import HomeTopBg from "./HomeTopBg";

import cardEarth from "../../assets/home/cardEarth.svg";
import cardHand from "../../assets/home/cardHand.svg";
import cardLan from "../../assets/home/cardLan.svg";
import cardHearts from "../../assets/home/cardHearts.svg";

const Home = () => {
  return (
    <>
      <Main color={mainBgColor}>
        <Container>
          <HomeTopBg />
        </Container>
      </Main>
      <Main color="#1D2022">
        <Container>
          <SecondComponet>
            <SecondCard>
              {" "}
              <SecondTitle>
                Use it <br /> like this
              </SecondTitle>
            </SecondCard>

            <SecondCard>
              <HomeCard
                img={cardEarth}
                title="Video meeting"
                subTitle="Have online meetings with people all over the world."
              />
              <HomeCard
                img={cardHand}
                title="Meeting New People"
                subTitle="Experience a new level of communication that connects everyone without showing each other's faces."
              />
            </SecondCard>
            <SecondCard>
              <HomeCard
                img={cardLan}
                title="Language education"
                subTitle="Use avatars to get rid of language fears and experience more active participation and effective education."
              />
              <HomeCard
                img={cardHearts}
                title="Psychological counseling"
                subTitle="Effective communication methods without the psychological burden of meeting people."
              />
            </SecondCard>
          </SecondComponet>
        </Container>
      </Main>
      <Main color="#7FFF6A">
        <Container>3</Container>
      </Main>
      <Main>
        <Container>4</Container>
      </Main>
    </>
  );
};

const mainBgColor: string =
  "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%),linear-gradient(90deg, #4ac8ff 0%, #7fff6a 100%)";
export const Main = styled.div`
  background: ${(props) => props.color || "#000000"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SecondComponet = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 15rem 0;
`;
const SecondTitle = styled.div`
  font-weight: 700;
  font-size: 3.125rem;
  line-height: 145%;

  margin: 3.125rem 6.25rem;
`;
const SecondCard = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Home;
