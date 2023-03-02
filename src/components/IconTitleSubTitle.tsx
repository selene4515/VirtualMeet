import styled from "styled-components";

type PropsType = {
  imgName: string;
  title1: string;
  title2?: string;
  subTitle1: string;
  subTitle2?: string;
};

export const IconTitleSubTitle = ({
  imgName,
  title1,
  title2,
  subTitle1,
  subTitle2,
}: PropsType) => {
  return (
    <DivContainer>
      <IconImg src={imgName} alt="icon" />
      <Title>
        {title1}
        <br />
        {title2}
      </Title>
      <SubTitle>
        {subTitle1}
        <br />
        {subTitle2}
      </SubTitle>
    </DivContainer>
  );
};

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 3.125rem;
  margin-bottom: 2rem;
`;

const IconImg = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  margin-top: 3.25rem;

  border-radius: 0.625rem;
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 150%;
  text-align: center;

  margin-top: 1.5625rem;
  margin-bottom: 1.25rem;
`;
const SubTitle = styled.span`
  font-weight: 500;
  font-size: 1.3125rem;
  line-height: 150%;
  text-align: center;

  color: #a9a9a9;

  margin-bottom: 3.125rem;
`;
