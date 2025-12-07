import "./ProgressCard.scss";

interface ProgressCardProps {
  title: string;          
  projectName: string;    
  progress: number;       
}

export default function ProgressCard({ title, projectName, progress }: ProgressCardProps) {
  return (
    <div className="progress-card">
      <h3 className="progress-title">{title}</h3>

      <div className="progress-header">
        <span className="project-name">{projectName}</span>
        <span className="progress-value">{progress}%</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
