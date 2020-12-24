import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import AppLogo from "../../../assets/logo.png";
import data from "../../../services/mocks/user.json";
import { signIn } from "../../../store/actions";
import "./login.css";

const Login = () => {
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
        toast.success("🦄 Login Successful!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
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

      <div className='form-label-group'>
        <label htmlFor='inputEmail'>Email address</label>
        <input
          type='email'
          id='inputEmail'
          name='email'
          className='form-control'
          placeholder='Email address'
          value={email}
          onChange={handleChange}
          required
          autoFocus
        />
      </div>

      <div className='form-label-group'>
        <label htmlFor='inputPassword'>Password</label>
        <input
          type='password'
          id='inputPassword'
          name='password'
          className='form-control'
          placeholder='Password'
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <div className='checkbox mb-3'>
        <label>
          Are you new? <Link to='register'>Register here for free!</Link>
        </label>
      </div>
      <button className='btn btn-lg btn-primary btn-block' type='submit'>
        <div className='sign-in-button'>
          Sign in
          <ClipLoader
            color='#fff'
            size={25}
            css={{ marginLeft: 10 }}
            loading={loading}
          />
        </div>
      </button>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <p className='mt-5 mb-3 text-muted text-center'>&copy; 2020</p>
    </form>
  );
};

export default Login;
