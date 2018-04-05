import React from 'react';

import DrawerItem from './DrawerItem';

const navigationDrawer = ({ 
  menuList, 
  getItemName
}) => (
  <div className="navigation__drawer">
    <ul className="navigation__drawer--menu">
      <li className="navigation__drawer--item"></li>
      {menuList.map(item => (
        <DrawerItem 
          {...item} 
          menuList={menuList}
          key={item.name}
          getItemName={getItemName} />
      ))}
    </ul>
  </div>
);

export default navigationDrawer;
