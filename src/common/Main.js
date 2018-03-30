import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import RegisterForm from '../components/RegisterForm';

const main = (props) => (
	<main>
		<Container fluid>
			<Row>
				<Col xs="12" md="7"></Col>
				<Col xs="12" md="4">
					<RegisterForm />
				</Col>
				<Col xs="12" md="1"></Col>
			</Row>
		</Container>
	</main>
);

export default main;