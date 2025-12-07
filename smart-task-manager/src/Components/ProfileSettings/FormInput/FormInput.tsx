import "./FormInput.scss";
import { FiMail, FiBriefcase } from "react-icons/fi";

interface Props {
  label: string;
  value: string;
  icon?: "mail" | "briefcase";
}

export default function FormInput({ label, value, icon }: Props) {
  const IconComponent = icon === "mail"
    ? FiMail
    : icon === "briefcase"
    ? FiBriefcase
    : null;

  return (
    <div className="form-input">
      <label>{label}</label>

      <div className="input-wrapper">
        {IconComponent && (
          <span className="icon">
            <IconComponent size={16} />
          </span>
        )}
        <input type="text" defaultValue={value} />
      </div>
    </div>
  );
}
