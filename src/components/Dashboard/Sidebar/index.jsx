import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div class='sidebar-container'>
      <div class='sidebar-logo'>Simple Admin</div>
      <ul class='sidebar-navigation'>
        {/* <li class='header'>Navigation</li> */}
        <li>
          <Link to='/dashboard'>
            <i class='fa fa-home' aria-hidden='true'></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to='/feedback'>
            <i class='fa fa-tachometer' aria-hidden='true'></i> Feedback
          </Link>
        </li>
        {/* <li class='header'>Another Menu</li> */}
        <li>
          <Link to='/dashboard'>
            <i class='fa fa-users' aria-hidden='true'></i> Friends
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            <i class='fa fa-cog' aria-hidden='true'></i> Settings
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            <i class='fa fa-info-circle' aria-hidden='true'></i> Information
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
