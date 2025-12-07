import "./PersonalInfoForm.scss";
import FormInput from "../FormInput/FormInput";

export default function PersonalInfoForm() {
  return (
    <div className="personal-info">
      <h2>Personal Information</h2>

      <div className="grid">
        <FormInput label="First Name" value="Jane" />
        <FormInput label="Last Name" value="Doe" />
      </div>

      <FormInput
        label="Email Address"
        value="jane.doe@smarttask.com"
        icon="mail"
      />

      <FormInput
        label="Job Title"
        value="Product Manager"
        icon="briefcase"
      />

      <button className="save-btn">Save Changes</button>
    </div>
  );
}
