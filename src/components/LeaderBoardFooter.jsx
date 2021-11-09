import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: green;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;
const Title = styled.h3`
  font-size: 1.5rem;
`;
const Desc = styled.p`
  text-align: center;
  font-size: 1rem;
`;
const LeaderBoardFooter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>What can you do with the Fint coins?</Title>
        <Desc>
          You can redeem the Fint coins for crypto worth upto $500
          <br /> or <br /> You could also become a part of our decision makers
          who’d get access to our Beta version/exclusive features/AMA’s with the
          founders.
        </Desc>
      </Wrapper>
    </Container>
  );
};

export default LeaderBoardFooter;
