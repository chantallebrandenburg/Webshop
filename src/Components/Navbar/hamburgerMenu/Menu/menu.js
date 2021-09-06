import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        Home
      </a>
      <a href="/Aboutpage" tabIndex={tabIndex}>
        About
        </a>
      <a href="/Product" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">📩</span> */}
        Products
        </a>
        <a href="/Contactpage" tabIndex={tabIndex}>
        {/* <span aria-hidden="true">📩</span> */}
        Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;