import styled from "styled-components";

import { HomeCard } from "./HomeCard";

import cardEarth from "../../assets/home/cardEarth.svg";
import cardHand from "../../assets/home/cardHand.svg";
import cardLan from "../../assets/home/cardLan.svg";
import cardHearts from "../../assets/home/cardHearts.svg";

export const HomeSecond = () => {
  return (
    <SecondComponet>
      <SecondCard>
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
  );
};

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
