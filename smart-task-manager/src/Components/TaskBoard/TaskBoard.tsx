import TaskColumn from "./TaskColumn/TaskColumn";
import "./TaskBoard.scss";

const tasks = [
  {
    id: 1,
    title: "Design landing page mockups",
    due: "Due in 2 days",
    priority: "High",
    status: "todo",
  },
  {
    id: 2,
    title: "Develop API for user authentication",
    due: "Due in 5 days",
    priority: "Medium",
    status: "todo",
  },
  {
    id: 3,
    title: "Set up database schema",
    due: "Due in 3 days",
    priority: "Medium",
    status: "inprogress",
  },
  {
    id: 4,
    title: "Write documentation for the API",
    due: "Due in 1 week",
    priority: "Low",
    status: "inprogress",
  },
  {
    id: 5,
    title: "Finalize project requirements",
    due: "Completed Yesterday",
    priority: "Done",
    status: "completed",
  }
];

export default function TaskBoard() {
  return (
    <div className="task-board">
      <TaskColumn title="To Do" tasks={tasks.filter(t => t.status === "todo")} />
      <TaskColumn title="In Progress" tasks={tasks.filter(t => t.status === "inprogress")} />
      <TaskColumn title="Completed" tasks={tasks.filter(t => t.status === "completed")} />
    </div>
  );
}
