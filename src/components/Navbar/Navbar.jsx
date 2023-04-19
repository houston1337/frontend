import React from "react";
import {FileImageOutlined, DatabaseOutlined, ScanOutlined} from '@ant-design/icons';
import {Menu, Layout} from 'antd';
import {useState} from 'react';
import {Content} from "antd/es/layout/layout";

const items = [
    {
        label: 'Neural networks',
        key: 'NN',
    },
    {
        label: 'Imaging',
        key: 'img',
        icon: <FileImageOutlined/>,

    },
    {
        label: 'Database',
        key: 'DB',
        icon: <DatabaseOutlined/>,
    },
    {
        label: (<a href="/scanning">Scanning</a>),
        key: 'scanning',
        icon: <ScanOutlined/>
    },
];

const Navbar = () => {
    return (
        <Layout style={{border: "solid"}}>
            <Content style={{ justifyContent: "center", alignItems: "center"}}>
                <Menu mode="horizontal" items={items} theme={"dark"}/>
            </Content>
        </Layout>
    )

};
export default Navbar;