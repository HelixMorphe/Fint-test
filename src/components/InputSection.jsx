import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import devices from "../breakpoints";
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #d846ef, #9233e6);
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
  @media ${devices.m} {
    flex-direction: row;
  }
`;
const Title = styled.h3`
  font-size: 1.5rem;

  /* font-size: 2rem; */
  text-align: center;
  color: #ffe8cd;
  flex: 1;
  @media ${devices.m} {
    font-size: 2rem;
    text-align: left;
  }
`;
const Span = styled.span`
  font-size: 1.75rem;
  @media ${devices.m} {
    font-size: 2.5rem;
  }
  /* font-size: 2.5rem; */
  /* color: #e59866; */
`;
const FormContainer = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 2rem;

  @media ${devices.m} {
    margin-top: 0;
  }
`;

export const InputSection = ({ sliderInput }) => {
  return (
    <Container id="login-form">
      <Wrapper>
        <Title>
          We will send you a personalized portfolio insights to make you achieve
          your goal efficiently for <Span>Free!</Span>
        </Title>
        <FormContainer>
          <FormInput sliderInput={sliderInput} />
        </FormContainer>
      </Wrapper>
    </Container>
  );
};
