import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

import './styles/ContentCard.css';

import logo from '../../assets/logo.png';

const contentCard = (props) => (
  <Card className="cont__card">
    <CardBody>
      <CardTitle className="CardTitle">Foster Your Excieties</CardTitle>
      <CardImg id="cont__logo" img src={logo} alt="logo" />
      <CardText className="CardText">
        <span><strong>Exciety</strong></span> is the first social media platform focused solely on users' passions.<br />
        Join in and share your hobbies with milions of users around the globe.
      </CardText>
    </CardBody>
  </Card>
);

export default contentCard;