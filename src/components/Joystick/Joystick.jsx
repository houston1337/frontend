import React, {useState} from 'react';
import {Button, Space, Col, Row, Layout} from 'antd';
import {ArrowUpOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowDownOutlined} from '@ant-design/icons';
import {Content} from "antd/es/layout/layout";

const Joystick = () => {
    const [size, setSize] = useState('large');
    return (
        <Layout>
            <Content style={{
                justifyContent: "center", alignItems: "center", margin: "100px",
                width: "100%", height: "100%"
            }}>
                <div>
                    <Row gutter={[48, 32]}>
                        <Col><Button size={size}><ArrowUpOutlined rotate={-45}/></Button></Col>
                        <Col offset={1}><Button size={size}><ArrowUpOutlined/></Button></Col>
                        <Col offset={1}><Button size={size}><ArrowUpOutlined rotate={45}/></Button></Col>
                    </Row>

                    <Row gutter={[48, 32]}>
                        <Col>
                            <Button size={size}><ArrowLeftOutlined/></Button>
                        </Col>
                        <Col offset={1}>
                            <Button size={size} type="hidden" disabled={true}>
                                <ArrowRightOutlined style={{fontSize: '16px', color: "transparent"}}/>
                            </Button>
                        </Col>
                        <Col offset={1}>
                            <Button size={size}><ArrowRightOutlined/></Button>
                        </Col>
                    </Row>

                    <Row gutter={[48, 32]}>
                        <Col><Button size={size}><ArrowDownOutlined rotate={45}/></Button></Col>
                        <Col offset={1}><Button size={size}><ArrowDownOutlined/></Button></Col>
                        <Col offset={1}><Button size={size}><ArrowDownOutlined rotate={-45}/></Button></Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button size={size} type="primary" danger>STOP</Button>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
}
export default Joystick;