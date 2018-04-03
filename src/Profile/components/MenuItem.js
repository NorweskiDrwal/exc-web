import React from 'react';

import '../style/MainMenu.css';

const menuItem = ({ icon }) => (
  <div className="menu__item circle">
    <div className="menu__item--in circle">
      <i class={"fa " + icon} aria-hidden="true"></i>
    </div>
  </div>
);

export default menuItem;