import React from 'react';
import {
  Button, Col, Row, Layout,
} from 'antd';
import {
  ArrowUpOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowDownOutlined,
} from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import './joystick.css';

const sizeButton = 'large';
const test = 8;

function Joystick() {
  return (
    <Layout style={{flex: 1}}>
      <Content style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: '100px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <Row gutter={[40, 60]}>
          <Col span={test} className="customColumn">
            <Button size={sizeButton} className="customButton"><ArrowUpOutlined rotate={-45} /></Button>
          </Col>
          <Col span={test} className="customColumn">
            <Button size={sizeButton} className="customButton"><ArrowUpOutlined /></Button>
          </Col>
          <Col span={test} className="customColumn">
            <Button size={sizeButton} className="customButton"><ArrowUpOutlined rotate={45} /></Button>
          </Col>

          <Col span={test} className="customColumn">
            <Button size={sizeButton} className="customButton"><ArrowLeftOutlined /></Button>
          </Col>
          <Col span={test} className="customColumn">
            <Button size={sizeButton} type="hidden" disabled>
              <ArrowRightOutlined style={{ fontSize: '16px', color: 'transparent' }} />
            </Button>
          </Col>
          <Col span={test} className="customColumn">
            <Button size={sizeButton} className="customButton"><ArrowRightOutlined /></Button>
          </Col>

          <Col span={test} className="customColumn">
            <Button size={sizeButton} className="customButton"><ArrowDownOutlined rotate={45} /></Button>
          </Col>
          <Col span={test} className="customColumn">
            <Button size={sizeButton} className="customButton"><ArrowDownOutlined /></Button>
          </Col>
          <Col span={test} className="customColumn">
            <Button size={sizeButton} className="customButton"><ArrowDownOutlined rotate={-45} /></Button>
          </Col>
        </Row>
        <div style={{ marginTop: '100px' }}>
          <Button size={sizeButton} type="primary" danger>STOP</Button>
        </div>
      </Content>
    </Layout>
  );
}
export default Joystick;
