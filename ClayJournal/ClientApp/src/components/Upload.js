import React, { useRef, useState, useEffect, setValue } from 'react';
import { useForm } from "react-hook-form";
import GlazeAndCoatsSelector from './partials/GlazeAndCoatsSelector';

function Upload() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [glazeAndCoatsSelector, setGlazeAndCoatsSelector] = useState([<GlazeAndCoatsSelector key={0} />]);
  
  // console.log('w', watch(...glazeAndCoatsSelector));

  const onSubmit = (data) => {
    fetch('/pots', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then((response) => response.json())
  }
  // useEffect(() => {
  //   fetch("/pots").then(response => response.json()).then(function(data) { setState(data); setSpinner(false);}).finally(setSpinner(false));
  // });

  // useEffect(() => {
  //   register("glaze" + glazeAndCoatsSelector.length);
  //   register("glaze" + glazeAndCoatsSelector.length + "coats");
  // });

  let handleAddGlazeAndCoatsSelector = (e) => {
    e.preventDefault()
    setGlazeAndCoatsSelector([...glazeAndCoatsSelector, <GlazeAndCoatsSelector key={glazeAndCoatsSelector.length} name={"glaze" + glazeAndCoatsSelector.length}/>]);
  }

  return (
    <div>
      <div className="pageTitle"><h1>Upload a Pot</h1></div>
      <section className="uploadPotFormContainer">
        
        <form className="uploadPotForm" onSubmit={handleSubmit(onSubmit)}>
          
          <label>Name</label>
          <input className={ errors?.name ? "error" : "no-error" } {...register("name", { required: true, minLength: 1, maxLength: 50 })} />
          {errors.name && <span className="errorMsg">This field is required (must be under 50 characters)</span>}
          
          <label>Description</label>
          <textarea className={ errors?.description ? "error" : "no-error" } {...register("description", { required: true, minLength: 1, maxLength: 200 })} />
          {errors.description && <span className="errorMsg">This field is required (must be under 200 characters)</span>}

          <label>Other Notes</label>
          <textarea className={ errors?.description ? "error" : "no-error" } {...register("notes", { required: true, minLength: 1, maxLength: 500 })} />
          {errors.description && <span className="errorMsg">This field is required (must be under 500 characters)</span>}
          
          {/* <button className="button" onClick={handleAddGlazeAndCoatsSelector}>+ Add Glaze & Coats</button>
          
          {glazeAndCoatsSelector} */}

          {/* <input type="file" {...register("potImage")} /> */}

          <input className="button" type="submit" value="Save to my pots"/>
        </form>
      </section>
    </div>
  );
  
}

export default Upload;