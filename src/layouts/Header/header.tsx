
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import HeaderWrapper from "./style";

const Header = () => {
  return (
    <HeaderWrapper >
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
    </HeaderWrapper>
  )
}

export default Header