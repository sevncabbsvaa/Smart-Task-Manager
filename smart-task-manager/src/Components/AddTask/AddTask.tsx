import { useState } from "react";
import "./AddTask.scss";
import { FiPlus } from "react-icons/fi";

interface AddTaskProps {
  onSubmit: (taskText: string) => void;
  className?: string;
}

export default function AddTask({ onSubmit }: AddTaskProps) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim().length === 0) return;
    onSubmit(text);
    setText("");
  };

  return (
    <div className="add-task-card">
      <h3 className="add-task-title">Add New Task</h3>

      <div className="add-task-row">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="add-task-input"
        />

        <button className="add-task-btn" onClick={handleAdd}>
          <FiPlus size={18} />
          <span>Add Task</span>
        </button>
      </div>
    </div>
  );
}
