import styled from "styled-components";
import FormInput from "./FormInput";
import devices from "../breakpoints";
const Container = styled.div`
  min-height: 70vh;
  /* background: linear-gradient(to bottom right, #d846ef, #9233e6); */
  background-color: #f7f6f3;
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
  font-size: 0.825rem;
  /* border: 2px solid black; */
  /* font-size: 2rem; */
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  flex: 1;
  margin-top: 2rem;
  @media ${devices.m} {
    margin-top: 0;
    font-size: 1.5rem;
    text-align: left;
  }
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
    <Container id="sign-me-up">
      <Wrapper>
        <FormContainer>
          <FormInput sliderInput={sliderInput} />
        </FormContainer>
        <Title>
          Get your personalized insights and start building your wealth portfolio. This is the right time to start achieving your goals!
        </Title>
      </Wrapper>
    </Container>
  );
};
