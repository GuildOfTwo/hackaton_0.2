import { Button, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';


const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (

    <div style={{ position: "absolute", height: "calc(100% - 60px)" }}>

      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: 'transparent', margin: '66px 0 0', height: '100%' }}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          style={{ height: '100%' }}
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
          background: 'transparent',
          margin: '60px 0 0',
          position: 'absolute',
          // left: 0,
          top: 0,
          right: '-50px'
        }}
      /></div>
  )
}

export default Slider;