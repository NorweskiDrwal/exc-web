import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../style/MainControl.css';

const mainControl = ({openMenu, open}) => (
  <Container>
    <Row>
      <Col className="fullscreen">
        <div className={"ctrl__back pin circle " + (open ? 'openMenu--burst' : '')} ></div>
        <div className="ctrl__main pin circle" onMouseOver={openMenu}>
          <p className="pin">profile</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default mainControl;