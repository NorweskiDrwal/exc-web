import React from 'react';
import { Button } from 'reactstrap';

const logout = () => (
  <Button className="circle logout" color="danger">
    <i className="fa fa-power-off pin" aria-hidden="true"></i>
  </Button>
);

export default logout;