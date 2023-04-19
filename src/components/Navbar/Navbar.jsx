import React from 'react';
import { FileImageOutlined, DatabaseOutlined, ScanOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: 'Neural networks',
    key: 'NN',
    icon: <FileImageOutlined />,
  },
  {
    label: 'Imaging',
    key: 'img',
    icon: <FileImageOutlined />,

  },
  {
    label: 'Database',
    key: 'DB',
    icon: <DatabaseOutlined />,
  },
  {
    label: (<Link to="/scanning">Scanning</Link>),
    key: 'scanning',
    icon: <ScanOutlined />,
  },
];

function Navbar() {
  return (
    <Menu style={{ justifyContent: 'space-around', alignItems: 'center' }} mode="horizontal" items={items} theme="light" />
  );
}
export default Navbar;
