import TaskBoard from "../../Components/TaskBoard/TaskBoard";
import TasksHeader from "../../Components/TasksHeader/TasksHeader/TasksHeader";


export default function TasksPage() {
    const handleNewTask = () => {
    console.log("Yeni task əlavə etmək üçün modal aç!");
  };

  const handleFilter = () => {
    console.log("Filter panelini aç!");
  };

  const handleSort = () => {
    console.log("Task-ları sort et!");
  };

  return (
    <div className="tasks-page">
      <TasksHeader 
        onNewTask={handleNewTask}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <TaskBoard/>
    </div>  
  )
}