import "./AddTaskButton.scss";
import { FiPlus } from "react-icons/fi";

interface AddTaskButtonProps {
  onClick: () => void;
}

export default function AddTaskButton({ onClick }: AddTaskButtonProps) {
  return (
    <div className="add-task-button" onClick={onClick}>
      <FiPlus size={18} />
      <span>Add Task</span>
    </div>
  );
}
