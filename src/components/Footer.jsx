import React from "react";
import styled from "styled-components";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
} from "@mui/icons-material";
import devices from "../breakpoints";
const Container = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 10px 0;
`;

const Wrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.8);

  @media ${devices.m} {
    flex-direction: row;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 2;
`;
const Right = styled.div`
  flex: 1;
  /* height: 100%; */
  display: none;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media ${devices.m} {
    display: flex;
  }
`;
const Img = styled.img`
  width: 100px;
`;
const Anchor = styled.a`
  &:link {
    text-decoration: none;
    color: inherit;
  }
  &:active {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    text-decoration: none;
    color: inherit;
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;
const SocialMediaContainer = styled.div`
  display: flex;

  @media ${devices.m} {
    display: none;
  }
`;
const SocialMediaContainerRight = styled.div`
  display: flex;
`;
const SocialMedia = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const DescContainer = styled.div`
  margin: 1.5rem 0;
  padding: 0 0.75rem 0 0;
  @media ${devices.m} {
    width: 60%;
  }
`;
const Desc = styled.p``;
const ContactContainer = styled.div`
  margin: 1.5rem 0;

  @media ${devices.m} {
    display: none;
  }
`;
const ContactContainerRight = styled.div`
  margin: 1.5rem 0;
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;
const ContactP = styled.p`
  margin-left: 1rem;
`;
const Copyrights = styled.p`
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Img src="/fint-logo.png" />
          <SocialMediaContainer>
            <SocialMedia>
              <Anchor
                href="https://www.instagram.com/fintmoney/"
                target="_blank"
              >
                <Instagram />
              </Anchor>
            </SocialMedia>
            <SocialMedia>
              <Anchor
                href="https://www.linkedin.com/company/fintmoney/"
                target="_blank"
              >
                <LinkedIn />
              </Anchor>
            </SocialMedia>
            <SocialMedia>
              <Anchor
                href="https://www.facebook.com/Fintmoney/"
                target="_blank"
              >
                <Facebook />
              </Anchor>
            </SocialMedia>
            <SocialMedia>
              <Anchor href="https://twitter.com/fintmoney" target="_blank">
                <Twitter />
              </Anchor>
            </SocialMedia>
          </SocialMediaContainer>
          <DescContainer>
            <Desc>
              We aim to grow your capital smartly by following our time-tested
              and data-backed investment strategies. <br />
              By giving our users courtside seats, they become the smartest
              investors they’ve ever been.
            </Desc>
          </DescContainer>
          <ContactContainer>
            <Contact>
              <EmailOutlined />
              <ContactP>kush@fint.money</ContactP>
            </Contact>
            <Contact>
              <Phone />
              <ContactP>942 475 8397</ContactP>
            </Contact>
          </ContactContainer>
          <Copyrights>
            ©2021 Fint | All rights reserved | Made with ❤️
          </Copyrights>
        </Left>
        <Right>
          <ContactContainerRight>
            <Contact>
              <EmailOutlined />
              <ContactP>kush@fint.money</ContactP>
            </Contact>
            <Contact>
              <Phone />
              <ContactP>942 475 8397</ContactP>
            </Contact>
          </ContactContainerRight>
          <SocialMediaContainerRight>
            <SocialMedia>
              <Anchor
                href="https://www.instagram.com/fintmoney/"
                target="_blank"
              >
                <Instagram />
              </Anchor>
            </SocialMedia>
            <SocialMedia>
              <Anchor
                href="https://www.linkedin.com/company/fintmoney/"
                target="_blank"
              >
                <LinkedIn />
              </Anchor>
            </SocialMedia>
            <SocialMedia>
              <Anchor
                href="https://www.facebook.com/Fintmoney/"
                target="_blank"
              >
                <Facebook />
              </Anchor>
            </SocialMedia>
            <SocialMedia>
              <Anchor href="https://twitter.com/fintmoney" target="_blank">
                <Twitter />
              </Anchor>
            </SocialMedia>
          </SocialMediaContainerRight>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
