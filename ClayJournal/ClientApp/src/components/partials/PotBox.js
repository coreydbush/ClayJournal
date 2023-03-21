import React, { Component, useState, useEffect } from 'react';

function PotBox(props) {

  return (
    <div className="potBox" key={props.pot.potId}>
        <div className="potInner">
            <div>{props.pot.potName}</div>
            <div>{props.pot.potDescription}</div>
        </div>
    </div>
  );

};

export default PotBox;