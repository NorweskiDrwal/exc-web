import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../style/MainControl.css';
import MainMenu from '../components/MainMenu';
import ItemName from '../components/ItemName';
import Backdrop from '../../common/Backdrop';

const mainControl = ({
  openMenu, 
  closeMenu, 
  open, 
  menuList, 
  backdrop,
  itemName, 
  openName, 
  closeName, 
  name,
  getItemName,
  assignFuncToName
}) => (
  <Container fluid>
    <Row>
      <Col className="fullscreen">
        { backdrop && ( <Backdrop closeMenu={closeMenu} /> )}
        <div className={"ctrl__back pin circle " + (open && 'background--burst')} />
        <MainMenu 
          open={open}
          openName={openName} 
          closeName={closeName} 
          menuList={menuList}
          getItemName={getItemName}
          assignFuncToName={assignFuncToName} />
        <div className="ctrl__main pin circle" onMouseOver={openMenu} />
        <ItemName itemName={itemName} name={name} />
      </Col>
    </Row>
  </Container>
);

export default mainControl;