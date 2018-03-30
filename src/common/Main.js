import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ContentCard from '../components/ContentCard';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const main = (props) => (
	<main>
		<Container fluid>
			<Row>
				<Col xs="12" md="7">
					<ContentCard />
				</Col>
				<Col xs="12" md="4">
					<LoginForm />
					<RegisterForm />
				</Col>
				<Col xs="12" md="1"></Col>
			</Row>
		</Container>
	</main>
);

export default main;