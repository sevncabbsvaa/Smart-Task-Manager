import "./CalendarDay.scss";
import type { CalendarEvent } from "../types";

interface Props {
  day: number | null;
  events: CalendarEvent[];
}

export default function CalendarDay({ day, events }: Props) {
  return (
    <div className="calendar-day">
      <div className="day-number">{day}</div>

      <div className="events">
        {events.map((ev) => (
          <div key={ev.id} className="event" style={{ background: ev.color }}>
            <span>{ev.title}</span>
            {ev.time && <small>{ev.time}</small>}
          </div>
        ))}
      </div>
    </div>
  );
}
