import React from 'react';

import '../style/MainMenu.css';
import MenuItem from './MenuItem';

const mainMenu = ({ 
  open, 
  menuList, 
  openName, 
  closeName, 
  getItemName, 
  assignFuncToName, 
  openModal 
}) => (
  <div className={"menu " + (open && 'menu--burst')}>
    {menuList.map(item => (
      <MenuItem 
        {...item} 
        menuList={menuList} 
        key={item.name} 
        openName={openName} 
        closeName={closeName}
        getItemName={getItemName}
        assignFuncToName={assignFuncToName}
        openModal={openModal} />
    ))}
  </div>
);

export default mainMenu;