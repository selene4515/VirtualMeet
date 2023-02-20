import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../styles/media";

const Navigation = () => {
  return (
    <Navi>
      <Nav>
        <NavLeft>
          <Link to="/">
            <img
              src={require("../assets/logo/T_productLogo.svg").default}
              alt="vmlogo"
            />
          </Link>
        </NavLeft>
        <NavCenter>
          <NavCenterLan>KOR | ENG</NavCenterLan>
        </NavCenter>
        <NavRight>
          <Link to="/">
            <NavRightLogin>LOGIN</NavRightLogin>
          </Link>
          <Link to="/">
            <NavRightSignup>SIGN UP</NavRightSignup>
          </Link>
        </NavRight>
      </Nav>
    </Navi>
  );
};

const Navi = styled.header`
  background-color: #000000;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* ${media.desktop`width: 768px;`}
  ${media.tablet`width: 768px;`}; */
`;
const Nav = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  padding: 0 1.25rem;
`;

const NavCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 1.25rem;
`;
const NavCenterLan = styled.div`
  border: 1px solid yellow;
  color: #cfd8e3;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem;
`;

const NavRightLogin = styled.div`
  margin: 0 0.3125rem;
  color: #ffffff;
  font-size: 0.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.625rem;
  gap: 0.625rem;
  width: 3.375rem;
  height: 2rem;
`;
const NavRightSignup = styled.button`
  margin: 0 0.3125rem;
  color: #ffffff;
  font-size: 0.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.875rem;
  gap: 0.625rem;
  width: 5rem;
  height: 2.125rem;
  background: linear-gradient(90deg, #215468 0%, #4ac8ff 100%), #ffffff;
`;

// const NavRightLogout = styled.div``;

export default Navigation;
