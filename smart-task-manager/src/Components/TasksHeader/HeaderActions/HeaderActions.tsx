import "./HeaderActions.scss";
import { FiFilter, FiArrowDown} from "react-icons/fi";

interface HeaderActionsProps {
    onFilter : () => void;
    onSort : () => void;
}

export default function HeaderActions({ onFilter, onSort } : HeaderActionsProps) {
  return (
    <div className="header-actions">
      <button onClick={onFilter}>
        <FiFilter /> Filter
      </button>

      <button onClick={onSort}>
        <FiArrowDown/> Sort
      </button>
    </div>
  );
}
