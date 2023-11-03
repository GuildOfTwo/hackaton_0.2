import { Layout,theme } from 'antd';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import SliderMenu from "./style";
import React from 'react';


const Slider = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Sider } = Layout;
  const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);

      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );
  return (<Sider style={{ background: colorBgContainer }} width={200}>
    <SliderMenu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      items={items2}
    />
  </Sider>)
}

export default Slider;