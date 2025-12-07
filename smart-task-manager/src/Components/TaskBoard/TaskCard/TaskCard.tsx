import "./TaskCard.scss"

interface Task {
  id: number;
  title: string;
  due: string;
  priority: string;
  status: string;
}

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="task-card">
      <p className={task.status === "completed" ? "done" : ""}>{task.title}</p>

      <div className="info">
        <span className="due">{task.due}</span>
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>
    </div>
  );
}
