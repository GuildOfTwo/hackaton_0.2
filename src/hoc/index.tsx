import { FC } from 'react';

import { Navigate } from 'react-router-dom';
import { Page } from '../utils/constants/navigation';
import { useAppSelector } from '../hooks';
import { getAuthStatus } from '../store/auth';

export function withRequireAuth(WrappedComponent: FC) {
  return () => {
    // let isUserAuthenticated = useAppSelector(getAuthStatus);
    let isUserAuthenticated = true;

    if (isUserAuthenticated) {
      return <WrappedComponent />;
    }

    return <Navigate to={Page.AUTHORIZATION} replace />;
  };
}
