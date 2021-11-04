import { useState } from "react";
import Section from "../components/Section";

import styled from "styled-components";
import FormSection from "../components/FormSection";
import { InputSection } from "../components/InputSection";
const Container = styled.div``;
export default function Home() {
  const [sliderInput, setSliderInput] = useState({});

  return (
    <Container>
      <Section />
      <FormSection setSliderInput={setSliderInput} />
      <InputSection sliderInput={sliderInput} />
    </Container>
  );
}
