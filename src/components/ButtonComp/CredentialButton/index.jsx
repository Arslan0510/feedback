import React from "react";
import { ClipLoader } from "react-spinners";

const CredentialButton = ({ loading, text }) => {
  return (
    <button className='btn btn-lg btn-primary btn-block' type='submit'>
      <div className='sign-in-button'>
        {text}
        <ClipLoader
          color='#fff'
          size={25}
          css={{ marginLeft: 10 }}
          loading={loading}
        />
      </div>
    </button>
  );
};

export default CredentialButton;
