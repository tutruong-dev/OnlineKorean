import React from 'react';
import Logo from './Footer/Logo';
import Help from './Footer/Help';
import Program from './Footer/Program';
import Contact from './Footer/Contact';
import Copyright from './Footer/Copyright';
import Scroll from './Footer/Scroll';
import '../index.css';

function Footer() {
  return (
    <footer className="footer-container">
      <Logo />
      <Help />
      <Program/>
      <Contact />
      <Copyright />
      <Scroll/>
    </footer>
  );
}

export default Footer;