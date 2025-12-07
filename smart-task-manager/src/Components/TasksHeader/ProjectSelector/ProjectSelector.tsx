import { useState } from "react";
import "./ProjectSelector.scss";
import { FiChevronDown } from "react-icons/fi";
import { PiFilesThin } from "react-icons/pi";

export default function ProjectSelector() {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-selector">
      <div className="project-card" onClick={() => setOpen(!open)}>
        <div className="icon-circle"><PiFilesThin/></div>

        <div className="info">
          <h4>Website Redesign Q3</h4>
          <span>75% complete</span>
        </div>

        <FiChevronDown className={`arrow ${open ? "open" : ""}`} />
      </div>

      {open && (
        <div className="dropdown">
          <p>Website Redesign Q3</p>
          <p>Mobile App UI Project</p>
          <p>Brand Identity Design</p>
        </div>
      )}
    </div>
  );
}
