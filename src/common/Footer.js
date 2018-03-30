import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo from '../assets/logo.png';

const footer = (props) => (
	<footer>
		<div className="text-center">
			<Container fluid>
				<Row>
					<Col></Col>
					<Col>
						<img src={logo} alt="logo" />
					</Col>
					<Col></Col>
				</Row> 
			</Container>
		</div>
	</footer>
);

export default footer;