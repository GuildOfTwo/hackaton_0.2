import { Route, Routes } from 'react-router-dom';
import { Page, SubPage } from '../utils/constants/navigation';
import MainPage from '../pages/Main';
import { Unavailable } from '../pages/unavailable';
import { NotFound } from '../pages/not-found';
import { Dashboard } from '../views/Dashboard';
import { CoursesList } from '../views/CoursesList';
import { Authorization } from '../pages/authorization/authorization';
import { AllUserStats } from '../views/AllUserStats/index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Page.AUTHORIZATION} element={<Authorization />} />
      <Route path={Page.MAIN} element={<MainPage />}>
        <Route path={Page.DASHBOARD} element={<Dashboard />} />
        <Route path={Page.SELECTED_COURSES} element={<CoursesList />} />
        <Route path={Page.ALL_COURSES} element={<CoursesList />} />
        <Route path={Page.ALL_USER_STATS} element={<AllUserStats />} />

        <Route path={SubPage.MANAGMENT_COURSE} element={<CoursesList />} />
        <Route path={SubPage.ENGINEERING_COURSE} element={<CoursesList />} />
        <Route path={SubPage.CLIENT_SERVICE_COURSE} element={<CoursesList />} />
        <Route path={SubPage.DESIGN_COURSE} element={<CoursesList />} />
        <Route path={SubPage.PROJECT_MANAGMENT_COURSE} element={<CoursesList />} />
      </Route>
      <Route path={Page.UNAVAILABLE} element={<Unavailable />} />
      <Route path={Page.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
