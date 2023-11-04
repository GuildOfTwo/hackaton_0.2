import { Button, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';


const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (

    <><Sider trigger={null} collapsible collapsed={collapsed} style={{ background: 'transparent', margin: '60px 0 0' }}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
          backgroundColor: 'white',
          background: 'transparent', margin: '60px 0 0'
        }}
      /></>
  )
}

export default Slider;