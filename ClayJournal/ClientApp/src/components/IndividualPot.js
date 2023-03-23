import React, { useRef, useState, useEffect, setValue } from 'react';
import { useForm } from "react-hook-form";
import PlaceholderPotImage from '../Images/pottery-bowls-1.png';
import ZoomImage from './partials/ZoomImage'

function IndividualPot(props) {

  return (
    <div className="container row individualPot">
      <div className="col-md-4">
        <ZoomImage src={PlaceholderPotImage} />
      </div>
      <div className="col-md-8">
        <div className="details">
          <div className="potSection titleAndDescription">
            <div className="titleRow">
              <h1>Pot Title</h1>
              <button className="button error">Delete</button>
            </div>
            <div className="description">
              Pot Description here. ot Description here.ot Description here.ot Description here. 
              Pot Description here.ot Description here. Pot Description here.ot Description here.ot Description here.ot Description here.
            </div>
          </div>
          <div className="potSection glazes">
            <h2>Glazes</h2>
            <div className="glaze">
              <div className="numberOfCoats">3 coats</div>
              <div className="glazeName">Amaco PC56: Ancient Copper</div>
              
            </div>
            <div className="glaze">
            <div className="numberOfCoats">2 coats</div>
              <div className="glazeName">Mayco Satin Patina</div>
            </div>
            <div className="glaze">
              <div className="numberOfCoats">2 coats</div>
              <div className="glazeName">Celadon Snow</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 potSection notes">
        <h2>Notes</h2>
        Notes about this pot. Notes about this pot. Notes about this pot. Notes about this pot. Notes about this pot. 
        Notes about this pot. Notes about this pot. Notes about this pot. Notes about this pot. Notes about this pot. 
      </div>
    </div>
  );
  
}

export default IndividualPot;