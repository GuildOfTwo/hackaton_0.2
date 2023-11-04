
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLogo } from "./styled";
import Logo from './../../assets/logo/logo.svg'

const Header = () => {
  return (
    <HeaderWrapper >
      <HeaderLogo src={Logo}></HeaderLogo>
      <Avatar size="large" icon={<UserOutlined />} />
    </HeaderWrapper>
  )
}

export default Header