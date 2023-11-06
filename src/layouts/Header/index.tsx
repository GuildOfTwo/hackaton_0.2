import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLogo } from './styled';
import Logo from './../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';
import { Page } from '../../utils/constants/navigation';
import { MAIN_PAGE_URI } from '../../utils/constants/navigation';

const Header = () => {

  return (
    <HeaderWrapper>
      <Link to={MAIN_PAGE_URI}>
        {/* <HeaderLogo src={Logo}></HeaderLogo> */}
        <div style={{fontSize: '36px', fontWeight: '600'}}>Onboardy</div>
      </Link>
      <Link to={Page.AUTHORIZATION}>
        <Avatar size='large' icon={<UserOutlined />} />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
