import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from './Intervals';
import CountdownComponent from './Countdown';

function TargetLow(props) {

    return (
        <>
            <Row>
                <Col>TargetLow</Col>
            </Row>
            <Row>
                <Col>
                    <Intervals {...props}/>
                </Col>
            </Row>
            <Row>
                <Col>
                <CountdownComponent />
                </Col>
            </Row>
        </>
    );
}

export default TargetLow;