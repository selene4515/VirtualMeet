import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PlanTextLine from "./PlanTextLine";

interface CardPropsType {
  color: string;
  planTitle: string;
  planSubTitle?: string;
  price: string;
  currency: string;
  text1?: string;
  text2?: string;
  text3?: string;
}

const PlanCard = ({
  color,
  planTitle,
  planSubTitle,
  price,
  currency,
  text1,
  text2,
  text3,
}: CardPropsType) => {
  let localStorage: Storage = window.localStorage;
  const navigate = useNavigate();

  const getEmail: string = localStorage.getItem("email") || "";
  const LoginCheckHandler = () => {
    if (getEmail) {
      navigate("/plan/payment");
    } else {
      alert("로그인이 필요합니다!");
      navigate("/login");
    }
  };

  return (
    <PalnCardComponent>
      <TopColor color={color} />
      <PlanTitle>{planTitle}</PlanTitle>
      <PlanSubTitle>{planSubTitle}</PlanSubTitle>
      <Hr />
      <PriceComponent>
        <PriceTxt>{price}</PriceTxt>
        <CurrencyTxt>{currency}</CurrencyTxt>
      </PriceComponent>
      <PlanExplainComponent>
        <PlanExplainComponentDiv>
          <PlanTextLine text={text1}></PlanTextLine>
          <PlanTextLine text={text2}></PlanTextLine>
          <PlanTextLine text={text3}></PlanTextLine>
        </PlanExplainComponentDiv>
      </PlanExplainComponent>
      <PlanBuyComponent>
        <PlanBuyBtn color={color} onClick={LoginCheckHandler}>
          Buy Now
        </PlanBuyBtn>
      </PlanBuyComponent>
    </PalnCardComponent>
  );
};

const PalnCardComponent = styled.div`
  width: 18.1875rem;
  height: 31.25rem;

  background: #171a1c;
  border-radius: 0.625rem;

  margin-top: 1.875rem;
  margin-bottom: 5rem;
`;
const TopColor = styled.div<{ color: string }>`
  position: absolute;
  width: 18.1875rem;
  height: 0.75rem;

  background: ${(props) => props.color || "#FFFFFF"};
  border-radius: 0.625rem 0.625rem 0 0;
`;

const PlanTitle = styled.div`
  padding-top: 3.25rem;
  padding-bottom: 0.375rem;
  font-weight: 700;
  font-size: 1.5625rem;
  line-height: 2rem;

  display: flex;
  justify-content: center;
`;
const PlanSubTitle = styled.div`
  font-weight: 500;
  font-size: 0.6875rem;
  line-height: 0.8125rem;

  display: flex;
  justify-content: center;

  color: #a4b4be;
`;

const Hr = styled.hr`
  margin-top: 1.8125rem;
  margin-bottom: 2.125rem;
  width: 15.625rem;
  height: 0px;

  border: 0.0625rem solid #575757;
  transform: rotate(0.23deg);
`;

const PriceComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
const PriceTxt = styled.span`
  font-weight: 700;
  font-size: 2.375rem;
  line-height: 2.8125rem;
`;
const CurrencyTxt = styled.span`
  font-weight: 700;
  font-size: 0.5rem;
  line-height: 0.625rem;
  margin-left: 0.375rem;

  color: #a4b4be;
`;

const PlanExplainComponent = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.375rem 0;
`;
const PlanExplainComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.75rem;
`;

const PlanBuyComponent = styled.div`
  display: flex;
  justify-content: center;
`;
const PlanBuyBtn = styled.button<{ color: string }>`
  display: flex;
  justify-content: center;
  padding: 0.625rem;
  gap: 0.625rem;

  width: 14.625rem;
  height: 2.9375rem;

  background: ${(props) => props.color || "#FFFFFF"};
  border-radius: 0.625rem;

  font-weight: 700;
  font-size: 1.125rem;
  line-height: 150%;
  color: #000000;
`;

export default PlanCard;
