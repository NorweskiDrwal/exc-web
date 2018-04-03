import React from 'react';

import '../style/MainMenu.css';
import MenuItem from './MenuItem';

const mainMenu = ({ open, menuList }) => (
  <div className={"menu " + (open && 'menu--burst')}>
    {menuList.map(item => (
      <MenuItem {...item} menuList={menuList} key={item.name} />
    ))}
  </div>
);

export default mainMenu;