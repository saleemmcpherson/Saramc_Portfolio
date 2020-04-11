import React, { useState, useRef } from "react";
import { useOnClickOutside } from '../../hooks';
import { Burger, Menu } from "../Burger";
import FocusLock from 'react-focus-lock';

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false))

  return (
    <div>
      <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
          </div>
    </div>
  );
};

export default Header;
