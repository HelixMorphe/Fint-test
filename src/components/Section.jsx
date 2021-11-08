import React from "react";
import styled from "styled-components";
import devices from "../breakpoints";
import { HeroImage } from "../data";
const Container = styled.div`
  min-height: 95vh;
  background: #00b4db;
  background: linear-gradient(to bottom, #ea6753, #fd9464);
  background: -webkit-linear-gradient(to bottom, #ea6753, #fd9464);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media ${devices.m} {
    flex-direction: row;
    padding-top: 0;
  }
`;
const Hero = styled.div`
  color: #fadeac;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 1.75rem;
  text-align: center;
  margin-top: 0.5rem;
  @media ${devices.m} {
    font-size: 3rem;
    text-align: left;
  }
  /* font-size: 3rem; */
`;
const SubTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  @media ${devices.m} {
    text-align: left;
  }
`;
const ButtonContainer = styled.div`
  padding: 1rem;
  /* border: 2px solid white; */

  display: flex;
  justify-content: center;
  align-self: center;
  @media ${devices.m} {
    justify-content: flex-start;
    padding: 0;
  }
`;
const Button = styled.a`
  padding: 1rem 1.75rem;
  border: none;
  font-size: 1rem;
  font-weight: normal;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  outline: none;
  text-decoration: none;
  background: black;
  color: white;
  @media ${devices.m} {
    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  }
`;
const HeroPoster = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
  /* border: 2px solid white; */
`;

const Img = styled.img`
  width: 200px;

  @media ${devices.m} {
    width: 400px;
  }
`;

const Section = () => {
  return (
    <Container>
      <Wrapper>
        <HeroPoster>
          <Img src={HeroImage} />
        </HeroPoster>
        <Hero>
          <Title>Your Google Maps for Money.</Title>
          <SubTitle>
            We not only smartly allocate your capital- we co-create seamless
            investing experience. Crush your financial goals with us.
          </SubTitle>
          <ButtonContainer>
            <Button href="#form-section">Join Us</Button>
          </ButtonContainer>
        </Hero>
      </Wrapper>
    </Container>
  );
};

export default Section;

// const q = query(
//   collection(db, "users"),
//   where("mobileNumber", "==", values.mobileNumber)
// );
// const querySnapshot = await getDoc(q);

// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });
