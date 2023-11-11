import { Route, Routes } from 'react-router-dom';
import { Page, SubPage } from '../utils/constants/navigation';
import MainPage from '../pages/Main';
import { Unavailable } from '../pages/unavailable';
import { NotFound } from '../pages/not-found';
import { HRDashboard } from '../views/HRDashboard';
import { CoursesList } from '../views/CoursesList';
import { Authorization } from '../pages/authorization/authorization';
import { AllUserStats } from '../views/AllUserStats/index';
import { NewCoursePage } from '../views/NewCourse';
import { CreateUser } from '../views/CreateUser/CreateUser';
import { RouteForHROnly, RouteForLoggedUser, RouteForNonLoggedUser } from '../hoc';
import { CoursePage } from '../views/CoursePage';
import { SelectedCourses } from '../views/SelectedCourses';
import { AllCoursesList } from '../views/AllCourses';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={Page.AUTHORIZATION}
        element={<RouteForNonLoggedUser element={<Authorization />} />}
      />
      <Route path={Page.MAIN} element={<RouteForLoggedUser element={<MainPage />} />}>
        <Route path={Page.DASHBOARD} element={<RouteForLoggedUser element={<HRDashboard />} />} />
        <Route
          path={Page.SELECTED_COURSES}
          element={<RouteForLoggedUser element={<SelectedCourses />} />}
        />
        <Route
          path={Page.ALL_COURSES}
          element={<RouteForLoggedUser element={<AllCoursesList />} />}
        />
        <Route path={SubPage.COURSE} element={<RouteForLoggedUser element={<CoursePage />} />} />

        <Route path={Page.ALL_USER_STATS} element={<RouteForHROnly element={<AllUserStats />} />} />
        <Route path={Page.CREATE_USER} element={<RouteForHROnly element={<CreateUser />} />} />

        <Route
          path={SubPage.MANAGMENT_COURSE}
          element={<RouteForLoggedUser element={<CoursesList />} />}
        />
        <Route
          path={SubPage.ENGINEERING_COURSE}
          element={<RouteForLoggedUser element={<CoursesList />} />}
        />
        <Route
          path={SubPage.CLIENT_SERVICE_COURSE}
          element={<RouteForLoggedUser element={<CoursesList />} />}
        />
        <Route
          path={SubPage.DESIGN_COURSE}
          element={<RouteForLoggedUser element={<CoursesList />} />}
        />
        <Route
          path={SubPage.PROJECT_MANAGMENT_COURSE}
          element={<RouteForLoggedUser element={<CoursesList />} />}
        />
        <Route path={SubPage.FOR_ALL} element={<RouteForLoggedUser element={<CoursesList />} />} />

        <Route path={Page.NEW_COURSE} element={<RouteForHROnly element={<NewCoursePage />} />} />
      </Route>
      <Route path={Page.UNAVAILABLE} element={<Unavailable />} />
      <Route path={Page.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
