import styled from "styled-components";

type PropsData = {
  img: string;
  title: string;
  subTitle: string;
};

export const HomeCard = ({ img, title, subTitle }: PropsData) => {
  return (
    <CardDiv>
      <IconImg src={img} alt="icon" />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  width: 19.6875rem;
  height: 29.375rem;

  margin: 3.125rem 6.25rem;
`;

const IconImg = styled.img`
  width: 14.0625rem;
  height: 14.0625rem;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 1.6875rem;
  line-height: 140%;
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.3125rem;
  line-height: 145%;

  color: #a4b4be;
`;
