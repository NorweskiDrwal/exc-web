import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './styles/ContentCard.css';

const contentCard = (props) => (
  <Card className="cont__card">
    <CardBody>
      <CardTitle>Foster Your Excieties</CardTitle>
      <CardText></CardText>
    </CardBody>
  </Card>
);

export default contentCard;