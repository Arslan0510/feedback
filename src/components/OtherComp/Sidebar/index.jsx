import {Button} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {CompanyLogo} from "../../../assets";
import {sidebar} from "./side-bar";
import firebase from "firebase";
import "./sidebar.css";
import {routes} from "../../../services";

const imgSize = 125;
const Sidebar = () => {
  return (
    <div className='sidebar-container h-100 bg-light d-flex flex-column'>
      <div className='w-100 py-4 text-center'>
        <img
          alt=''
          src={CompanyLogo}
          className='shadow-lg p-3 rounded-circle'
          style={{
            objectFit: "cover",
            width: imgSize,
            height: imgSize,
          }}
        />
      </div>
      <ul className='sidebar-navigation text-dark'>
        {sidebar.map(({to, name, icon}) => (
          <li>
            <Link to={to} className='text-dark'>
              <i className={`fa ${icon}`} aria-hidden='true' /> {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className='flex-fill row p-3 m-0 align-items-end'>
        <Link to={routes.login} style={{textDecoration: "none"}}>
          <Button
            variant='light border'
            onClick={() => firebase.auth().signOut()}>
            <i className='fa fa-power-off mr-2' aria-hidden='true' /> Sign out
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
