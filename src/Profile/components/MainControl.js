import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../style/MainControl.css';
import MainMenu from '../components/MainMenu';
import Backdrop from '../../common/Backdrop';

const mainControl = ({openMenu, closeMenu, open, menuList, backdrop}) => (
  <Container fluid>
    <Row>
      <Col className="fullscreen">
        { backdrop && ( <Backdrop closeMenu={closeMenu} /> )}
        <div className={"ctrl__back pin circle " + (open && 'background--burst')} />
        <MainMenu 
          open={open} 
          menuList={menuList} />
        <div className="ctrl__main pin circle" onMouseOver={openMenu}>
          <p className="pin">profile</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default mainControl;