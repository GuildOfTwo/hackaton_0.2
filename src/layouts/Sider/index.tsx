import { Button, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { HEADER_HEIGHT } from '../../utils/constants';


const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (

    <div style={{ position: "absolute", height: "calc(100% - 66px)", zIndex: '900' }}>

      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: 'transparent', margin: '66px 0 0', height: '100%' }}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          style={{ height: `calc(100vh - ${HEADER_HEIGHT})` }}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Назначенные курсы',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Все учебные материалы',
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
          width: 20,
          height: 20,
          backgroundColor: 'white',
          background: 'transparent',
          margin: '80px 0 0',
          position: 'absolute',
          top: 0,
          right: '-30px'
        }}
      /></div>
  )
}

export default Slider;