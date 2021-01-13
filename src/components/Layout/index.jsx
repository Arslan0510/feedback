import React from "react";

const Layout = ({ children, title, onRefresh, refreshBtnSize = 50 }) => {
  return (
    <div className='content-container h-100'>
      <div className='d-flex flex-column p-3 m-0 w-100 h-100'>
        <div className='row p-0 m-0 justify-content-between align-items-center'>
          <h3 className="font-weight-light text-secondary">{title}</h3>
          {onRefresh && (
            <button onClick={onRefresh} className="shadow-sm btn-danger fa fa-undo" style={{
              width: refreshBtnSize,
              height: refreshBtnSize,
              borderRadius: refreshBtnSize / 2
            }} />
          )}
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
