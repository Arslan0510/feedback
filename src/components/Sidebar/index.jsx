import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo'>Simple Admin</div>
      <ul className='sidebar-navigation'>
        {/* <li className='header'>Navigation</li> */}
        <li>
          <Link to='/dashboard'>
            <i className='fa fa-home' aria-hidden='true'></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to='/projects'>
            <i className='fa fa-tachometer' aria-hidden='true'></i> Projects
          </Link>
        </li>
        {/* <li className='header'>Another Menu</li> */}
        <li>
          <Link to='/dashboard'>
            <i className='fa fa-users' aria-hidden='true'></i> Friends
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            <i className='fa fa-cog' aria-hidden='true'></i> Settings
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            <i className='fa fa-info-circle' aria-hidden='true'></i> Information
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
