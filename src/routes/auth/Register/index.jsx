import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import AppLogo from "../../../assets/logo.png";
import "./register.css";
import { signUp } from "../../../store/actions";

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
          toast.success("🦄 Register successful!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          history.replace("/");
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

      <div className='form-label-group'>
        <label htmlFor='inputName'>User Name</label>
        <input
          type='text'
          name='username'
          id='inputName'
          className='form-control'
          placeholder='User name'
          value={userName}
          onChange={handleChange}
          required
          autoFocus
        />
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
          Already have an account, <Link to='login'>Login here!</Link>
        </label>
      </div>
      <button className='btn btn-lg btn-primary btn-block' type='submit'>
        <div className='sign-in-button'>
          Sign up{" "}
          <ClipLoader
            color='#fff'
            size={30}
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

export default Register;
