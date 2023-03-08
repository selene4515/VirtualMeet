import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Container, Main } from "../home/Home";

import checkGray from "../../assets/icon/check_gray.svg";
import checkGreen from "../../assets/icon/check_green.svg";

type Usertype = {
  email: string;
  pw: string;
};

const Login = () => {
  let localStorage: Storage = window.localStorage;

  const User: Usertype = { email: "fluentt@gmail.com", pw: "vm1234!!" }; //임시계정
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [pwCheck, setPwCheck] = useState<boolean>(false);

  const [ableEmailBtn, setAbleEmailBtn] = useState<boolean>(false);
  const [ableBtn, setAbleBtn] = useState<boolean>(false);

  const [openInput, setOpenInput] = useState<boolean>(false);

  //로그인 유효성 검사 //서버랑 일치 여부 확인 필요
  const EmailInputChange = (event: any) => {
    setEmail(event.target.value);

    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; // eslint-disable-line
    if (regex.test(event.target.value)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };
  const PwInputChange = (event: any) => {
    setPw(event.target.value);

    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/; // eslint-disable-line
    if (regex.test(event.target.value)) {
      setPwCheck(true);
    } else {
      setPwCheck(false);
    }
  };

  const EmailContinueBtnHandler = () => {
    //이메일 존재 여부 체크 필요

    if (email === User.email) {
      setOpenInput(true);
    } else {
      alert("이메일이 존재하지 않습니다.");
      //회원가입으로 이동 물어보기
    }
  };
  const BackBtnHandler = () => {
    setAbleEmailBtn(false);
    setOpenInput(false);
  };

  const navigate = useNavigate();
  const AllContinueBtnHandler = () => {
    if (email === User.email && pw === User.pw) {
      localStorage.setItem("email", email);
      localStorage.setItem("pw", pw);
      alert("로그인에 성공했습니다.");
      navigate("/");
      //window.location.reload();
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      emailCheck && EmailContinueBtnHandler();
      emailCheck && pwCheck && AllContinueBtnHandler();
    }
  };

  useEffect(() => {
    if (emailCheck) {
      setAbleEmailBtn(true);
    } else {
      setAbleEmailBtn(false);
    }

    if (emailCheck && pwCheck) {
      setAbleBtn(true);
    } else {
      setAbleBtn(false);
    }
  }, [emailCheck, pwCheck]);

  return (
    <Main color=" #121416">
      <Container>
        <LoginDiv>
          {openInput ? <Title>Welcome back</Title> : <Title>Sign In</Title>}
          <span className="inputTitle">Email</span>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={EmailInputChange}
            onKeyPress={onKeyPress}
            disabled={openInput}
          />
          {openInput && (
            <>
              <span className="inputTitle">Password</span>
              <Input
                type="password"
                placeholder="Password"
                value={pw}
                onChange={PwInputChange}
                onKeyPress={onKeyPress}
              />
              {/* 유효성여부에 따라 컬러 변환 필요 */}
              <PwCheckText txtcolor={pwCheck ? "#7FFF6A" : "#70747B"}>
                <img src={pwCheck ? checkGreen : checkGray} alt="check" />
                Use at least one
                <br /> English lowercase + number + special character
              </PwCheckText>
            </>
          )}
        </LoginDiv>
        {openInput ? (
          <BtnDiv>
            <div className="flex">
              <BackBtn onClick={BackBtnHandler}>Back</BackBtn>
              <ContinueBtn
                bgcolor={ableBtn ? "#7FFF6A" : "#31373A"}
                txtcolor={ableBtn ? "#121416" : "#70747B"}
                onClick={AllContinueBtnHandler}
                disabled={!ableBtn}
              >
                Continue
              </ContinueBtn>
            </div>
            <div className="forgetPw">
              Did you forget your password? <Link to="">Reset password</Link>
            </div>
          </BtnDiv>
        ) : (
          <BtnDiv>
            <ContinueBtn
              bgcolor={ableEmailBtn ? "#7FFF6A" : "#31373A"}
              txtcolor={ableEmailBtn ? "#121416" : "#70747B"}
              onClick={EmailContinueBtnHandler}
              disabled={!ableEmailBtn}
            >
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
  width: 23.75rem;
  height: 37.5rem;

  margin-top: 6.25rem;

  .inputTitle {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.0625rem;

    margin-top: 1.875rem;
    margin-bottom: 1.125rem;
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

  font-weight: 400;
  font-size: 1.125rem;

  :focus {
    outline: none;
  }
`;

const PwCheckText = styled.div<{ txtcolor: string }>`
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1rem;

  display: flex;
  flex-direction: row;
  margin-top: 0.75rem;

  color: ${(props) => props.txtcolor || "#70747B"};

  img {
    margin-right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 23.75rem;

  margin-bottom: 8.75rem;

  .flex {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .forgetPw {
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1rem;

    text-align: center;
    margin-top: 1.875rem;

    color: #8e8e8e;

    a {
      text-decoration-line: underline;
      color: #46b4db;
      margin-left: 0.5rem;
    }
  }
`;
const ContinueBtn = styled.button<{
  bgcolor: string;
  txtcolor: string;
}>`
  padding: 0.625rem;
  gap: 0.625rem;

  width: 100%;

  background: ${(props) => props.bgcolor || "#31373A"};
  border-radius: 10px;

  color: ${(props) => props.txtcolor || "#70747B"};
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 150%;
`;
const BackBtn = styled.button`
  padding: 0.625rem;
  gap: 0.625rem;

  width: 6.25rem;
  margin-right: 0.9375rem;

  background: #31373a;
  border-radius: 10px;

  font-weight: 700;
  font-size: 1.125rem;
  line-height: 150%;
`;

export default Login;
