import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hamburgerMenu/hooks';
import { GlobalStyles } from './hamburgerMenu/global';
import { theme } from './hamburgerMenu/theme';
import { Burger, Menu } from './hamburgerMenu/hamburger-menu';
import FocusLock from 'react-focus-lock';

function NavbarBurger() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        
      </>
    </ThemeProvider>
  );
}

export default NavbarBurger;