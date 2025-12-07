import "./AvatarSection.scss";
import { FiEdit } from "react-icons/fi";
import avatar from '../../../assets/images/user2.png'

export default function AvatarSection() {
  return (
    <div className="avatar-section">
      <div className="left">
        <div className="avatar-wrapper">
          <img src={avatar} alt="Avatar" />
          <div className="edit-icon">
            <FiEdit size={14} />
          </div>
        </div>

        <div className="info">
          <h3>Jane Doe</h3>
          <p>Product Manager</p>
        </div>
      </div>

      <div className="actions">
        <button className="remove-btn">Remove</button>
        <button className="avatar-btn">Change Avatar</button>
      </div>
    </div>
  );
}
