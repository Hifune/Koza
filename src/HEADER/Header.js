import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import Vk from './Vk';
import Email from './Email';
import Tell from './Tell';
import './Header.css';


function Header() {
  return (
    <div className="Header">
      <Logo/>
      <Email/>
      <Tell/>
      <Vk/>
      <Menu/>
      
    </div>
  );
}

export default Header;