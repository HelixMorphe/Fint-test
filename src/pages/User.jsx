import React from "react";
import styled from "styled-components";
import LeaderBoard from "../components/Leaderboard";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import devices from "../breakpoints";
import ClipBoard from "../components/ClipBoard";
import { WhatsApp } from "@mui/icons-material";
import LeaderBoardFooter from "../components/LeaderBoardFooter";
import Footer from "../components/Footer";
const Container = styled.div`
  /* background: linear-gradient(to bottom, #49dd81, #07b0cb); */
  background-color: #f7f6f3;
  /* min-height: 00vh; */
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.25rem;
  margin-top: 6rem;
  font-weight: bold;
  @media ${devices.m} {
    font-size: 1.25rem;
    margin-top: 0;
  } ;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: #f49b0b;
  margin-bottom: 1rem;
`;
const Span = styled.span`
  color: #f49b0b;
`;
const Wrapper = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

const ClipBoardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
const ClipBoardWrapper = styled.div``;
const ClipBoardTitle = styled.h3``;

const WhatsAppLogo = styled.div`
  color: white;
  background-color: green;
  padding: 10px;
  display: inline-flex;
  border-radius: 10px;
  margin: auto;
`;

const LogoDesc = styled.p`
  font-size: 16px;
  color: white;
`;
const Anchor = styled.a`
  margin-top: 1rem;
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
`;
const UserPage = () => {
  const link = `whatsapp://send?text=%20Hey!%20I%20am%20inviting%20you%20to%20join%20me%20on%20this%20amazing%20app%20for%20achieving%20your%20financial%20goals.Open%20this%20link%20and%20help%20me%20get%20more%20Fint%20Coins%20-%20http://fint.money?referredBy=${
    useParams().userId
  }`;
  return (
    <Container>
      <Header bg="#F7F6F3" />
      <Wrapper>
        <Title>
          Thank you for becoming a part of #FintFamily😀.
          <br />
          At Fint, we believe in co-creating the investment experience.
          <br />
          Invite your friends to join and earn{" "}
          <Span>
            exclusive <br />
            FINT coins.
          </Span>
        </Title>

        <SubTitle>(More you refer , More you earn)</SubTitle>
        <ClipBoardContainer>
          <ClipBoardWrapper>
            <ClipBoardTitle></ClipBoardTitle>
            <ClipBoard />
          </ClipBoardWrapper>
        </ClipBoardContainer>
        <LeaderBoard />
        <Anchor href={link}>
          <WhatsAppLogo>
            <WhatsApp />
            <LogoDesc>Share on WhatsApp</LogoDesc>
          </WhatsAppLogo>
        </Anchor>
      </Wrapper>
      <LeaderBoardFooter />

      {/* <LeaderBoardFooter /> */}
      <Footer />
    </Container>
  );
};

export default UserPage;
