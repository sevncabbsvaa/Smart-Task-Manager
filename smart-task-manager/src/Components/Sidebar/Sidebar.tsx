import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

import profil from "../../assets/images/profil-picture.jpg";
import logo from "../../assets/images/logo.png";

interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}

export default function Sidebar () {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const user: UserProfile = {
    name: "Maria Sanchez",
    email: "maria.sanchez@email.com",
    avatar: profil,
  };

  const navItems = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/tasks", label: "Tasks" },
    { to: "/client/chatbot", label: "Calendar" },
    { to: "/therapist-sign-up", label: "Settings" },
  ];

  return (
    <>
      <aside className={`client-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="csb-logo">
          <img src={logo} alt="logo" />
          <h2>SmartTask</h2>
        </div>

        <nav className="csb-menu">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </nav>


        <div className="csb-profile">
          <img src={user.avatar} alt="profil" />
          <div>
            <p className="name">{user.name}</p>
            <p className="email">{user.email}</p>
          </div>
        </div>
      </aside>

      <div className="client-burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
