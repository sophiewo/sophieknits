import React from 'react';
import logo from '../../sophieknits-hm.png'
import NavItem from '../NavItem/NavItem'

const navBar = () => {

  return (
    <header>
      <nav class="pa3 pa4-ns">

        <a
          class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
          href="#"
          title="Home">
          <img src={logo} center alt='SophieKnits_' />
        </a>
        <div class="tc pb3">
      <NavItem
        label="instagram"
        title="Instagram"
        url="https://www.instagram.com/sophieknits_/" />
      
        </div>
      </nav>
    </header>
  )
};

export default navBar;