import React from 'react';
import './Spinner.css';

const spinner = () =>{
  return (
    <div className="row align-items-center justify-content-center" style={{ height: "50vh" }}>
      <div className="col-12 col-md-4">
        <div className="text-center m-5">
          <div className="lds-hourglass"></div>
        </div>
      </div>
    </div>
  );
};

export default spinner;