import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../style/MainControl.css';

const mainControl = (props) => (
  <Container>
    <Row>
      <Col className="fullscreen">
        <div className="ctrl__main pin circle">
          <p className="pin">profile</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default mainControl;