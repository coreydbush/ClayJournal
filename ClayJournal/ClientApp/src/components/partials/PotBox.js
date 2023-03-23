import React, { Component, useState, useEffect } from 'react';
import PlaceholderPotImage from '../../Images/pottery-bowls-1.png';
import {Link} from "react-router-dom";

function PotBox(props) {

  return (
    <div className="potBox col-lg-3 col-md-6 col-sm-6" key={props.pot.potId}>
      <Link to={"/viewpots/" + props.pot.potId}>
        <div className="potInner">
          <div className="potImage" style={{
            backgroundImage: 'url(data:image/png;base64,' + props.pot.potImage + ')',
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}></div>
          <div>
            <div><h2>{props.pot.potName}</h2></div>
            <div className="clayType">VP Porcelain</div>
          </div>
          <div className="potDescription">{props.pot.potDescription}</div>
        </div>
      </Link>
    </div>
  );

};

export default PotBox;