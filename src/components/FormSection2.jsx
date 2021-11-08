import React, { useState } from "react";
import Slider from "react-input-slider";
import styled from "styled-components";
import CarouselWrapper from "./Carousel";
import devices from "../breakpoints";
const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 0;
  background: #00b4db;
  background-color: -webkit-linear-gradient(to bottom, #418599, #185f73);
  background-color: linear-gradient(to bottom, #418599, #185f73);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media ${devices.m} {
    flex-direction: row;
    align-items: center;
  }
`;
const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 2rem;
  z-index: 0;
  @media ${devices.m} {
    width: 50%;
    margin: 0;
  }
`;
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  /* width: 40%; */
  border-radius: 1rem;
  min-height: 60vh;
  padding: 2rem;
  margin: auto;
  background-color: white;
  @media ${devices.m} {
    width: 50%;
  }
`;

const Form = styled.form`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #af460f;

  height: 100%;
`;
const HeroTitle = styled.h2`
  font-size: 1.5rem;
  padding: 20px 0;
  color: white;
  opacity: 0.9;
  text-align: center;
  @media ${devices.m} {
    font-size: 3rem;
    text-align: center;
    /* line-height: 96px; */
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  width: 100%;
`;

const Label = styled.label``;
const Title = styled.h2`
  text-align: center;
`;
const SliderContainer = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 2px solid black;
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  background: black;
  color: white;
  border-radius: 0.5rem;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: white;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
`;
const RadioTitle = styled.h2``;
const RadioInput = styled.input`
  display: flex;
`;
const RadioLabel = styled.label``;
const RadioOption = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const ResultContainer = styled.div`
  display: ${(props) => props.displayResult || "none"};
`;
const Result = styled.div``;
const Input = styled.input``;
const FormSection2 = ({ setSliderInput }) => {
  const [radioInput, setRadioInput] = useState("option 1");
  const [firstInput, setFirstInput] = useState({ x: 10 });
  const [secondInput, setSecondInput] = useState({ x: 10 });
  const [displayResult, setDisplayResult] = useState(0);
  const handleOnClick = () => {
    setDisplayResult(1);
  };
  const pushValues = () => {
    setSliderInput({ radioInput, firstInput, secondInput });
  };
  const handleRadioChange = (e) => {
    setRadioInput(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    pushValues();
  };
  return (
    <Container id="form-section">
      <Wrapper>
        <CarouselContainer>
          <HeroTitle>We make your money move.</HeroTitle>
          <CarouselWrapper />
        </CarouselContainer>
        <FormWrapper>
          <FormContainer>
            <Title>
              Tell us you're saving without telling us you're saving.
            </Title>
            <Form onSubmit={handleSubmit}>
              <RadioContainer onChange={handleRadioChange}>
                {/* <RadioTitle>Select your goal?</RadioTitle> */}
                <RadioOption>
                  <RadioInput
                    type="radio"
                    id="trip"
                    name="Going on a trip to Goa"
                    value="trip"
                    checked={radioInput === "trip"}
                  />
                  <RadioLabel for="trip">Going on a trip to Goa.</RadioLabel>
                </RadioOption>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    id="returns"
                    name="returns"
                    value="returns"
                    checked={radioInput === "returns"}
                  />
                  <RadioLabel for="returns">
                    Generate up to 10% return
                  </RadioLabel>
                </RadioOption>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    id="iPhone"
                    name="iPhone"
                    value="iPhone"
                    checked={radioInput === "iPhone"}
                  />
                  <Label for="iPhone">Buying an iPhone.</Label>
                </RadioOption>
              </RadioContainer>
              <Option>
                <Label>What's you're budget?</Label>
                <SliderContainer>
                  <Slider
                    axis="x"
                    x={firstInput.x}
                    onChange={({ x }) =>
                      setFirstInput((state) => ({ ...state, x }))
                    }
                  />
                  {firstInput.x}
                </SliderContainer>
              </Option>
              <Option>
                <Label>How much are you saving?</Label>
                <SliderContainer>
                  <Slider
                    axis="x"
                    x={secondInput.x}
                    onChange={({ x }) =>
                      setSecondInput((state) => ({ ...state, x }))
                    }
                  />
                  {secondInput.x}
                </SliderContainer>
              </Option>
            </Form>
            <Button onClick={handleOnClick} type="submit">
              Show Off
            </Button>
            <ResultContainer displayResult={displayResult}>
              <Result>We Will help you acheive this goal in 9 months</Result>
            </ResultContainer>
          </FormContainer>
        </FormWrapper>
      </Wrapper>
      <Anchor href="#sign-me-up">
        <Button>Sign Me Up</Button>
      </Anchor>
    </Container>
  );
};

export default FormSection2;
