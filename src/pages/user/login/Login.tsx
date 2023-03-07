import { useEffect, useState } from "react";
import styled from "styled-components";

import { Container, Main } from "../../home/Home";

const Login = () => {
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);

  const [ableEmailBtn, setAbleEmailBtn] = useState(false);
  const [ableBtn, setAbleBtn] = useState(false);

  const EmailContinueBtnHandler = (event: React.MouseEvent<HTMLElement>) => {
    setEmailCheck(true);
  };
  const BackBtnHandler = (event: React.MouseEvent<HTMLElement>) => {
    setEmailCheck(false);
  };

  useEffect(() => {}, []);

  return (
    <Main color=" #121416">
      <Container>
        <LoginDiv>
          {emailCheck ? <Title>Welcome back</Title> : <Title>Sign In</Title>}
          <span className="inputTitle">Email</span>
          <Input type="email" placeholder="Email" id="emailInput" />
          {emailCheck && (
            <>
              <span className="inputTitle">Password</span>
              <Input type="password" placeholder="Password" />
            </>
          )}
        </LoginDiv>
        {emailCheck ? (
          <BtnDiv>
            <BackBtn onClick={BackBtnHandler}>Back</BackBtn>
            <ContinueBtn>Continue</ContinueBtn>
          </BtnDiv>
        ) : (
          <BtnDiv>
            <ContinueBtn onClick={EmailContinueBtnHandler}>
              Continue
            </ContinueBtn>
          </BtnDiv>
        )}
      </Container>
    </Main>
  );
};

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.875rem;
  height: 37.5rem;

  margin-top: 6.25rem;

  .inputTitle {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.0625rem;

    margin: 0.875rem 0;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 50px;

  margin-bottom: 1.875rem;
`;

const Input = styled.input`
  padding: 0.75rem 1.125rem;
  width: 100%;
  box-sizing: border-box;

  background: #1d2022;
  border-bottom: 0.1875rem solid #ffffff;

  color: #70747b;

  :focus {
    outline: none;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 21.875rem;

  margin-bottom: 6.25rem;
`;
const ContinueBtn = styled.button`
  padding: 0.625rem;
  gap: 0.625rem;

  width: 100%;

  background: #31373a;
  border-radius: 10px;

  color: #70747b;
`;
const BackBtn = styled.button`
  padding: 0.625rem;
  gap: 0.625rem;

  width: 6.25rem;

  background: #31373a;
  border-radius: 10px;
`;

export default Login;
