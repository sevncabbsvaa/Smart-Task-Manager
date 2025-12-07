import "./AddTaskButton.scss";
import { FiPlus } from "react-icons/fi";

export default function AddTaskButton() {
  return (
    <button className="add-task-btn">
      <FiPlus size={16} />
      Add Task
    </button>
  );
}
