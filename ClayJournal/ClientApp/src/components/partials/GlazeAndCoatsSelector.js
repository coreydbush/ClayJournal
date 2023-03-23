import React, { Component, useState, useEffect, setValue } from 'react';
import { useForm } from "react-hook-form";

function GlazeAndCoatsSelector(props) {

  const [value, setValue] = useState();
  const [coats, setCoats] = useState();

  return (
    <div className="glazeAndCoatsContainer">

          <select name={props.name} value={props.name} onChange={(e) => setValue(props.name, e.target.value)} >
            <option value="null">No glaze</option>
            <option value="1">PC56: Ancient Copper</option>
            <option value="2">Celadon Snow</option>
            <option value="3">Satin Patina</option>
            <option value="4">SM6: Matte Black</option>
          </select>
    
          <input type="number" min="1" max="20" name={props.name + "coats"} value={props.name + "coats"} onChange={(e) => setCoats(props.name + "coats", e.target.value)}/>

    </div>
  );

};

export default GlazeAndCoatsSelector;