import "./AvatarGroup.scss";
import user1 from '../../../assets/images/user1.png'
import user2 from '../../../assets/images/user2.png'
import user3 from '../../../assets/images/user3.png'

export default function AvatarGroup() {
  return (
    <div className="avatar-group">
      <img src={user1} alt="user" />
      <img src={user2} alt="user" />
      <img src={user3} alt="user" />
      <span className="extra">+4</span>
    </div>
  );
}
