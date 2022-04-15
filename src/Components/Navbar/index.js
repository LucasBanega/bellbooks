import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Bell</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Nosotros
          </NavLink>
          <NavLink to='/libros' activeStyle>
            Libros
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contacto
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Registrarse
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Ingresar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;