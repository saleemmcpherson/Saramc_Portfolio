import React from "react";
import { bool } from 'prop-types';
import { StyledMenu } from "./Menu.styled";

const navMenu = ["About", "Portfolio", "Contact"];

const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} {...props}>
      {navMenu.map(item => (
        <a href={item} tabIndex={tabIndex}>
          {item}
        </a>
      ))}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
