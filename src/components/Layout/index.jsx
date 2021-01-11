import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div className='content-container'>
      <div className='container-fluid'>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
