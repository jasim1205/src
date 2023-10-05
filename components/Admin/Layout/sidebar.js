import {React} from "react";
import "./layout.css";

import { useState } from "react";

function Sidebar() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));
  return (
    <div className="col-2">
      <div className="dashboard-sidebar">
        <div className="dashboard-user-image">
          <img src={`http://localhost/react_api/${userLogged.image}`} alt="" />
        </div>
        <a className="navbar-brand" href="#">
          {userLogged.name}
        </a>
        <hr style={{ backgroundColor: "#ffffff" }} />
        <a href="./dashboard" className="dashboard-nav-link">
          Admin Dashboard
        </a>
        <a href="./" className="dashboard-nav-link">
          Home
        </a>
        <a href="./user" className="dashboard-nav-link">
          User
        </a>
        <a href="./teacher" className="dashboard-nav-link">
          Teacher
        </a>
        <a href="./student" className="dashboard-nav-link">
          Student
        </a>
        <a href="./attendance" className="dashboard-nav-link">
          Attendance
        </a>
        <a href="./section" className="dashboard-nav-link">
          Section
        </a>
        <a href="./class" className="dashboard-nav-link">
          Classes
        </a>
        <a href="./subject" className="dashboard-nav-link">
          Subject
        </a>
        <a href="./routine" className="dashboard-nav-link">
          Routine
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
