import React from 'react';
import { Button } from 'reactstrap';

import '../style/Logout.css';

const logout = (props) => (
  <Button className="circle logout" color="danger">
    <i class="fa fa-power-off pin" aria-hidden="true"></i>
  </Button>
);

export default logout;