import { MenuProps } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainSider, SliderButton, SliderMenu, SliderWrapper, UserWrapper } from './styled';
import { Page, SubPage } from '../../utils/constants/navigation';
import { UserCard } from '../../components/userCard';

type MenuItem = Required<MenuProps>['items'][number];

const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);
  //TODO: цвет меню должен зависить от темы глобальной
  const items: MenuItem[] = [
    getItem(<Link to={Page.DASHBOARD}>Dashboard</Link>, '1', <PieChartOutlined />),
    getItem('Все курсы', '2', <DesktopOutlined />, [
      getItem(<Link to={Page.ALL_COURSES}>Все курсы</Link>, '20'),
      getItem(<Link to={SubPage.MANAGMENT}>Менеджмент</Link>, '21'),
    ]),
    getItem(
      <Link to={Page.SELECTED_COURSES}>Назначенные курсы</Link>,
      'sub1',
      <VideoCameraOutlined />
    ),
  ];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  return (
    <SliderWrapper>
      <MainSider trigger={null} collapsible collapsed={collapsed}>
        <div className='demo-logo-vertical' />
        <SliderMenu defaultSelectedKeys={['1']} mode='inline' items={items} />
        <UserWrapper>
          {collapsed ? <UserOutlined onClick={() => setCollapsed(!collapsed)} /> : <UserCard />}
        </UserWrapper>
      </MainSider>

      <SliderButton
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
      />
    </SliderWrapper>
  );
};

export default Slider;
