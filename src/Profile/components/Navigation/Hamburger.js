import React from 'react';
import { Button } from 'reactstrap';

const hamburger = ({ hamburgerSwitch, openDrawer }) => (
  <Button className="circle hamburger" color="warning" onClick={hamburgerSwitch} >
    { !openDrawer && (<i className="fa fa-bars" aria-hidden="true" /> )}
    { openDrawer && (<i className="fa fa-times" aria-hidden="true" /> )}
  </Button>
);

export default hamburger;