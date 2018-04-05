import React, { Fragment } from 'react';

import Hamburger from './Hamburger';
import Search from './Search';
import Logout from './Logout';
import NavigationDrawer from './NavigationDrawer';

import '../../style/Navigation.css';

const navigation = ({ 
  hamburgerSwitch, 
  searchSwitch, 
  openSearch, 
  menuList, 
  openDrawer,
  getItemName
}) => (
  <Fragment>
    <Hamburger          
      hamburgerSwitch={hamburgerSwitch}
      openDrawer={openDrawer} />
    <Search 
      searchSwitch={searchSwitch}
      openSearch={openSearch} />
    <Logout />
    { openDrawer && (<NavigationDrawer menuList={menuList} getItemName={getItemName} />) }
  </Fragment>
);

export default navigation;