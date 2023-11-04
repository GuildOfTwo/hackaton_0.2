
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLogo } from "./styled";
import Logo from './../../assets/logo/logo.svg'
import { Link } from "react-router-dom";
import { MAIN_PAGE_URI } from "../../utils/constants/navigation";

const Header = () => {
  return (
    <HeaderWrapper >
      <Link to={MAIN_PAGE_URI}><HeaderLogo src={Logo}></HeaderLogo></Link>
      <Avatar size="large" icon={<UserOutlined />} />
    </HeaderWrapper>
  )
}

export default Header