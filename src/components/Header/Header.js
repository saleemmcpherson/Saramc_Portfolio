import React, { useState, useRef } from "react";
// import { useOnClickOutside } from './hooks';
import { Burger, Menu } from "../Burger/index"
 

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  // useOnClickOutside(node, () => setOpen(false))

 
    return (
      <div>
      {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
      {/* <Menu open={open} setOpen={setOpen} id={menuId} /> */}
    </div>)
    ;
  
}

export default Header;
