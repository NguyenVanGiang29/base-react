import React from "react";
import Header from "../../components/Header/Header";
import { RouteItem } from "../../routes/routes.type";

const UserScreen = React.lazy(() => import("./UserScreen/UserScreen"));

const USER_SCREEN: RouteItem = {
  id: "us-01",
  path: "/user",
  element: <UserScreen />,
  layouts: <Header />,
};

const USER_ROUTES = [USER_SCREEN];

export default USER_ROUTES;
