import React, { useRef, useState, useEffect, setValue } from 'react';
import { useForm } from "react-hook-form";
import PlaceholderPotImage from '../Images/pottery-bowls-1.png';
import ZoomImage from './partials/ZoomImage'
import Spinner from './partials/Spinner';

function IndividualPot(props) {
  const [potId, setPotId] = useState();
  const [state, setState] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    let url = window.location.href;
    let splitUrlArr = url.split('/');
    setPotId(splitUrlArr[splitUrlArr.length-1]);
  });

  useEffect(() => {
    fetch('/pots/' + potId)
      .then(response => response.json())
      .then(function(data) { setState(data); setSpinner(false);})
      .finally(setSpinner(false));
  });

  let handleDeletePot = () => {
    // DELETE request using fetch with error handling
    fetch('/pots/' + potId, { method: 'DELETE' })
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            setState(...state, { status: 'Deleted' })
        })
        .catch(error => {
            console.error('There was an error.', error);
        });
  }

  return (
    <div className="container row individualPot">
      {spinner ? <Spinner /> : ''}
      {state.status === 'Deleted' ? <div>Deleted</div> :
        <div className="row container">
        <div className="col-md-4">
          <ZoomImage potImage={`data:image;base64, ${state.potImage}`} />
        </div>
        <div className="col-md-8">
          <div className="details">
            <div className="potSection titleAndDescription">
              <div className="titleRow">
                <h1>{state.potName}</h1>
                <button className="button error" onClick={handleDeletePot}>Delete</button>
              </div>
              <div className="description">
                {state.potDescription}
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
          {state.potNotes}
        </div>
        </div>
      }
    </div>
  );
  
}

export default IndividualPot;