import { Avatar, Button, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { HeaderWrapper } from './styled';
// import Logo from './../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';
import { Page } from '../../utils/constants/navigation';
import { MAIN_PAGE_URI } from '../../utils/constants/navigation';

const Header = () => {
  const content = (
    <Link to={Page.AUTHORIZATION}>
      <Button>Выйти</Button>
    </Link>
  );
  return (
    <HeaderWrapper>
      <Link to={MAIN_PAGE_URI}>
        {/* <HeaderLogo src={Logo}></HeaderLogo> */}
        <div style={{ fontSize: '36px', fontWeight: '600' }}>Onboardy</div>
      </Link>
      <Popover content={content}>
        <Avatar size='large' icon={<UserOutlined />} />
      </Popover>
    </HeaderWrapper>
  );
};

export default Header;
