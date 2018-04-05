import React from 'react';

import '../../style/Modals.css';

const drawerItem = ({ name, icon, getItemName }) => (
  <li 
    className="navigation__drawer--item"
    onClick={() => getItemName(name)} >
    <i className={"fa " + icon} aria-hidden="true" /><span>{name}</span>
  </li>
);

export default drawerItem;
