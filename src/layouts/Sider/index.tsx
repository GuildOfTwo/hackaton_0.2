import { Menu, MenuProps } from 'antd';
import {
  UserOutlined, VideoCameraOutlined, UploadOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, DesktopOutlined,
  TeamOutlined, FileOutlined
} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { HEADER_HEIGHT } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { SliderButton } from './styled';
import { Page } from '../../utils/constants/navigation';

type MenuItem = Required<MenuProps>['items'][number];


const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuItem[] = [
    getItem(<Link to={Page.DASHBOARD}>Dashboard</Link>, '1', <PieChartOutlined />),
    getItem(<Link to={Page.ALL_COURSES}>Все курсы</Link>, '2', <DesktopOutlined />, [
      getItem(<Link to={Page.SELECTED_COURSES}>Менеджмент</Link>, '3'),
    ]),
    getItem(<Link to={Page.SELECTED_COURSES}>Назначенные курсы</Link>, 'sub1', <UserOutlined />)
  ];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  return (
    <div style={{ position: "absolute", height: "calc(100% - 66px)", zIndex: '900' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: 'transparent', margin: '66px 0 0', height: '100%' }}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ height: `calc(100vh - ${HEADER_HEIGHT})` }}
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