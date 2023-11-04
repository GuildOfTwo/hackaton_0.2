import React, { FC } from 'react';
// navigation
import { useNavigate } from 'react-router-dom';
// components
import { Button, Result } from 'antd';
import Header from '../../layouts/Header';
import { HeaderLogo } from '../../layouts/Header/styled';
import { MAIN_PAGE_URI } from '../../utils/constants/navigation';


// TODO: для 404 и 503 сделать универсальную страницу и прокидывать туда статус ошибок

export const Unavailable: FC = () => {
  const navigate = useNavigate();

  function goToMainPage() {
    navigate(MAIN_PAGE_URI, { replace: true });
  }

  return (
    <>
      {/* <Header>
        <HeaderLogo />
      </Header> */}
      <Result
        status='500'
        title='503'
        subTitle='Cервис временно недоступен'
        extra={
          <Button type='primary' onClick={goToMainPage}>
            Вернуться на главную
          </Button>
        }
      />
    </>
  );
};
