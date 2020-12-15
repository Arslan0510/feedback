import React, { Component } from "react";
import { connect } from "react-redux";
import { Cards, Sidebar } from "../../../components/Dashboard";

import "./dashboard.css";

export class index extends Component {
  state = {
    email: "",
    password: "",
  };

  // componentDidMount() {
  //   const user = this.props.userData;
  //   this.setState({ email: user.email, password: user.password });
  // }

  render() {
    return (
      <>
        <Sidebar />
        <div class='content-container'>
          <div class='container-fluid'>
            <h1>Dashboard</h1>
            <div class='alert alert-danger' role='alert'>
              This template is under maintenance!
            </div>
            <Cards />
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.user,
  };
}

export default connect(mapStateToProps)(index);
