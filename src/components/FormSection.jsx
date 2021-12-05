import Slider from "react-input-slider";
import { useState } from "react";
import styled from "styled-components";
import devices from "../breakpoints";
import CarouselWrapper from "./Carousel";
const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.75rem;
  background: #00b4db;
  background: -webkit-linear-gradient(to bottom right, #418599, #185f73);
  background: linear-gradient(to bottom right, #418599, #185f73);

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CarouselContainer = styled.div`
  width: 100%;
`;
const FormWrapper = styled.div`
  height: 70vh;
  margin: auto;
  /* width: 60vw; */
  background-color: white;
  border-radius: 1rem;
`;
const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #af460f;

  height: 100%;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;

  @media ${devices.m} {
    font-size: 1.75rem;
  }
`;

const FormContainer = styled.div`
  border: 1px solid #fed39f;
  border-radius: 1rem;
  padding: 2rem;
  margin: auto;
`;

const OptionsContainer = styled.div``;
const Option = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label``;
const Line = styled.div`
  /* border-top: 0.5px solid blue; */
  margin: 1.5rem 0;
`;
const SliderContainer = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  /* border: 2px solid black; */
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
const FormSection = ({ setSliderInput }) => {
  const [firstInput, setFirstInput] = useState({ x: 10 });
  const [secondInput, setSecondInput] = useState({ x: 10 });

  const pushValues = () => {
    setSliderInput({ firstInput, secondInput });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushValues();
  };

  return (
    <Container id="form-section">
      <Wrapper>
        <CarouselContainer>
          <CarouselWrapper />
        </CarouselContainer>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Title>
              Tell us you’re saving without telling us you’re saving
            </Title>
            <FormContainer>
              <OptionsContainer>
                <Option>
                  <Label>How much are you willing to spend?</Label>
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
                <Line />
                <Option>
                  <Label>How much are you willing to spend?</Label>
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
              </OptionsContainer>
              <InputContainer>
                <Button type="submit" value="Submit">
                  <Anchor href="#login-form">Submit</Anchor>
                </Button>
              </InputContainer>
            </FormContainer>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default FormSection;
