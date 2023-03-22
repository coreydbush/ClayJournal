import React, { Component, useState, useEffect, setValue } from 'react';
import SpinnerSVG from '../../Images/spinner.svg';

function Spinner() {
  
  return (
    <div className="spinner">
        <img src={SpinnerSVG}/>
    </div>
  );

};

export default Spinner;