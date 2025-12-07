import "./MonthNavigator.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

export default function MonthNavigator({ currentDate, setCurrentDate }: Props) {
  const goToday = () => setCurrentDate(new Date());

  const goPrev = () => {
    const prev = new Date(currentDate);
    prev.setMonth(prev.getMonth() - 1);
    setCurrentDate(prev);
  };

  const goNext = () => {
    const next = new Date(currentDate);
    next.setMonth(next.getMonth() + 1);
    setCurrentDate(next);
  };

  return (
    <div className="month-nav">
      <button className="icon-btn" onClick={goPrev}>
        <FiChevronLeft />
      </button>

      <button className="today-btn" onClick={goToday}>
        Today
      </button>

      <button className="icon-btn" onClick={goNext}>
        <FiChevronRight />
      </button>
    </div>
  );
}
