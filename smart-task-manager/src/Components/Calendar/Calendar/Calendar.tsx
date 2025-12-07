import { useState } from "react";
import "./Calendar.scss";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import type { CalendarEvent } from "../types";

interface CalendarProps {
  events: CalendarEvent[];
  currentDate: Date;
}

export default function Calendar({ events, currentDate }: CalendarProps) {
  const [date] = useState(currentDate);

  return (
    <div className="calendar">
      <CalendarGrid date={date} events={events} />
    </div>
  );
}
