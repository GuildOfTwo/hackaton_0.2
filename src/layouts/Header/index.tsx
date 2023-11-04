
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLogo } from "./styled";
import Logo from './../../assets/logo/logo.svg'
import { Link } from "react-router-dom";
import { Page } from "../../utils/constants/navigation";

const Header = () => {
  return (
    <HeaderWrapper >
      <HeaderLogo src={Logo}></HeaderLogo>
      <Link to={Page.AUTHORIZATION}><Avatar size="large" icon={<UserOutlined />} /></Link>
    </HeaderWrapper>
  )
}

export default Header