import React, { Component, useState, useEffect } from 'react';
import PotBox from './partials/PotBox';
import Spinner from './partials/Spinner';
import Scrollbar from './partials/Scrollbar';

function Browse(props) {

  const [state, setState] = useState([])
  const [spinner, setSpinner] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/pots").then(response => response.json()).then(function(data) { setState(data); setSpinner(false);}).finally(setSpinner(false));
  })

  return (
    <div className="profileWrapper container">
      {spinner ? <Spinner /> : ''}
      <div className="pageTitleContainer">
        <div className="pageTitle"><h1>Browse Submissions</h1></div>
        <div className="searchContainer">
          <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <Scrollbar>
            <div className="userPots row col-md-12">
                    {state.filter(( f => { 
                    return searchQuery.toLowerCase().length < 2 ? f 
                    : f.potDescription.toLowerCase().includes(searchQuery) || f.potName.toLowerCase().includes(searchQuery)}))
                    .map( d => 
                    <PotBox key={d.potId} pot={d}/>
                    )}   
            </div>
        </Scrollbar>
      </div>
    </div>
  );

};

export default Browse;
