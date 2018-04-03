import React, { Fragment } from 'react';

import Hamburger from './Hamburger';
import Search from './Search';
import Logout from './Logout';

const navigation = ({ hamburgerSwitch, open, searchSwitch, openSearch }) => (
  <Fragment>
    <Hamburger          
      hamburgerSwitch={hamburgerSwitch}
      open={open} />
    <Search 
      searchSwitch={searchSwitch}
      openSearch={openSearch} />
    <Logout />
  </Fragment>
);

export default navigation;