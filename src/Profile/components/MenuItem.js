import React from 'react';

import '../style/MainMenu.css';

const menuItem = ({ 
  name, 
  icon, 
  closeName, 
  getItemName, 
  assignFuncToName
}) => (
  <div className="menu__item circle">
    <div 
      className="menu__item--in circle" 
      data-name={name} 
      onMouseOver={() => getItemName(name)} 
      onMouseOut={closeName} 
      onClick={() => assignFuncToName(name)} >
      <i className={"fa " + icon} aria-hidden="true" />
    </div>
  </div>
);

export default menuItem;
