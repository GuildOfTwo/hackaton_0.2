import { Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ButtonPopover, HeaderWrapper } from './styled';
// import Logo from './../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';
import { Page } from '../../utils/constants/navigation';
import { MAIN_PAGE_URI } from '../../utils/constants/navigation';
import { requestLogout } from '../../api/requestLogout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/auth';

const Header = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    requestLogout().then(() => dispatch(logout()));
  };
  const isLogin = useAppSelector((store) => store.auth.isLogin);
  const content = (
    <Link to={Page.AUTHORIZATION}>
      {isLogin && <ButtonPopover onClick={handleLogout}>Выйти</ButtonPopover>}
      {!isLogin && <ButtonPopover onClick={handleLogout}>Войти</ButtonPopover>}
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
