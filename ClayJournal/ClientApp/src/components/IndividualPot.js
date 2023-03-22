import React, { useRef, useState, useEffect, setValue } from 'react';
import { useForm } from "react-hook-form";
import PlaceholderPotImage from '../Images/pottery-bowls-1.png';

function IndividualPot(props) {

  return (
    <div className="container row">
      <div className="col-md-6">
        <img src={PlaceholderPotImage}/>
      </div>
      <div className="col-md-6">
        <div className="details">
          
        </div>
      </div>
    </div>
  );
  
}

export default IndividualPot;