import TASK_ROUTES from "../features/tasks/task.route";
import USER_ROUTES from "../features/users/user.route";

export const ROUTE_LIST = [...TASK_ROUTES, ...USER_ROUTES];
