import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import './styles/LoginForm.css';

const loginForm = (props) => (
  <Form inline className="form__log">
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Input type="email" name="email" id="email" placeholder="email" />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Input type="password" name="password" id="password" placeholder="password" />
    </FormGroup>
    <Button>Login</Button>
  </Form>
);

export default loginForm;