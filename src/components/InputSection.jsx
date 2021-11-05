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
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  /* font-size: 2rem; */
  text-align: center;
  color: #ffe8cd;
  flex: 1;
`;
const Span = styled.span`
  font-size: 1.75rem;
  /* font-size: 2.5rem; */
  /* color: #e59866; */
`;
const FormContainer = styled.div`
  flex: 1;
  width: 100%;
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
