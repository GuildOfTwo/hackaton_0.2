import { Navigate, useLocation } from 'react-router-dom';
import {
  TProtectedRoute,
  TProtectedRouteByLoggin,
  TProtectedRouteByPower,
} from '../../utils/types/types';
import { AUTHORIZATION_URI, DASHBOARD_URI } from '../../utils/constants/navigation';
import { useAppSelector } from '../../hooks';

const ProtectedRoute = ({ onlyForLogged = true, element, userType }: TProtectedRoute) => {
  const isLogin = useAppSelector((store) => store.auth.isLogin);
  const userRoles = useAppSelector((store) => store.user.user?.accessRoles);
  const userRole = userRoles?.find(item => item === `${userType}`);
  const location = useLocation();

  if (!userType && !onlyForLogged && isLogin) {
    const { from } = location.state || { from: { pathname: `/${DASHBOARD_URI}` } };
    console.log(from);
    return <Navigate to={from} />;
  }

  if (!userType && onlyForLogged && !isLogin) {
    return <Navigate to={`/${AUTHORIZATION_URI}`} state={{ from: location }} />;
  }

  if (!userType && onlyForLogged && isLogin) {
    return element;
  }

  if (userType && onlyForLogged && userRole !== `${userType}`) {
    const { from } = location.state || { from: { pathname: `/${DASHBOARD_URI}` } };
    return <Navigate to={from} />;
  }

  return element;
};

export const RouteForNonLoggedUser = (props: TProtectedRouteByLoggin) => (
  <ProtectedRoute onlyForLogged={false} {...props} />
);
export const RouteForLoggedUser = (props: TProtectedRouteByLoggin) => (
  <ProtectedRoute onlyForLogged={true} {...props} />
);
export const RouteForHROnly = (props: TProtectedRouteByPower) => (
  <ProtectedRoute onlyForLogged={true} userType={'HR'} {...props} />
);
