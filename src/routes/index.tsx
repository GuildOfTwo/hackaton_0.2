import { Route, Routes } from "react-router-dom"
import { Page } from "../utils/constants/navigation";
import MainPage from "../pages/Main";
import { Unavailable } from "../pages/unavailable";
import { NotFound } from "../pages/not-found";
import { Dashboard } from "../views/Dashboard";
import { Authorization } from "../pages/authorization/authorization";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Page.AUTHORIZATION} element={<Authorization />} />
      <Route path={Page.MAIN} element={<MainPage />}>
        <Route path={Page.DASHBOARD} element={<Dashboard />} />
      </Route>
      <Route path={Page.UNAVAILABLE} element={<Unavailable />} />
      <Route path={Page.NOT_FOUND} element={<NotFound />} />

    </Routes>
  )
}

export default AppRoutes;


