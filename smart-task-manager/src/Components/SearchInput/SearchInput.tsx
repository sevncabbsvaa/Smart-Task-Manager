import "./SearchInput.scss";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <div className="search-wrapper">
      <CiSearch className="search-icon" />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
