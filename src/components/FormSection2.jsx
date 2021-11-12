import React, { useState } from "react";
import Slider from "react-input-slider";
import styled from "styled-components";
import CarouselWrapper from "./Carousel";
import devices from "../breakpoints";
const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 3rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  /* border: 2px solid blue; */
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media ${devices.m} {
    flex-direction: row;
    align-items: flex-end;
  }
`;
const CarouselContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* height: 60vh; */
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
  margin: 2rem auto;
  /* width: 40%; */
  border-radius: 1rem;
  min-height: 60vh;
  padding: 2rem;
  margin: auto;
  background-color: #121212;
  @media ${devices.m} {
    width: 50%;
  }
`;

const Form = styled.form`
  padding: 1rem;
  height: 100%;
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;

  height: 100%;
`;
const HeroTitle = styled.h2`
  color: rgb(245, 166, 35);
  font-size: 1.5rem;
  /* padding: 20px 0; */
  margin-bottom: 5rem;
  /* color: black; */
  opacity: 0.9;
  text-align: center;
  @media ${devices.m} {
    font-size: 2rem;
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
  margin-top: 5rem;
  @media ${devices.m} {
    margin-top: 0;
  }
`;

const Label = styled.label`
  color: rgb(245, 166, 35);
`;
const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  display: ${(props) => props.display};

  @media ${devices.m} {
    margin-top: 2rem;
  }
`;
const SliderContainer = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  margin: 0 10px;
  border: 2px solid black;
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  background: rgb(245, 166, 35);
  color: black;
  border-radius: 0.5rem;
  display: ${(props) => props.display};
`;
const Anchor = styled.a`
  text-decoration: none;
  color: white;
  display: ${(props) => props.display};
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
const RadioLabel = styled.label`
  color: rgb(245, 166, 35);
`;
const RadioOption = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const ResultContainer = styled.div`
  height: 50vh;
  position: relative;
  background-image: url("/graph.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => props.displayResult || "none"};
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const Result = styled.p`
  padding: 0.5rem;
  text-align: center;
  color: black;
`;

const ResultNumber = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  display: flex;
  /* width: 100%; */
`;
const FormSection2 = ({ setSliderInput }) => {
  const [radioInput, setRadioInput] = useState("option 1");
  const [firstInput, setFirstInput] = useState({ x: 10000 });
  const [secondInput, setSecondInput] = useState({ x: 1000 });
  const [displayResult, setDisplayResult] = useState(0);

  const resultCalc = () => {
    const ratio = ~~(firstInput.x / secondInput.x);
    if (ratio <= 4) {
      return `${ratio} weeks`;
    } else return `${~~ratio - 1} months`;
  };

  const handleOnBack = () => {
    setDisplayResult(0);
  };
  const pushValues = () => {
    setSliderInput({ radioInput, firstInput, secondInput });
    console.log({
      radioInput,
      firstInput,
      secondInput,
    });
  };
  const handleOnClick = (event) => {
    setDisplayResult(1);
    event.preventDefault();
    pushValues();
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
          <HeroTitle>We make your money move </HeroTitle>
          <CarouselWrapper />
        </CarouselContainer>
        <FormWrapper>
          <FormContainer>
            <Title display={displayResult ? "none" : "flex"}>
              Let us know your goals.
            </Title>
            <Form
              onSubmit={handleSubmit}
              display={displayResult === 1 ? "none" : "flex"}
            >
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
                <Label>What's your budget for it?</Label>
                <SliderContainer>
                  <Slider
                    xmin={10000}
                    xmax={100000}
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
                <Label>How much is your monthly savings?</Label>
                <SliderContainer>
                  <Slider
                    xmin={1000}
                    xmax={20000}
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
            <ResultContainer displayResult={displayResult}>
              <Result>
                We Will help you acheive this goal in
                <br /> <ResultNumber>{resultCalc()}.</ResultNumber>
              </Result>
            </ResultContainer>
            <Button
              onClick={handleOnClick}
              type="submit"
              display={displayResult ? "none" : "flex"}
            >
              Show Off
            </Button>
            <ButtonContainer>
              <Button
                onClick={handleOnBack}
                // type="submit"
                display={displayResult ? "flex" : "none"}
              >
                Go back
              </Button>
              <Anchor
                href="#sign-me-up"
                display={!displayResult ? "none" : "flex"}
              >
                <Button>Sign Me Up</Button>
              </Anchor>
            </ButtonContainer>
          </FormContainer>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default FormSection2;
