import styled from "styled-components";
import { Logo } from "../data";
const Container = styled.div`
  z-index: 99;
  background-color: #ea6753;

  top: 0;
  padding: 0px 1rem;
`;

const Img = styled.img`
  width: 100px;
`;

const Header = () => {
  return (
    <Container>
      <Img src={Logo} alt="logo" />
    </Container>
  );
};

export default Header;
