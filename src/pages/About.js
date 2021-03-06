import React from 'react';
import { Col } from 'react-bootstrap';
import { H1, Hr } from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import AboutMe from '../components/AboutMe';

function About() {
    return (
        <Col sm={12} md={10} lg={8}>
            <Jumbotron>
                <H1>About Me</H1>
                <Hr />
                <AboutMe />
            </Jumbotron>
        </Col>
    )
}

export default About;