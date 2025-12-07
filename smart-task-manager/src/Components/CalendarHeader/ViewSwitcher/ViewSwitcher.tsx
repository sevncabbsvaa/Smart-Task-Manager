import "./ViewSwitcher.scss";

interface Props {
  view: "month" | "week" | "day";
  setView: (view: "month" | "week" | "day") => void;
}

export default function ViewSwitcher({ view, setView }: Props) {
  return (
    <div className="view-switcher">
      {["month", "week", "day"].map((v) => (
        <button
          key={v}
          className={view === v ? "active" : ""}
          onClick={() => setView(v as any)}
        >
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </button>
      ))}
    </div>
  );
}
