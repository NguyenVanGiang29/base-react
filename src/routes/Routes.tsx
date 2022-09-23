import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundScreen from "../components/NotFoundScreen/NotFoundScreen";
import Login from "../features/Login/Login";
import { ROUTE_LIST } from "./routes.config";

const RouteList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {ROUTE_LIST.map((route) => (
          <Route path="" element={route.layouts}>
            <Route path={route.path} element={route.element} key={route.id}>
              {route.childrensRoute?.map((chilRoute) => (
                <Route path={chilRoute.path} element={chilRoute.element} />
              ))}
            </Route>
          </Route>
        ))}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Suspense>
  );
};

export default RouteList;
