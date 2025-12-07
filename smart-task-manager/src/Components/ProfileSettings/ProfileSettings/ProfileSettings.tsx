import "./ProfileSettings.scss";
import AvatarSection from "../AvatarSection/AvatarSection";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";

export default function ProfileSettings() {
  return (
    <div className="profile-settings">
      <h1>Profile Settings</h1>
      <p className="subtitle">
        Manage your personal information, security preferences, and account look & feel.
      </p>

      <AvatarSection />

      <hr />

      <PersonalInfoForm />
    </div>
  );
}
