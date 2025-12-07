import TaskCard from "../TaskCard/TaskCard";
import AddTaskButton from "../../AddTaskButton/AddTaskButton";
import "./TaskColumn.scss";

interface Task {
  id: number;
  title: string;
  due: string;
  priority: string;
  status: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onAddTask: (column: string) => void;
}

export default function TaskColumn({ title, tasks, onAddTask }: TaskColumnProps) {
  return (
    <div className="task-column">
      <div className="column-header">
        <h3>{title}</h3>
        <span>{tasks.length}</span>
      </div>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

      <AddTaskButton onClick={() => onAddTask(title)} />
    </div>
  );
}
