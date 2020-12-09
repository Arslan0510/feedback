import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";

import AppLogo from "../../assets/logo.png";
import data from "../../services/mocks/user.json";
import { signInUser } from "../../store/actions/users";

import "./login.css";

export default function Login(props) {
  const [userData, setUserData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setUserData(data.user);
  }, [userData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = { email: email, password: password };
    if (email === userData.email) {
      dispatch(signInUser({ user }));
      setTimeout(() => {
        setIsLoading(false);
        props.history.replace("/dashboard");
      }, 2000);
    } else {
      alert("Invalid email");
      setIsLoading(false);
    }
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
        <label htmlFor='inputEmail'>Email address</label>
      </div>

      <div className='form-label-group'>
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
        <label htmlFor='inputPassword'>Password</label>
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
            loading={isLoading}
          />
        </div>
      </button>
      {errors ? <p style={{ color: "red" }}>{errors}</p> : null}
      <p className='mt-5 mb-3 text-muted text-center'>&copy; 2020</p>
    </form>
  );
}
