import React from "react";
import { StyledMenu } from "./Menu.styled";

const navMenu = [
  "About",
  "Portfolio",
  "Contact"
]

const Menu = () => {
  return (
    <StyledMenu>
      {navMenu.map(item => <a href={item}>
        <span></span>
        {item}
      </a>)}
    </StyledMenu>
  );
};

export default Menu;
