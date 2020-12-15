import React, { Component } from "react";
import { connect } from "react-redux";

export class index extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
    const user = this.props.userData;
    this.setState({ email: user.email, password: user.password });
  }

  render() {
    return (
      <div className='container'>
        <h2>Welcome, {this.state.email}</h2>
        <button
          className='btn btn-danger'
          onClick={() => this.props.history.replace("/login")}>
          Logout
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.user,
  };
}

export default connect(mapStateToProps)(index);
