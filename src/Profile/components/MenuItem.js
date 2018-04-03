// import React from 'react';

// import '../style/MainMenu.css';

// const menuItem = ({ name, icon, itemName }) => (
//   <div className="menu__item circle">
//     <div className="menu__item--in circle" data-name={name} >
//       <i class={"fa " + icon} aria-hidden="true" />
//     </div>
//   </div>
// );

// export default menuItem;

import React, { Component } from 'react';

import '../style/MainMenu.css';

class MenuItem extends Component {

  render() {
    return (
      <div className="menu__item circle">
        <div className="menu__item--in circle" data-name={this.props.name} onMouseOver={this.props.openName} onMouseOut={this.props.closeName} >
          <i class={"fa " + this.props.icon} aria-hidden="true" />
        </div>
      </div>
    )
  }
};

export default MenuItem;
