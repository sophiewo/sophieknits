import React from 'react';
import logo from '../../sophieknits-hm.png';
import NavItem from '../NavItem/NavItem';
// import bgImages from '../../assets/img/knit-bg1.jpg'

// import ScrollSection from '../ScrollSection/ScollSection';
// import { ScrollingProvider, Section } from 'react-scroll-section';

const NavBar = () => {

  return (
    <header> 
      <nav class="pa3 pa4-ns">
        <a
          class="link dim b f1 f-headline-ns tc db mb3 mb4-ns"
          href="/"
          title="Home">
          <img src={logo} center alt='SophieKnits_' />
        </a>

        <div class="tc pb3">
          <NavItem
            title="instagram"
            name="Instagram"
            url="https://www.instagram.com/sophieknits_/" />
          <NavItem
            title="tools"
            name="Tools"
            url="/" />
          <NavItem
            title="github"
            name="Github"
            url="https://github.com/sophiewo/sophieknits" />
        </div>
      </nav>
    </header>
  )
};

export default NavBar;