import React from "react";
import Canvas from "../Canvas/Canvas";
import Joystick from "../Joystick/Joystick";
import {Col, Row} from 'antd';

const Scanning = () => {
    return(
        <>
            <Row>
                <Col><Canvas/></Col>
                <Col><Joystick/></Col>
            </Row>
        </>
    )
}

export default Scanning;