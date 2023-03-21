import React, { Component, useState, useEffect } from 'react';
import PotBox from './partials/PotBox';

function Profile(props) {

  const [state, setState] = useState([])
  
  useEffect(() => {
    fetch("/pots").then(response => response.json()).then(data => setState(data))
  })

  return (
    <div className="profileWrapper container">
      <div className="row">
        <section className="sidebar col-md-3">
          <div>Sidebar Item</div>
        </section>
        <section className="userPots row col-md-9">
          {state.map( d => 
            <PotBox key={d.potId} pot={d}/>
          )}
        </section>
      </div>
    </div>
  );

};

export default Profile;
