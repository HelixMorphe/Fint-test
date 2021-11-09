import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import devices from "../breakpoints";
const Container = styled.div`
  /* height: 100vh; */

  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  @media ${devices.m} {
    flex-direction: row;
    width: 90%;
  }
`;

const TextSection = styled.div`
  flex: 1;
`;
const List = styled.li`
  color: rgba(0, 0, 0, 0.78);
  font-weight: 400;

  list-style: none;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  &::before {
    content: url(https://fampay.in/_next/static/media/listIcon.b5dec839a351bbd2641dff114935e2d5.svg);
    margin-right: 0.5rem;
  }
`;
const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img`
  height: 350px;

  @media ${devices.m} {
    /* display: flex; */
    height: 600px;
  }
`;
const Title = styled.h3`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.7);
  @media ${devices.m} {
    font-size: 3rem;
  }
`;
const Span = styled.span`
  color: #f5a623;
`;
const Desc = styled.p`
  text-align: left;
  font-size: 1rem;
`;
const LeaderBoardFooter = () => {
  return (
    <Container>
      <Wrapper>
        <TextSection>
          <Title>
            What can you do with the <br />
            <Span>Fint coins?</Span>
          </Title>
          <Desc>
            <List>
              You can redeem the Fint coins for crypto worth upto $500
            </List>
            <List>Become a part of our decision makers </List>
            <List>
              Get access to our Beta version / exclusive features/AMA’s with the
              founders.
            </List>
          </Desc>
        </TextSection>
        <ImageSection>
          <Image src="https://mad.ac/media/1024/images/projects/donut/donut-mobile-app-2.jpg" />
        </ImageSection>
      </Wrapper>
    </Container>
  );
};

export default LeaderBoardFooter;
