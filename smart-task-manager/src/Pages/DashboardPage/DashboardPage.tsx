import { useState } from "react";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { FaBell } from "react-icons/fa6";
import './DashboardPage.scss'
import CardStat from "../../Components/CardStat/CardStat";
import AddTask from "../../Components/AddTask/AddTask";
import ProgressCard from "../../Components/ProgressCard/ProgressCard";
import TaskBoard from "../../Components/TaskBoard/TaskBoard";

export default function DashboardPage() {

    const [search, setSearch] = useState("");

    return(
        <div className="dashboard-wrapper">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <div className="right">
                    <SearchInput
                        value={search} 
                        onChange={setSearch} 
                        placeholder="Search tasks..." 
                    />
                    <FaBell className="notifyIcon"/>
                </div>
            </div>
            <div className="cards">
                <CardStat title="Task To Do" value={28}/>
                <CardStat title="In Progress" value={12}/>
                <CardStat title="Completed" value={60}/>
            </div>
            <div className="add-task">
                <AddTask onSubmit={(task) => console.log("New task:", task)}/>
                <ProgressCard 
                    title="Overall Progress"
                    projectName="Project Alpha"
                    progress={68}
                />
            </div>
            <div>
                <h2>Task Board</h2>
                <TaskBoard/>
            </div>
        </div>
    )
}