import "./CalendarGrid.scss";
import CalendarDay from "../CalendarDay/CalendarDay";
import type { CalendarEvent } from "../types";

interface Props {
  date: Date;
  events: CalendarEvent[];
}

export default function CalendarGrid({ date, events }: Props) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startOffset = firstDay.getDay(); 
  const daysInMonth = lastDay.getDate();

  const totalCells = startOffset + daysInMonth;
  const weeks = Math.ceil(totalCells / 7);

  const grid: (number | null)[] = [];

  for (let i = 0; i < startOffset; i++) grid.push(null);
  for (let i = 1; i <= daysInMonth; i++) grid.push(i);

  while (grid.length < weeks * 7) grid.push(null);

  return (
    <div className="calendar-grid">
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
        <div key={d} className="calendar-header">{d}</div>
      ))}

      {grid.map((day, index) => {
        const dateStr =
          day !== null
            ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
            : "";

        const dayEvents = events.filter((ev) => ev.date === dateStr);

        return <CalendarDay key={index} day={day} events={dayEvents} />;
      })}
    </div>
  );
}
