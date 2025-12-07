import "./CardStat.scss";

interface CardStatProps {
  title: string;
  value: number | string;
}

export default function CardStat({ title, value }: CardStatProps) {
  return (
    <div className="card-stat">
      <p className="card-title">{title}</p>
      <h2 className="card-value">{value}</h2>
    </div>
  );
}
