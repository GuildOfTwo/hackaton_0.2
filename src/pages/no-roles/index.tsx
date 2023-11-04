import React, { FC } from 'react';
// navigation

// components
import { Button, Result } from 'antd';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getAccessToken, logout } from 'store/auth';
import { REACT_APP_LOGOUT_ENDPOINT_URL } from 'global-config';
import { useKeycloak } from '@react-keycloak/web';

export const NoRoles: FC = () => {
  let { keycloak, initialized } = useKeycloak();
  let token = useAppSelector(getAccessToken);

  let dispatch = useAppDispatch();

  function logOut() {
    dispatch(logout());
    fetch(REACT_APP_LOGOUT_ENDPOINT_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log('Ошибка LOGOUT GET запроса -', err.message);
      });
  }
  console.log('Для технической поддержки: ', keycloak.idToken);
  return (
    <Result
      status='403'
      title='403'
      subTitle='Ошибка доступа. Для получения роли обратитесь к руководителю.'
      extra={
        <Button type='primary' onClick={logOut}>
          Вернуться на главную и выйти из системы
        </Button>
      }
    />
  );
};
