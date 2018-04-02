import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ContentCard from '../components/ContentCard';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

class MainContainer extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Col xs="12" md="6">
						<ContentCard />
					</Col>
					<Col xs="12" md="5">
						<LoginForm />
						<RegisterForm />
					</Col>
					<Col xs="12" md="1"></Col>
				</Row>
			</Container>
		);
	};
};

export default MainContainer;