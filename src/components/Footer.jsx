import React from "react";
import styled from "styled-components";
import { Logo } from "../data";

const Container = styled.div`
  /* height: 20vh; */
  /* background-image: url(/footerImage.svg); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ff7f6a;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 10px 0;
`;

const Wrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.img`
  width: 100px;
`;
const Contact = styled.div``;
const Copyrights = styled.p`
  text-align: center;
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Img src={Logo} />
        <Contact>
          <p>kush@fint.money</p>
          <p>995 905 9502</p>
        </Contact>
      </Wrapper>
      <Copyrights>©2021 Fint, all rights reserved</Copyrights>
    </Container>
  );
};

export default Footer;
