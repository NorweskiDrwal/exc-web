import React from 'react';
import { Button } from 'reactstrap';

import '../../style/Hamburger.css';

const hamburger = ({ hamburgerSwitch, open }) => (
  <Button className="circle hamburger" color="secondary" onClick={hamburgerSwitch}>
    { !open && (<i class="fa fa-bars" aria-hidden="true" /> )}
    { open && (<i class="fa fa-times" aria-hidden="true" /> )}
  </Button>
);

export default hamburger;