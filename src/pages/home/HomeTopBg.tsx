import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeTopBg = () => {
  return (
    <TopBg>
      <SubTitleTxt>Next Level Communication</SubTitleTxt>
      <TitleTxt>VIRTUAL MEET</TitleTxt>
      <Link to="/plan">
        <StartedBtn>Get Started!</StartedBtn>
      </Link>
      <MainImg
        src={require("../../assets/home/T_mainImgxl.svg").default}
        alt="mainImg"
      />
    </TopBg>
  );
};

const TopBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 7.6875rem;
`;

const SubTitleTxt = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8125rem;
`;
const TitleTxt = styled.div`
  font-weight: 800;
  font-size: 3.625rem;
  line-height: 135%;
  margin-top: 1.3125rem;
  margin-bottom: 2.5rem;
`;

const StartedBtn = styled.button`
  padding: 1rem 2.25rem;
  gap: 0.75rem;

  width: 12.8125rem;
  height: 3.5625rem;

  background: rgba(255, 255, 255, 0.13);
  border-radius: 0.375rem;

  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.75rem;

  border: 1px solid;
`;

const MainImg = styled.img`
  margin-top: 10.4375rem;
`;

export default HomeTopBg;
