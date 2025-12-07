import Calendar from "../../Components/Calendar/Calendar/Calendar";
import CalendarHeader from "../../Components/CalendarHeader/CalendarHeader/CalendarHeader";

const events = [
  { id: 1, date: "2023-09-02", title: "Design Review", color: "#93c5fd", time: "10:00 AM" },
  { id: 2, date: "2023-09-04", title: "Dev Sprint Kickoff", color: "#d8b4fe" },
  { id: 3, date: "2023-09-04", title: "User Testing", color: "#bae6fd" },
  { id: 4, date: "2023-09-05", title: "Client Call", color: "#bbf7d0" },
  { id: 5, date: "2023-09-05", title: "Q3 Report Due", color: "#fde68a" },
  { id: 6, date: "2023-09-09", title: "Bug Bash", color: "#fecaca" },
  { id: 7, date: "2023-09-17", title: "Draft Content", color: "#e5e7eb" }
];

export default function CalendarPage() {
    return(
        <div>
            <CalendarHeader/>
            <Calendar events={events} currentDate={new Date(2023, 8, 1)}/>
        </div>
    )
}