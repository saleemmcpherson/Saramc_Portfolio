import React, { useState, useRef } from "react";
// import { useOnClickOutside } from './hooks';
import { Burger, Menu } from "../Burger";

const Header = () => {
  // const [open, setOpen] = useState(false);
  // const node = useRef();
  // const menuId = "main-menu";

  // useOnClickOutside(node, () => setOpen(false))

  return (
    <div>
      <Burger/>
      {/* <Menu/> */}
    </div>
  );
};

export default Header;
