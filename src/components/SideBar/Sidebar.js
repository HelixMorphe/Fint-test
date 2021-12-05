import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import SideBarNavLinks from "./NavLinks";
import useLockBodyScroll from "./useLockBodyScroll";
import { Close } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

function Sidebar({ setMenu }) {
  useLockBodyScroll();

  const animateSidebar = keyframes`
  from {
    transform: translatex(60px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translatex(0);
  }
  `;

  const Sidebar = styled.div`
    animation: ${animateSidebar} 0.2s ease-out;
  `;

  return (
    <Sidebar className="absolute right-0 top-0 flex flex-col space-y-6 w-full max-w-xs  h-full p-6 pt-9   bg-[#191919]  ">
      <Close
        className="ml-auto mr-4 cursor-pointer"
        onClick={() => setMenu(false)}
        sx={{ color: grey[500], fontSize: 35 }}
      />
      {SideBarNavLinks.map((item, index) => {
        return (
          <Link to={`/${item}`} className=" mx-6 " key={index}>
            <p className=" text-xl px-4 py-2 rounded transition-colors duration-300 ease-in-out text-gray-50 hover:text-[#e6e6e6] hover:bg-[#333333] ">
              {item.link}
            </p>
          </Link>
        );
      })}
    </Sidebar>
  );
}

export default Sidebar;
