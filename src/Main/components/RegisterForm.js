import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './styles/RegisterForm.css';

const registerForm = () => (
  <Card className="form__reg">
    <CardBody>
      <CardTitle className="text-center">Register now. The world of excieties awaits!</CardTitle>
      <hr />
      <CardText>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="email" required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="password" required />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              I agree with Terms & Conditions
            </Label>
          </FormGroup>
          <Button block>Register</Button>
        </Form>
        <hr />
        <CardTitle className="text-center">Or sign up with:</CardTitle>
        <Button color="primary" block><i class="fa fa-facebook-official" aria-hidden="true"></i><p>Facebook</p></Button>
        <Button color="danger" block><i class="fa fa-google-plus-square" aria-hidden="true"></i><p>Google</p></Button>
      </CardText>
    </CardBody>
  </Card>
);

export default registerForm;
