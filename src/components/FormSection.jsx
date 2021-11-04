import Slider from "react-input-slider";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  background: #00b4db;
  background: -webkit-linear-gradient(to bottom right, #418599, #185f73);
  background: linear-gradient(to bottom right, #418599, #185f73);

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
const Wrapper = styled.div`
  height: 80vh;
  margin: auto;
  /* width: 60vw; */
  background-color: white;
  border-radius: 1rem;
`;
const Form = styled.form`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #af460f;

  height: 100%;
`;
const Title = styled.h2`
  font-size: 1.75rem;
`;
const FormContainer = styled.div`
  border: 1px solid #fed39f;
  border-radius: 1rem;
  padding: 2rem;
  width: 60%;
  margin: auto;
`;

const OptionsContainer = styled.div``;
const OptionsTitle = styled.h3``;
const Option = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const Label = styled.label``;
const Line = styled.div`
  /* border-top: 0.5px solid blue; */
  margin: 1.5rem 0;
`;

const Button = styled.button`
  /* border: 2px solid black; */
`;

const FormSection = ({ setSliderInput }) => {
  const [firstInput, setFirstInput] = useState({ x: 10 });
  const [secondInput, setSecondInput] = useState({ x: 10 });

  // const handleChange = (e) => {
  //   var { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

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
        <Form onSubmit={handleSubmit}>
          <Title>Tell us you’re saving without telling us you’re saving</Title>
          <FormContainer>
            <OptionsContainer>
              <Option>
                <Label>How much are you willing to spend?</Label>
                {firstInput.x}
                <Slider
                  axis="x"
                  x={firstInput.x}
                  onChange={({ x }) =>
                    setFirstInput((state) => ({ ...state, x }))
                  }
                />
              </Option>
              <Line />
              <Option>
                <Label>How much are you willing to spend?</Label>
                {secondInput.x}
                <Slider
                  axis="x"
                  x={secondInput.x}
                  onChange={({ x }) =>
                    setSecondInput((state) => ({ ...state, x }))
                  }
                />
              </Option>
            </OptionsContainer>
          </FormContainer>
          <Input type="submit" placeholder="OKAY" />
        </Form>
      </Wrapper>
    </Container>
  );
};

export default FormSection;
