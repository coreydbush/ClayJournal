import React, { Component, useState, useEffect } from 'react';
import PotBox from './partials/PotBox';
import Spinner from './partials/Spinner';

function Browse(props) {

  const [state, setState] = useState([])
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("/pots").then(response => response.json()).then(function(data) { setState(data); setSpinner(false);}).finally(setSpinner(false));
  })

  return (
    <div className="profileWrapper container">
      {spinner ? <Spinner /> : ''}
      <div className="pageTitle"><h1>Browse Submissions</h1></div>
      <div className="row">
        <section className="userPots row col-md-12">
          {state.map( d => 
            <PotBox key={d.potId} pot={d}/>
          )}
        </section>
      </div>
    </div>
  );

};

export default Browse;
