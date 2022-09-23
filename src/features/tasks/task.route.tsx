import React from "react";
import Header from "../../components/Header/Header";
import { RouteItem } from "../../routes/routes.type";

const TaskDetail = React.lazy(
  () => import("./components/TaskDetail/TaskDetail")
);

const TaskScreen = React.lazy(() => import("./screens/TaskScreen/TaskScreen"));

const TASK_SCREEN: RouteItem = {
  id: "ts-01",
  path: "/task",
  element: <TaskScreen />,
  childrensRoute: [
    {
      path: ":taskId",
      element: <TaskDetail />,
    },
  ],
  layouts: <Header />,
};

const TASK_ROUTES = [TASK_SCREEN];

export default TASK_ROUTES;
