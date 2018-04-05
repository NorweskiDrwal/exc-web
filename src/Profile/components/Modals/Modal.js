import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const modal = ({ itemName }) => (
  <div className="modal__wrap">
    <Card className="modal__body pin">
      <CardBody>
        <CardTitle>{itemName}</CardTitle>
        <CardText>placeholder</CardText>
      </CardBody>
    </Card>
  </div>
);

export default modal;
