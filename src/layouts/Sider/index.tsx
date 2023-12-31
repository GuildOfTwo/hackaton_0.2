import { MenuProps } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  PlusOutlined,
  FolderAddOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainSider, SliderButton, SliderMenu, SliderWrapper, UserWrapper } from './styled';
import { Page, SubPage } from '../../utils/constants/navigation';
import { ThemeToggleBar } from '../../components/userCard';
import { useAppSelector } from '../../hooks';

type MenuItem = Required<MenuProps>['items'][number];

const Slider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const userRoles = useAppSelector((store) => store.user.user?.accessRoles);
  const checkUserRole = () => {
    if (userRoles?.includes('HR')) {
      return 'HR';
    }
    return 'USER';
  };
  //TODO: цвет меню должен зависить от темы глобальной
  const itemsForUser: MenuItem[] = [
    getItem(<Link to={Page.DASHBOARD}>Dashboard</Link>, '1', <PieChartOutlined />),
    getItem('Курсы', '2', <DesktopOutlined />, [
      getItem(<Link to={Page.ALL_COURSES}>Все курсы</Link>, '20'),
      getItem(<Link to={SubPage.MANAGMENT_COURSE}>Управление</Link>, '21'),
      getItem(<Link to={SubPage.ENGINEERING_COURSE}>Программирование</Link>, '22'),
      getItem(<Link to={SubPage.CLIENT_SERVICE_COURSE}>Продажи</Link>, '23'),
      getItem(<Link to={SubPage.DESIGN_COURSE}>Дизайн</Link>, '24'),
      getItem(<Link to={SubPage.PROJECT_MANAGMENT_COURSE}>Управление проектами</Link>, '25'),
      getItem(<Link to={SubPage.FOR_ALL}>Для всех</Link>, '26'),
    ]),
    getItem(
      <Link to={Page.SELECTED_COURSES}>Назначенные курсы</Link>,
      '30',
      <VideoCameraOutlined />
    ),
  ];

  const itemsForHR: MenuItem[] = [
    getItem(<Link to={Page.DASHBOARD}>Dashboard</Link>, '1', <PieChartOutlined />),
    getItem(<Link to={Page.NEW_COURSE}>Добавить курс</Link>, '40', <FolderAddOutlined />),
    getItem(<Link to={Page.CREATE_USER}>Создание Пользователя</Link>, '4', <PlusOutlined />),
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
        <SliderMenu
          defaultSelectedKeys={['1']}
          mode='inline'
          items={checkUserRole() === 'HR' ? itemsForHR : itemsForUser}
        />
        <UserWrapper>
          {collapsed ? (
            <UserOutlined onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <ThemeToggleBar />
          )}
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
