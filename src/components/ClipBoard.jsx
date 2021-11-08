import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px 0px 10px 10px;
  border: none;
  border-radius: 0;
  margin-bottom: 1rem;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  height: 100%;
  background: black;
  color: white;
  outline: none;
  border: none;
  padding: 15px;
  cursor: pointer;
`;
const ClipBoard = () => {
  const [state, setState] = useState({
    value: `http://fint.money/home?referredBy=${useParams().userId}`,
    copied: false,
  });

  return (
    <Container>
      <Input
        value={state.value}
        onChange={({ target: { value } }) => setState({ value, copied: false })}
      />

      <CopyToClipboard
        text={state.value}
        onCopy={() => setState({ copied: true })}
      >
        <Button>Copy to clipboard</Button>
      </CopyToClipboard>

      {state.copied ? <span style={{ color: "black" }}>Copied.</span> : null}
    </Container>
  );
};

export default ClipBoard;
