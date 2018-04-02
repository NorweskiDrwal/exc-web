import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import './styles/LoginForm.css';

const loginForm = (props) => (
  <Form className="form__log">
    <Container>
      <Row>
        <Col xs="12" xl="4" className="Col">
          <FormGroup className="mt-2 mb-1">
            <Input type="email" name="email" placeholder="email" required />
          </FormGroup>
        </Col>
        <Col xs="12" xl="4" className="Col">
          <FormGroup className="mt-2 mb-1">
            <Input type="password" name="password" placeholder="password" required />
          </FormGroup>
        </Col>
        <Col xs="12" xl="4" className="Col">
          <Button className="mt-2 mb-1">Login</Button>
        </Col>
      </Row>
    </Container>
  </Form>
);

export default loginForm;