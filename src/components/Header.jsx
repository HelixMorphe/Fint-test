import { useState } from "react";
import styled from "styled-components";
import devices from "../breakpoints";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LeaderBoardModal from "./LeaderBoardModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  outline: 0,
};

const BoxContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  margin: auto;
  background-color: white;
  /* padding: 24px; */
  outline: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  background-color: ${(props) => props.bg};
  height: 15vh;
  top: 0;
  padding: 0px 1rem;

  @media ${devices.m} {
    padding: 0 3rem;
  }
`;

const Img = styled.img`
  width: 100px;
`;

const LeaderBoardButton = styled.button`
  background-color: rgb(69, 107, 242);
  outline: none;
  border: none;
  padding: 10px 15px;
  border-radius: 0.25rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.95);
  }
`;

const Header = ({ bg }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container bg={bg}>
      <Img src="/fint-logo.png" alt="logo" />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxContainer>
          <LeaderBoardModal />
        </BoxContainer>
      </Modal>
      <LeaderBoardButton onClick={handleOpen}>Leaderboard</LeaderBoardButton>
    </Container>
  );
};

export default Header;
