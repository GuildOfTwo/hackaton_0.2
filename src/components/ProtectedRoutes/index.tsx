import { Navigate, useLocation } from 'react-router-dom';
import {
  TProtectedRoute,
  TProtectedRouteByLoggin,
  TProtectedRouteByPower,
} from '../../utils/types/types';
import { Page } from '../../utils/constants/navigation';

const ProtectedRoute = ({ onlyForLogged = true, component, userType }: TProtectedRoute) => {
  // const user = useSelector((store) => store.user.user);
  const user = { type: 'hr' }; /// что бы линтер не орал пока стораджа с пользователем по логину нет.
  const location = useLocation();

  if (!onlyForLogged && user) {
    const { from } = location.state || { from: { pathname: Page.MAIN } };
    return <Navigate to={from} />;
  }
  if (onlyForLogged && user) {
    const { from } = location.state || { from: { pathname: Page.MAIN } };
    return <Navigate to={from} />;
  }

  if (onlyForLogged && user) {
    const { from } = location.state || { from: { pathname: Page.MAIN } };
    return <Navigate to={from} />;
  }
  if (onlyForLogged && !user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  if (onlyForLogged && user.type !== `${userType}`) {
    const { from } = location.state || { from: { pathname: Page.MAIN } };
    return <Navigate to={from} />;
  }
  return component;
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
