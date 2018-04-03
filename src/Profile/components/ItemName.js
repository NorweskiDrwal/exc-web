import React from 'react';

import '../style/ItemName.css';

const itemName = ({ itemName, openName, closeName, name }) => (
  <p className={"item__name pin " + (name && 'item__name--show')}>{ itemName }</p>
);

export default itemName;