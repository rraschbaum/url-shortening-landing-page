import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <NavWrapper>
        <LogoWrapper>Shortly</LogoWrapper>
        <Nav>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </Nav>
      </NavWrapper>
      <LoginWrapper>
        <div>Login</div>
        <div>Sign Up</div>
      </LoginWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const NavWrapper = styled.div``;
const LogoWrapper = styled.div``;
const Nav = styled.nav``;
const LoginWrapper = styled.div``;

export default Header;
