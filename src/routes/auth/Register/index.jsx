import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AppLogo from "../../../assets/logo.png";
import { signUp } from "../../../store/actions";
import { CredentialButton, CredentialField } from "../../../components";

import "./register.css";

const Register = ({ history }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    signUp({
      data: { userName, email, password },
      cbSuccess: (registerData) => {
        setLoading(false);
        if (registerData.success) {
          toast.success("🦄 Register successful!");
          history.replace("/dashboard");
        }
      },
      cbFailure: (err) => {
        setLoading(false);
        if (err) setError(err);
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUserName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <form className='form-signin' onSubmit={handleSubmit}>
      <div className='text-center mb-4'>
        <img
          className='mb-4 App-logo'
          src={AppLogo}
          alt=''
          width='92'
          height='92'
        />
        <h1 className='h3 mb-3 font-weight-normal'>Sign Up</h1>
      </div>

      <CredentialField
        autoFocus={true}
        handleChange={handleChange}
        label='User Name'
        name='username'
        value={userName}
        placeholder='User name'
        type='text'
      />

      <CredentialField
        autoFocus={false}
        handleChange={handleChange}
        label='Email address'
        name='email'
        value={email}
        placeholder='Email address'
        type='email'
      />

      <CredentialField
        autoFocus={false}
        handleChange={handleChange}
        label='Password'
        name='password'
        value={password}
        placeholder='Password'
        type='password'
      />

      <div className='checkbox mb-3'>
        <label>
          Already have an account, <Link to='login'>Login here!</Link>
        </label>
      </div>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}

      <CredentialButton text='Sign up' loading={loading} />
      <p className='mt-5 mb-3 text-muted text-center'>&copy; 2020</p>
    </form>
  );
};

export default Register;
