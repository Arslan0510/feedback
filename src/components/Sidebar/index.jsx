import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo'>Feedback</div>
      <ul className='sidebar-navigation'>
        <li>
          <Link to='/dashboard'>
            <i className='fa fa-home' aria-hidden='true'></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to='/projects'>
            <i className='fa fa-file' aria-hidden='true'></i> Projects
          </Link>
        </li>
        <li>
          <Link to='/feedback'>
            <i className='fa fa-plus-square' aria-hidden='true'></i> Add
            Feedback
          </Link>
        </li>
        <li>
          <Link to='/feedback-completed'>
            <i className='fa fa-list-alt' aria-hidden='true'></i> Completed
            Feedback
          </Link>
        </li>
        <li>
          <Link to='/add-developer'>
            <i className='fa fa-plus-square' aria-hidden='true'></i> Add
            Developer
          </Link>
        </li>
        <li>
          <Link to='/developer'>
            <i className='fa fa-users' aria-hidden='true'></i> Developers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
