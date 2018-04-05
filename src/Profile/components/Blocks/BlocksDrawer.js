import React from 'react';

const blocksDrawer = ({ itemName, closeBlocksDrawer }) => (
  <div className="blocks__drawer">
    <i 
      className="fa fa-chevron-circle-right" 
      aria-hidden="true" 
      onClick={closeBlocksDrawer} />
    <p className="blocks__title">{ itemName }</p>
  </div>
);

export default blocksDrawer;
