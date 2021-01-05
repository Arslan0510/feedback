import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import AppLogo from "../../../assets/logo.png";
import { CredentialButton } from "../../../components";
import CredentialField from "../../../components/CredentialField";
import data from "../../../services/mocks/user.json";
import { signIn } from "../../../store/actions";

import "./login.css";

const Login = ({ history }) => {
  const [userData, setUserData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserData(data.user);
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signIn({
      data: { email, password },
      cbSuccess: () => {
        toast.success("🦄 Login Successful!");
        setLoading(false);
        history.replace("/dashboard");
      },
      cbFailure: (err) => {
        setLoading(false);
        if (err) setError(err);
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <form
      className='form-signin'
      onSubmit={handleSubmit}
      style={{ marginTop: 30 }}>
      <div className='text-center mb-4'>
        <img
          className='mb-4 App-logo'
          src={AppLogo}
          alt=''
          width='92'
          height='92'
        />
        <h1 className='h3 mb-3 font-weight-normal'>Sign In</h1>
      </div>

      <CredentialField
        autoFocus={true}
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
          Are you new? <Link to='register'>Register here for free!</Link>
        </label>
      </div>

      {error ? <p style={{ color: "red" }}>{error}</p> : null}

      <CredentialButton text='Sign In' loading={loading} />
      <p className='mt-5 mb-3 text-muted text-center'>&copy; 2020</p>
    </form>
  );
};

export default Login;
