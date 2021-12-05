import React from "react";
import styled from "styled-components";
import devices from "../breakpoints";
const Container = styled.div`
  min-height: 85vh;
  background-color: #121212;
  /* background: linear-gradient(to bottom, #ea6753, #fd9464);
  background: -webkit-linear-gradient(to bottom, #ea6753, #fd9464); */

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${devices.m} {
    min-height: 87vh;
  }
`;
const Wrapper = styled.div`
  width: 100%;
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
  margin: 0.5rem auto;
  @media ${devices.m} {
    font-size: 3rem;
    text-align: left;
  }
  /* font-size: 3rem; */
`;
const SubTitle = styled.p`
  font-size: 1rem;
  text-align: center;
  @media ${devices.m} {
    text-align: left;
    margin-bottom: 1.5rem;
  }
`;
const ButtonContainer = styled.div`
  padding: 1rem;
  /* border: 2px solid white; */

  display: flex;
  justify-content: center;
  align-self: center;
  margin-bottom: 0.5rem;
  @media ${devices.m} {
    justify-content: flex-start;
    padding: 0;
    /* margin-bottom: 1rem; */
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
  background: rgb(245, 166, 35);
  color: black;
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
    height: 650px;
    width: auto;
  }
`;

const Section = () => {
  return (
    <Container>
      <Wrapper>
        <HeroPoster>
          <Img src="/mockup.png" />
        </HeroPoster>
        <Hero>
          <Title>Your Google Maps for Money.</Title>
          <SubTitle>
            Portfolio Co-creation | Smart Capital Allocation | Personalized
            Assets Suggestions for <br /> 100M+ young millennials
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
