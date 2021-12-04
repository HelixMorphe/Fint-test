import { useState } from "react";
import styled from "styled-components";
import devices from "../breakpoints";
import Sidebar from "./SideBar/Sidebar";


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

const Icon = styled.svg`
  cursor: pointer;
`;

const Header = ({ bg }) => {
  const [menu, setMenu] = useState(false);
  const handleOpenMenu = () => setMenu(!menu);
  return (
    <Container bg={bg}>
      <Img src="/fint-logo.png" alt="logo" />
      <div>
        <Icon onClick={() => handleOpenMenu()} width="40" height="40" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.4268 30.095H17.0947" stroke="#C0C0C0" stroke-width="5.04744" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M52.427 20H7" stroke="#C0C0C0" stroke-width="5.04744" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M52.427 40.1897H7" stroke="#C0C0C0" stroke-width="5.04744" stroke-linecap="round" stroke-linejoin="round" />
        </Icon>
        {
          menu ? <Sidebar setMenu={setMenu} /> : null
        }
      </div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxContainer>
          <LeaderBoardModal />
        </BoxContainer>
      </Modal>
      <LeaderBoardButton onClick={handleOpen}>Leaderboard</LeaderBoardButton> */}
    </Container>
  );
};

export default Header;
