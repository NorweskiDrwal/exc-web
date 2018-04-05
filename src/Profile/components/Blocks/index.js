import React, { Fragment } from 'react';

import BlocksDrawer from './BlocksDrawer';

import '../../style/Blocks.css';

const block = ({ openDrawer, itemName, closeBlocksDrawer }) => (
  <Fragment>
    { openDrawer && (<BlocksDrawer itemName={itemName} closeBlocksDrawer={closeBlocksDrawer} />) }
  </Fragment>
)

export default block;
