import { Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ALL_COURSES_URI } from '../../utils/constants/navigation';
import { SliderButton } from './styled';


const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div style={{ position: "absolute", height: "calc(100% - 66px)", zIndex: '900' }}>
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
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to={ALL_COURSES_URI}>Назначенные курсы</Link>
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to={ALL_COURSES_URI}>Назначенные курсы</Link>
            },
          ]}
        />
      </Sider>
      <SliderButton
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
       /></div>
  )
}

export default Slider;