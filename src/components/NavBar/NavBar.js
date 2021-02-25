import React from 'react';
// import logo from '../../sophieknits-hm.png';
//import NavItem from '../NavItem/NavItem';

// import { Link } from 'gatsby'; // can be react-router-dom, reach router
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useFloatNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/float';

export default NavBar
  function NavBar() {
    return (
      <>
        <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>
          <NavItem active>Systems</NavItem>
          {/* <NavItem as={Link} to={'/components/menu/'}>Illustrations</NavItem> */}
          <NavItem>Templates</NavItem>
          <NavItem>Mockups</NavItem>
        </NavMenu>
      </>
    );
  };

// const NavBar = () => {

//   return (
//     <header> 
//       <nav class="pa3 pa4-ns">
//         <a
//           class="link dim b f1 f-headline-ns tc db mb3 mb4-ns"
//           href="/"
//           title="Home">
//           <img src={logo} center alt='SophieKnits_' />
//         </a>

//         <div class="tc pb3">
//           <NavItem
//             title="instagram"
//             name="Instagram"
//             url="https://www.instagram.com/sophieknits_/" />
//           <NavItem
//             title="tools"
//             name="Tools"
//             url="/" />
//           <NavItem
//             title="github"
//             name="Github"
//             url="https://github.com/sophiewo/sophieknits" />
//         </div>
//       </nav>
//     </header>
//   )
// };// export default NavBar