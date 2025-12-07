import "./TasksHeader.scss";
import ProjectSelector from "../ProjectSelector/ProjectSelector";
import HeaderActions from "../HeaderActions/HeaderActions";
import AvatarGroup from "../AvatarGroup/AvatarGroup";

interface TasksHeaderProps {
  onNewTask: () => void;
  onFilter: () => void;
  onSort: () => void;
}

export default function TasksHeader({ onNewTask, onFilter, onSort }: TasksHeaderProps) {
  return (
    <div className="tasks-header">
      <ProjectSelector />

      <div className="right-section">
        <HeaderActions onFilter={onFilter} onSort={onSort} />
        <AvatarGroup />
        <button className="new-task-btn" onClick={onNewTask}>
          + New Task
        </button>
      </div>
    </div>
  );
}
