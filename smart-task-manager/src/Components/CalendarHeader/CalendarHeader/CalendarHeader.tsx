import "./CalendarHeader.scss";
import MonthNavigator from "../MonthNavigator/MonthNavigator";
import ViewSwitcher from "../ViewSwitcher/ViewSwitcher";
import AddTaskButton from "../AddTaskButton/AddTaskButton";
import { useState } from "react";

export default function CalendarHeader() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week" | "day">("month");

  return (
    <div className="calendar-header">
      <div className="left">
        <h2>
          {currentDate.toLocaleString("en-US", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>

        <MonthNavigator currentDate={currentDate} setCurrentDate={setCurrentDate} />
      </div>

      <div className="right">
        <ViewSwitcher view={view} setView={setView} />
        <AddTaskButton />
      </div>
    </div>
  );
}
