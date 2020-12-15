import React from "react";

const Cards = () => {
  return (
    <div class='card' style={{ width: 300 }}>
      <div class='card-body'>
        <div className='row'>
          <div className='col-md-6'>
            <h6>$153.000</h6>
            <p>Revenue</p>
          </div>
          <div className='col-md-6'>
            <i class='fa fa-home' aria-hidden='true' style={{ fontSize: 50 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
