import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { listTask, getListTask } from "../../sliceTask";
import ViewIcon from "@mui/icons-material/Create";
import "./task-screen.css";
import NameList from "../../../../components/NameList/NameList";
const TaskScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const listTasks = useAppSelector(listTask);

  console.log({ listTasks });

  useEffect(() => {
    dispatch(getListTask());
  }, [dispatch]);

  return (
    <div className="background-task">
      <div className="container">
        <NameList name="List Task" />
        <div className="task">
          <div className="list-task">
            <div className="item">
              <div className="name-task">Task 1</div>
              <button
                onClick={() => {
                  navigate("/task/1");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/2");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/3");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
            <div className="item">
              <div className="name-task">Task 2</div>
              <button
                onClick={() => {
                  navigate("/task/5");
                }}
              >
                <ViewIcon />
              </button>
            </div>
          </div>
          <div className="detail-task">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskScreen;
