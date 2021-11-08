import React from "react";
import styled from "styled-components";
import LeaderBoard from "../components/Leaderboard";
import Header from "../components/Header";
import devices from "../breakpoints";
import ClipBoard from "../components/ClipBoard";
const Container = styled.div`
  background: linear-gradient(to bottom, #49dd81, #07b0cb);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.25rem;
  font-weight: bold;
  @media ${devices.m} {
    font-size: 1.25rem;
  } ;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 0.825rem;
  font-weight: bold;
  color: green;
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: auto;
`;

const ClipBoardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
const ClipBoardWrapper = styled.div``;
const ClipBoardTitle = styled.h3``;
const UserPage = () => {
  return (
    <Container>
      <Header bg="#49dd81" />
      <Wrapper>
        <Title>
          Thank you for becoming a part of #FintFamily😀.
          <br />
          At Fint, we believe in co-creating the investment experience.
          <br />
          Invite your friends to join and earn exclusive FINT coins.
        </Title>

        <SubTitle>(More you refer , More you earn)</SubTitle>
        <ClipBoardContainer>
          <ClipBoardWrapper>
            <ClipBoardTitle></ClipBoardTitle>
            <ClipBoard />
          </ClipBoardWrapper>
        </ClipBoardContainer>
        <LeaderBoard />
      </Wrapper>
    </Container>
  );
};

export default UserPage;
