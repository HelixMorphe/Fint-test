import styled from "styled-components";

const Container = styled.div`
  z-index: 99;
  background-color: ${(props) => props.bg};
  height: 15vh;
  top: 0;
  padding: 0px 3rem;
`;

const Img = styled.img`
  width: 100px;
`;

const Header = ({ bg }) => {
  return (
    <Container bg={bg}>
      <Img src="/fint-logo.png" alt="logo" />
    </Container>
  );
};

export default Header;
