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
    return <div className='container'>Welcome, {this.state.email}</div>;
  }
}

function mapStateToProps(state) {
  return {
    userData: state.user,
  };
}

export default connect(mapStateToProps)(index);
