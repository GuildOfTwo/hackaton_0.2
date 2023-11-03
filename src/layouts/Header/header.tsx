
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLogo } from "./style";
import Logo from './../../assets/logo/111.svg'

const Header = () => {
  return (
    <HeaderWrapper >
      <HeaderLogo src={Logo}></HeaderLogo>
      <Avatar size="large" icon={<UserOutlined />} />
    </HeaderWrapper>
  )
}

export default Header