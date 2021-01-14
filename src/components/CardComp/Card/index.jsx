import React from "react";

import { Setting } from "../../../assets";

const Cards = () => {
  return (
    <div className='card' style={{ width: 300 }}>
      <div className='card-body'>
        <div className='row'>
          <div className='col-md-6'>
            <h6>$153.000</h6>
            <p>Revenue</p>
          </div>
          <div className='col-md-3'>
            <img alt='' src={Setting} width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
