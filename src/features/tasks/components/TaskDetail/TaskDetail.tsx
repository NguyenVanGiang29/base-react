import { useParams } from "react-router-dom";
import "./TaskDetail.css";

const TaskDetail = () => {
  const { taskId } = useParams();
  return (
    <>
      <div>Detail task</div>
      <div>Task {taskId}</div>
    </>
  );
};

export default TaskDetail;
